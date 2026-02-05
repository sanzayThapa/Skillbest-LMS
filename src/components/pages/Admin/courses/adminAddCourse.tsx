"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import CustomSelect from '@/core/common/commonSelect';
import { CourseLevel, CourseVideo, Language, PrivateCourse } from '@/core/common/selectOption/json/selectOption';
import DefaultEditor from "react-simple-wysiwyg";
import { all_routes } from '@/router/all_routes';
import ImageWithBasePath from '@/core/common/imageWithBasePath';
import VideoModal from '@/components/pages/HomePages/home-one/section/videoModal';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';
import Breadcrumb from '@/core/common/Breadcrumb/breadcrumb';
import { Plus, Trash, Layers } from "lucide-react";

const AdminAddCourseComponent = () => {
    const route = all_routes;
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState({ image: false, video: false });
    const [categories, setCategories] = useState<any[]>([]);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [newChapterTitle, setNewChapterTitle] = useState("");
    const [showVideoModal, setShowVideoModal] = useState(false);

    // Form State
    const [courseData, setCourseData] = useState({
        title: "",
        categoryId: "",
        level: "Beginner",
        language: "English",
        maxStudents: "0",
        isPublic: true,
        shortDescription: "",
        description: "",
        learningItems: ["Become a UX designer"],
        requirements: [""],
        isFeatured: false,
        imageUrl: "",
        videoUrl: "",
        videoType: "External",
        price: "0",
        isFree: false,
        faq: [{ question: "", answer: "" }],
        chapters: [] as any[]
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const { data } = await api.get('/courses/meta/categories');
            setCategories(data.map((c: any) => ({ label: c.name, value: c.id })));
        } catch (error) {
            console.error("Failed to fetch categories", error);
        }
    };

    const handleAddCategory = async () => {
        if (!newCategoryName) return;
        try {
            const { data } = await api.post('/courses/meta/categories', { name: newCategoryName });
            setCategories([...categories, { label: data.name, value: data.id }]);
            setCourseData({ ...courseData, categoryId: data.id });
            setNewCategoryName("");
        } catch (error) {
            console.error("Failed to add category", error);
        }
    };

    const handleNext = () => setCurrentStep(currentStep + 1);
    const handlePrev = () => setCurrentStep(currentStep - 1);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading({ ...uploading, [type]: true });
        const formData = new FormData();
        formData.append('file', file);

        try {
            const { data } = await api.post('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            if (type === 'image') setCourseData(prev => ({ ...prev, imageUrl: data.url }));
            else setCourseData(prev => ({ ...prev, videoUrl: data.url }));
        } catch (error) {
            console.error("Upload failed", error);
            alert("Upload failed. Please try again.");
        } finally {
            setUploading({ ...uploading, [type]: false });
        }
    };

    const handleAddChapter = () => {
        if (!newChapterTitle) return;
        const newChapter = {
            id: `temp-chapter-${Date.now()}`,
            title: newChapterTitle,
            lessons: []
        };
        setCourseData({ ...courseData, chapters: [...courseData.chapters, newChapter] });
        setNewChapterTitle("");
    };

    const handleAddLesson = (chapterId: string) => {
        const lessonTitle = prompt("Enter lesson title:");
        if (!lessonTitle) return;
        const newLesson = {
            id: `temp-lesson-${Date.now()}`,
            title: lessonTitle
        };

        const updatedChapters = courseData.chapters.map(ch => {
            if (ch.id === chapterId) {
                return { ...ch, lessons: [...ch.lessons, newLesson] };
            }
            return ch;
        });
        setCourseData({ ...courseData, chapters: updatedChapters });
    };

    const removeChapter = (id: string) => {
        setCourseData({ ...courseData, chapters: courseData.chapters.filter(ch => ch.id !== id) });
    };

    const removeLesson = (chapterId: string, lessonId: string) => {
        const updatedChapters = courseData.chapters.map(ch => {
            if (ch.id === chapterId) {
                return { ...ch, lessons: ch.lessons.filter((l: any) => l.id !== lessonId) };
            }
            return ch;
        });
        setCourseData({ ...courseData, chapters: updatedChapters });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            // 1. Create Course
            const { data: course } = await api.post('/courses', { title: courseData.title });

            // 2. Update Course Details
            await api.patch(`/courses/${course.id}`, {
                categoryId: courseData.categoryId,
                description: courseData.description,
                price: parseFloat(courseData.price),
                imageUrl: courseData.imageUrl,
                videoUrl: courseData.videoUrl,
                language: courseData.language,
                requirements: courseData.learningItems.concat(courseData.requirements),
                faq: courseData.faq,
                isPublished: true
            });

            // 3. Chapters & Lessons
            for (const chapter of courseData.chapters) {
                const { data: newChapter } = await api.post(`/courses/${course.id}/chapters`, { title: chapter.title });
                for (const lesson of chapter.lessons) {
                    await api.post(`/courses/chapters/${newChapter.id}/lessons`, { title: lesson.title });
                }
            }

            // Success
            alert("Course created successfully!");
            router.push('/admin/courses');
        } catch (error) {
            console.error("Failed to submit course", error);
            alert("Failed to create course");
        } finally {
            setLoading(false);
        }
    };

    // Helper to add/remove items (learning items, requirements, faq)
    const addItem = (field: 'learningItems' | 'requirements') => {
        setCourseData({ ...courseData, [field]: [...courseData[field], ""] });
    };

    const removeItem = (field: 'learningItems' | 'requirements', index: number) => {
        setCourseData({ ...courseData, [field]: courseData[field].filter((_, i) => i !== index) });
    };

    const updateItem = (field: 'learningItems' | 'requirements', index: number, value: string) => {
        const newItems = [...courseData[field]];
        newItems[index] = value;
        setCourseData({ ...courseData, [field]: newItems });
    };

    return (
        <>
            <Breadcrumb title='Add New Course' />
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="add-course-item">
                                <div className="wizard">
                                    <ul className="form-wizard-steps" id="progressbar2">
                                        {[
                                            { step: 1, label: "Course Information" },
                                            { step: 2, label: "Course Media" },
                                            { step: 3, label: "Curriculum" },
                                            { step: 4, label: "Additional Info" },
                                            { step: 5, label: "Pricing" }
                                        ].map((item) => (
                                            <li key={item.step} className={currentStep === item.step ? 'progress-active' : currentStep > item.step ? 'progress-activated' : ''}>
                                                <div className="profile-step">
                                                    <span className="dot-active mb-2">
                                                        <span className="number">{item.step.toString().padStart(2, '0')}</span>
                                                        <span className="tickmark"><i className="fa-solid fa-check" /></span>
                                                    </span>
                                                    <div className="step-section"><p>{item.label}</p></div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="initialization-form-set">
                                    {/* Step 1: Basic Information */}
                                    {currentStep === 1 && (
                                        <fieldset className="form-inner wizard-form-card" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                                            <div className="title border-0 mb-3 p-0"><h5>Basic Information</h5></div>
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="input-block">
                                                        <label className="form-label">Course Title <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="input-block">
                                                        <label className="form-label">Category</label>
                                                        <div className="d-flex gap-2">
                                                            <CustomSelect options={categories} value={categories.find(c => c.value === courseData.categoryId)} onChange={(e: any) => setCourseData({ ...courseData, categoryId: e.value })} placeholder="Select Category" />
                                                            <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#add-category-modal">+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="input-block">
                                                        <label className="form-label">Level</label>
                                                        <CustomSelect options={CourseLevel} value={CourseLevel.find(l => l.value === courseData.level)} onChange={(e: any) => setCourseData({ ...courseData, level: e.value })} placeholder="Select" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="input-block">
                                                        <label className="form-label">Language</label>
                                                        <CustomSelect options={Language} value={Language.find(l => l.value === courseData.language)} onChange={(e: any) => setCourseData({ ...courseData, language: e.value })} placeholder="Select" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="input-block">
                                                        <label className="form-label">Description</label>
                                                        <div className="summernote">
                                                            <DefaultEditor value={courseData.description} onChange={(e) => setCourseData({ ...courseData, description: e.target.value })} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mt-4">
                                                <div className="btn-left">
                                                    <button className="btn btn-primary" onClick={handleNext}>Next <i className="isax isax-arrow-right-3 ms-1" /></button>
                                                </div>
                                            </div>
                                        </fieldset>
                                    )}

                                    {/* Step 2: Course Media */}
                                    {currentStep === 2 && (
                                        <fieldset className="form-inner wizard-form-card" style={{ display: 'block' }}>
                                            <div className="title border-0 mb-3 p-0">
                                                <h5>Course Media</h5>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <div className="input-block">
                                                        <label className="form-label">Course Thumbnail</label>
                                                        <div className="upload-img-section d-flex align-items-center justify-content-center border rounded bg-light p-4 position-relative">
                                                            {uploading.image ? (
                                                                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
                                                            ) : courseData.imageUrl ? (
                                                                <img src={courseData.imageUrl} className="img-fluid rounded mb-2" style={{ maxHeight: '120px' }} alt="Thumbnail" />
                                                            ) : (
                                                                <div className="upload-content text-center">
                                                                    <i className="isax isax-image5 text-secondary fs-24" />
                                                                    <p className="fw-medium mb-1">Upload Image</p>
                                                                </div>
                                                            )}
                                                            <input type="file" className="position-absolute opacity-0 w-100 h-100 cursor-pointer" onChange={(e) => handleFileUpload(e, 'image')} accept="image/*" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <div className="input-block">
                                                        <label className="form-label">Video Source</label>
                                                        <div className="d-flex gap-3 mb-3">
                                                            <button className={`btn btn-sm ${courseData.videoType === 'External' ? 'btn-primary' : 'btn-light'}`} onClick={() => setCourseData({ ...courseData, videoType: 'External' })}>YouTube Link</button>
                                                            <button className={`btn btn-sm ${courseData.videoType === 'Local' ? 'btn-primary' : 'btn-light'}`} onClick={() => setCourseData({ ...courseData, videoType: 'Local' })}>Self Hosted</button>
                                                        </div>
                                                        {courseData.videoType === 'External' ? (
                                                            <input type="text" className="form-control" placeholder="YouTube URL" value={courseData.videoUrl} onChange={(e) => setCourseData({ ...courseData, videoUrl: e.target.value })} />
                                                        ) : (
                                                            <div className="input-group">
                                                                <input type="file" className="form-control" onChange={(e) => handleFileUpload(e, 'video')} accept="video/*" />
                                                                {uploading.video && <span className="input-group-text">Uploading...</span>}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-4">
                                                <button className="btn btn-light" onClick={handlePrev}>Prev</button>
                                                <button className="btn btn-primary" onClick={handleNext}>Next</button>
                                            </div>
                                        </fieldset>
                                    )}

                                    {/* Step 3: Curriculum */}
                                    {currentStep === 3 && (
                                        <fieldset className="form-inner wizard-form-card" style={{ display: 'block' }}>
                                            <div className="title border-0 mb-3 p-0"><h5>Curriculum</h5></div>
                                            <div className="row">
                                                <div className="col-md-12 mb-4">
                                                    <div className="d-flex gap-2 p-3 bg-light rounded border">
                                                        <input type="text" className="form-control" placeholder="Chapter Title" value={newChapterTitle} onChange={(e) => setNewChapterTitle(e.target.value)} />
                                                        <button className="btn btn-primary d-flex align-items-center gap-2" onClick={handleAddChapter}><Plus size={16} /> Add</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    {courseData.chapters.map((chapter, index) => (
                                                        <div key={chapter.id} className="border rounded-3 p-3 bg-white mb-3 shadow-sm">
                                                            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                                                                <h6 className="mb-0 fw-bold">{chapter.title}</h6>
                                                                <div className="d-flex gap-2">
                                                                    <button className="btn btn-sm btn-outline-primary" onClick={() => handleAddLesson(chapter.id)}><Plus size={14} /> Lesson</button>
                                                                    <button className="btn btn-sm btn-outline-danger" onClick={() => removeChapter(chapter.id)}><Trash size={14} /></button>
                                                                </div>
                                                            </div>
                                                            <div className="ps-3 border-start border-3 border-light">
                                                                {chapter.lessons.length > 0 ? chapter.lessons.map((lesson: any) => (
                                                                    <div key={lesson.id} className="d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded">
                                                                        <span className="text-sm">{lesson.title}</span>
                                                                        <button className="text-danger btn btn-link p-0" onClick={() => removeLesson(chapter.id, lesson.id)}><Trash size={14} /></button>
                                                                    </div>
                                                                )) : <p className="text-muted text-sm mb-0">No lessons yet.</p>}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-4">
                                                <button className="btn btn-light" onClick={handlePrev}>Prev</button>
                                                <button className="btn btn-primary" onClick={handleNext}>Next</button>
                                            </div>
                                        </fieldset>
                                    )}

                                    {/* Step 4: Additional Info */}
                                    {currentStep === 4 && (
                                        <fieldset className="form-inner wizard-form-card" style={{ display: 'block' }}>
                                            <div className="title border-0 mb-3 p-0"><h5>Additional Information</h5></div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="bg-light border p-4 rounded-3 h-100">
                                                        <h6 className="mb-3">What will students learn?</h6>
                                                        {courseData.learningItems.map((item, idx) => (
                                                            <div key={idx} className="d-flex gap-2 mb-2">
                                                                <input type="text" className="form-control" value={item} onChange={(e) => updateItem('learningItems', idx, e.target.value)} />
                                                                <button className="btn btn-light text-danger" onClick={() => removeItem('learningItems', idx)}><Trash size={16} /></button>
                                                            </div>
                                                        ))}
                                                        <button className="btn btn-link p-0 mt-2 text-decoration-none" onClick={() => addItem('learningItems')}><Plus size={16} className="me-1" /> Add New Item</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="bg-light border p-4 rounded-3 h-100">
                                                        <h6 className="mb-3">Requirements</h6>
                                                        {courseData.requirements.map((item, idx) => (
                                                            <div key={idx} className="d-flex gap-2 mb-2">
                                                                <input type="text" className="form-control" value={item} onChange={(e) => updateItem('requirements', idx, e.target.value)} />
                                                                <button className="btn btn-light text-danger" onClick={() => removeItem('requirements', idx)}><Trash size={16} /></button>
                                                            </div>
                                                        ))}
                                                        <button className="btn btn-link p-0 mt-2 text-decoration-none" onClick={() => addItem('requirements')}><Plus size={16} className="me-1" /> Add New Item</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="bg-light border p-3 rounded">
                                                        <h6>Frequently Asked Questions</h6>
                                                        {courseData.faq.map((f, idx) => (
                                                            <div key={idx} className="border p-3 rounded mb-2 bg-white">
                                                                <input type="text" className="form-control mb-2" placeholder="Question" value={f.question} onChange={(e) => {
                                                                    const newFaq = [...courseData.faq];
                                                                    newFaq[idx].question = e.target.value;
                                                                    setCourseData({ ...courseData, faq: newFaq });
                                                                }} />
                                                                <textarea className="form-control mb-2" placeholder="Answer" rows={2} value={f.answer} onChange={(e) => {
                                                                    const newFaq = [...courseData.faq];
                                                                    newFaq[idx].answer = e.target.value;
                                                                    setCourseData({ ...courseData, faq: newFaq });
                                                                }} />
                                                                <button className="btn btn-sm btn-outline-danger" onClick={() => setCourseData({ ...courseData, faq: courseData.faq.filter((_, i) => i !== idx) })}>Remove FAQ</button>
                                                            </div>
                                                        ))}
                                                        <button className="btn btn-primary btn-sm mt-2" onClick={() => setCourseData({ ...courseData, faq: [...courseData.faq, { question: "", answer: "" }] })}>+ Add FAQ</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-4">
                                                <button className="btn btn-light" onClick={handlePrev}>Prev</button>
                                                <button className="btn btn-primary" onClick={handleNext}>Next</button>
                                            </div>
                                        </fieldset>
                                    )}

                                    {/* Step 5: Pricing */}
                                    {currentStep === 5 && (
                                        <fieldset className="form-inner wizard-form-card" style={{ display: 'block' }}>
                                            <div className="title border-0 mb-3 p-0"><h5>Pricing</h5></div>
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <div className="bg-light p-5 rounded border">
                                                        <div className="form-check form-switch d-inline-block mb-4">
                                                            <input className="form-check-input" type="checkbox" id="freeCheck" checked={courseData.isFree} onChange={(e) => setCourseData({ ...courseData, isFree: e.target.checked })} />
                                                            <label className="form-check-label fw-bold" htmlFor="freeCheck">This is a free course</label>
                                                        </div>
                                                        {!courseData.isFree && (
                                                            <div className="input-block mx-auto" style={{ maxWidth: '300px' }}>
                                                                <label className="form-label">Price (USD)</label>
                                                                <input type="number" className="form-control text-center fs-4" value={courseData.price} onChange={(e) => setCourseData({ ...courseData, price: e.target.value })} />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mt-4">
                                                <button className="btn btn-light" onClick={handlePrev}>Prev</button>
                                                <button className="btn btn-primary" onClick={handleSubmit}>{loading ? "Creating..." : "Submit"}</button>
                                            </div>
                                        </fieldset>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Category Modal */}
                <div className="modal fade" id="add-category-modal" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5>Add New Category</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control" placeholder="Category Name" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={handleAddCategory} data-bs-dismiss="modal">Add Category</button>
                            </div>
                        </div>
                    </div>
                </div>

                <VideoModal show={showVideoModal} handleClose={() => setShowVideoModal(false)} videoUrl={courseData.videoUrl} />
            </div>
        </>
    );
}

export default AdminAddCourseComponent;
