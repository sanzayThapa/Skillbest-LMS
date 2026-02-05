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

const AdminAddCourseComponent = () => {
    const route = all_routes;
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<any[]>([]);
    const [newCategoryName, setNewCategoryName] = useState("");

    // Form State
    const [courseData, setCourseData] = useState({
        title: "",
        categoryId: "",
        level: "Beginner",
        language: "English",
        maxStudents: "100",
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
        isFree: true,
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

    const updateList = (field: 'learningItems' | 'requirements', index: number, value: string) => {
        const newList = [...courseData[field]];
        newList[index] = value;
        setCourseData({ ...courseData, [field]: newList });
    };

    const addListItem = (field: 'learningItems' | 'requirements') => {
        setCourseData({ ...courseData, [field]: [...courseData[field], ""] });
    };

    const removeListItem = (field: 'learningItems' | 'requirements', index: number) => {
        setCourseData({ ...courseData, [field]: courseData[field].filter((_, i) => i !== index) });
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const { data } = await api.post('/upload', formData);
            if (type === 'image') setCourseData({ ...courseData, imageUrl: data.url });
            else setCourseData({ ...courseData, videoUrl: data.url });
        } catch (error) {
            console.error("Upload failed", error);
        }
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
                isPublished: true // Admin creates published by default or based on checkbox
            });

            // 3. Chapters & Lessons (Optional if implemented in full)
            // For now, redirect or show success
            document.getElementById('success-trigger')?.click();
        } catch (error) {
            console.error("Failed to submit course", error);
            alert("Submission failed. Check console for details.");
        } finally {
            setLoading(false);
        }
    };

    const [showVideoModal, setShowVideoModal] = useState(false);

    return (
        <>
            <div className="add-course-item">
                <div className="wizard">
                    <ul className="form-wizard-steps" id="progressbar2">
                        {[1, 2, 3, 4, 5].map((step) => (
                            <li key={step} className={currentStep === step ? 'progress-active' : currentStep > step ? 'progress-activated' : ''}>
                                <div className="profile-step">
                                    <span className="dot-active mb-2">
                                        <span className="number">0{step}</span>
                                        <span className="tickmark"><i className="fa-solid fa-check" /></span>
                                    </span>
                                    <div className="step-section">
                                        <p>{["Information", "Media", "Curriculum", "Additional", "Pricing"][step - 1]}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="initialization-form-set">
                    {currentStep === 1 && (
                        <fieldset className="form-inner wizard-form-card" style={{ display: 'block' }}>
                            <div className="title border-0 mb-3 p-0"><h5>Basic Information</h5></div>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Course Title<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label d-flex justify-content-between">
                                        Category <Link href="#" data-bs-toggle="modal" data-bs-target="#add-category-modal" className="text-primary text-sm">Add New</Link>
                                    </label>
                                    <CustomSelect
                                        options={categories}
                                        placeholder="Select Category"
                                        defaultValue={categories.find(c => c.value === courseData.categoryId)}
                                        onChange={(val: any) => setCourseData({ ...courseData, categoryId: val.value })}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Level</label>
                                    <CustomSelect
                                        options={CourseLevel}
                                        defaultValue={CourseLevel.find(l => l.label === courseData.level)}
                                        onChange={(val: any) => setCourseData({ ...courseData, level: val.label })}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Language</label>
                                    <CustomSelect
                                        options={Language}
                                        defaultValue={Language.find(l => l.label === courseData.language)}
                                        onChange={(val: any) => setCourseData({ ...courseData, language: val.label })}
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className="form-label">Description</label>
                                    <DefaultEditor value={courseData.description} onChange={(e: any) => setCourseData({ ...courseData, description: e.target.value })} />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="bg-light border p-3 rounded">
                                        <h6>What will students learn?</h6>
                                        {courseData.learningItems.map((item, idx) => (
                                            <div key={idx} className="d-flex mb-2">
                                                <input type="text" className="form-control me-2" value={item} onChange={(e) => updateList('learningItems', idx, e.target.value)} />
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => removeListItem('learningItems', idx)}><i className="ti ti-trash" /></button>
                                            </div>
                                        ))}
                                        <button className="btn btn-link p-0 text-primary" onClick={() => addListItem('learningItems')}>+ Add Item</button>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="bg-light border p-3 rounded">
                                        <h6>Requirements</h6>
                                        {courseData.requirements.map((item, idx) => (
                                            <div key={idx} className="d-flex mb-2">
                                                <input type="text" className="form-control me-2" value={item} onChange={(e) => updateList('requirements', idx, e.target.value)} />
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => removeListItem('requirements', idx)}><i className="ti ti-trash" /></button>
                                            </div>
                                        ))}
                                        <button className="btn btn-link p-0 text-primary" onClick={() => addListItem('requirements')}>+ Add Item</button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mt-4">
                                <button className="btn btn-primary" onClick={handleNext}>Next <i className="ti ti-arrow-narrow-right" /></button>
                            </div>
                        </fieldset>
                    )}

                    {currentStep === 2 && (
                        <fieldset className="form-inner wizard-form-card" style={{ display: 'block' }}>
                            <div className="title border-0 mb-3 p-0"><h5>Course Media</h5></div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Course Thumbnail</label>
                                    <div className="border p-4 text-center rounded bg-light position-relative">
                                        {courseData.imageUrl ? (
                                            <img src={courseData.imageUrl} className="img-fluid rounded mb-2" style={{ maxHeight: '150px' }} />
                                        ) : (
                                            <i className="ti ti-image fs-1 text-muted" />
                                        )}
                                        <input type="file" className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer" onChange={(e) => handleFileUpload(e, 'image')} />
                                        <p className="mb-0 text-sm">Click to upload thumbnail</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Intro Video</label>
                                    <input type="text" className="form-control mb-2" placeholder="Video URL" value={courseData.videoUrl} onChange={(e) => setCourseData({ ...courseData, videoUrl: e.target.value })} />
                                    <div className="border p-2 rounded bg-light text-center">
                                        <label className="btn btn-outline-secondary btn-sm w-100 mb-0">
                                            Upload Video File
                                            <input type="file" className="d-none" onChange={(e) => handleFileUpload(e, 'video')} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <button className="btn btn-light" onClick={handlePrev}><i className="ti ti-arrow-narrow-left" /> Prev</button>
                                <button className="btn btn-primary" onClick={handleNext}>Next <i className="ti ti-arrow-narrow-right" /></button>
                            </div>
                        </fieldset>
                    )}

                    {currentStep === 3 && (
                        <fieldset className="form-inner wizard-form-card" style={{ display: 'block' }}>
                            <div className="title border-0 mb-3 p-0"><h5>Curriculum (Coming Soon)</h5></div>
                            <p className="text-muted">You can manage full chapters and lessons after creating the course in the edit section.</p>
                            <div className="d-flex justify-content-between mt-4">
                                <button className="btn btn-light" onClick={handlePrev}><i className="ti ti-arrow-narrow-left" /> Prev</button>
                                <button className="btn btn-primary" onClick={handleNext}>Next <i className="ti ti-arrow-narrow-right" /></button>
                            </div>
                        </fieldset>
                    )}

                    {currentStep === 4 && (
                        <fieldset className="form-inner wizard-form-card" style={{ display: 'block' }}>
                            <div className="title border-0 mb-3 p-0"><h5>FAQ & Additional Info</h5></div>
                            <div className="mb-4">
                                <h6>FAQs</h6>
                                {courseData.faq.map((f, idx) => (
                                    <div key={idx} className="border p-3 rounded mb-2 bg-light">
                                        <input type="text" className="form-control mb-2" placeholder="Question" value={f.question} onChange={(e) => {
                                            const newFaq = [...courseData.faq];
                                            newFaq[idx].question = e.target.value;
                                            setCourseData({ ...courseData, faq: newFaq });
                                        }} />
                                        <textarea className="form-control mb-2" placeholder="Answer" value={f.answer} onChange={(e) => {
                                            const newFaq = [...courseData.faq];
                                            newFaq[idx].answer = e.target.value;
                                            setCourseData({ ...courseData, faq: newFaq });
                                        }} />
                                        <button className="btn btn-sm btn-danger" onClick={() => setCourseData({ ...courseData, faq: courseData.faq.filter((_, i) => i !== idx) })}>Remove FAQ</button>
                                    </div>
                                ))}
                                <button className="btn btn-link p-0" onClick={() => setCourseData({ ...courseData, faq: [...courseData.faq, { question: "", answer: "" }] })}>+ Add FAQ</button>
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <button className="btn btn-light" onClick={handlePrev}><i className="ti ti-arrow-narrow-left" /> Prev</button>
                                <button className="btn btn-primary" onClick={handleNext}>Next <i className="ti ti-arrow-narrow-right" /></button>
                            </div>
                        </fieldset>
                    )}

                    {currentStep === 5 && (
                        <fieldset className="form-inner wizard-form-card" style={{ display: 'block' }}>
                            <div className="title border-0 mb-3 p-0"><h5>Pricing</h5></div>
                            <div className="bg-light border p-4 rounded text-center">
                                <div className="form-check form-switch d-inline-block mb-3">
                                    <input className="form-check-input" type="checkbox" checked={courseData.isFree} onChange={(e) => setCourseData({ ...courseData, isFree: e.target.checked })} />
                                    <label className="form-check-label">This is a free course</label>
                                </div>
                                {!courseData.isFree && (
                                    <div className="mt-3" style={{ maxWidth: '200px', margin: '0 auto' }}>
                                        <label className="form-label">Price ($)</label>
                                        <input type="number" className="form-control text-center" value={courseData.price} onChange={(e) => setCourseData({ ...courseData, price: e.target.value })} />
                                    </div>
                                )}
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <button className="btn btn-light" onClick={handlePrev}><i className="ti ti-arrow-narrow-left" /> Prev</button>
                                <button className="btn btn-secondary" onClick={handleSubmit} disabled={loading}>
                                    {loading ? "Submitting..." : "Submit Course"}
                                </button>
                            </div>
                        </fieldset>
                    )}
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

            {/* Success Trigger (Hidden) */}
            <button id="success-trigger" className="d-none" data-bs-toggle="modal" data-bs-target="#success"></button>

            {/* Success Modal */}
            <div className="modal fade modal-default" id="success">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-4 text-center">
                            <div className="text-success h1 mb-2"><i className="ti ti-circle-check-filled" /></div>
                            <h5 className="mb-2">Congratulations!</h5>
                            <p className="mb-3">The course has been successfully created.</p>
                            <Link href="/admin/courses" className="btn btn-secondary" data-bs-dismiss="modal">Back to Courses</Link>
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal show={showVideoModal} handleClose={() => setShowVideoModal(false)} videoUrl={courseData.videoUrl} />
        </>
    );
};

export default AdminAddCourseComponent;
