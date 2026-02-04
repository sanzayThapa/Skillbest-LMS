"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import api from "@/lib/api";
import Link from "next/link";
import ImageWithBasePath from "@/core/common/imageWithBasePath";

const AdminCourseEditPage = () => {
    const params = useParams();
    const router = useRouter();
    const courseId = params.id as string;

    const [course, setCourse] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState("Basic Info");

    // Form States
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    // Curriculum States
    const [chapters, setChapters] = useState<any[]>([]);
    const [newChapterTitle, setNewChapterTitle] = useState("");

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const { data } = await api.get(`/courses/${courseId}`);
                setCourse(data);
                setTitle(data.title);
                setDescription(data.description || "");
                setPrice(data.price || "");
                setImageUrl(data.imageUrl || "");
                setChapters(data.chapters || []);
            } catch (error) {
                console.error("Failed to fetch course", error);
            } finally {
                setLoading(false);
            }
        };
        if (courseId) fetchCourse();
    }, [courseId]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("file", file);

            try {
                const { data } = await api.post("/upload", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                setImageUrl(data.url);
                await api.patch(`/courses/${courseId}`, { imageUrl: data.url });
            } catch (error) {
                console.error("Upload failed", error);
                alert("Image upload failed");
            }
        }
    };

    const handleSaveBasic = async () => {
        setSaving(true);
        try {
            await api.patch(`/courses/${courseId}`, {
                title,
                description,
                price: parseFloat(price) || 0,
                imageUrl
            });
            alert("Saved successfully!");
        } catch (error) {
            console.error("Save failed", error);
            alert("Failed to save");
        } finally {
            setSaving(false);
        }
    };

    const handleAddChapter = async () => {
        if (!newChapterTitle) return;
        try {
            const { data } = await api.post(`/courses/${courseId}/chapters`, {
                title: newChapterTitle
            });
            setChapters([...chapters, data]);
            setNewChapterTitle("");
        } catch (error) {
            console.error("Failed to add chapter", error);
        }
    };

    const togglePublish = async () => {
        try {
            const newStatus = !course.isPublished;
            const { data } = await api.patch(`/courses/${courseId}`, { isPublished: newStatus });
            setCourse(data);
            alert(newStatus ? "Course published!" : "Course unpublished!");
        } catch (error) {
            console.error("Publish toggle failed", error);
        }
    };

    if (loading) return <div className="p-10 text-center">Loading Course Details...</div>;
    if (!course) return <div className="p-10 text-center text-danger">Course not found</div>;

    return (
        <>
            <div className="page-title d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                    <Link href="/admin/courses" className="me-3 btn btn-outline-secondary btn-sm">
                        <i className="isax isax-arrow-left-1" />
                    </Link>
                    <h5 className="fw-bold mb-0">{title || "Edit Course"}</h5>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <span className={`badge ${course.isPublished ? "bg-success" : "bg-warning"} me-2`}>
                        {course.isPublished ? "Published" : "Draft"}
                    </span>
                    <button onClick={togglePublish} className="btn btn-outline-primary btn-sm">
                        {course.isPublished ? "Unpublish" : "Publish"}
                    </button>
                    <button onClick={handleSaveBasic} disabled={saving} className="btn btn-primary btn-sm">
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>

            <div className="card shadow-sm mb-4">
                <div className="card-header bg-white">
                    <ul className="nav nav-tabs card-header-tabs border-0">
                        <li className="nav-item">
                            <button
                                className={`nav-link border-0 ${activeTab === "Basic Info" ? "active fw-bold text-primary" : "text-muted"}`}
                                onClick={() => setActiveTab("Basic Info")}
                            >
                                Basic Info
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link border-0 ${activeTab === "Curriculum" ? "active fw-bold text-primary" : "text-muted"}`}
                                onClick={() => setActiveTab("Curriculum")}
                            >
                                Curriculum
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    {activeTab === "Basic Info" ? (
                        <div className="row g-4">
                            <div className="col-md-7">
                                <div className="form-group mb-3">
                                    <label className="form-label fw-medium">Course Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-medium">Description</label>
                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label fw-medium">Price ($)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <label className="form-label fw-medium">Course Thumbnail</label>
                                <div className="border border-2 border-dashed rounded-3 p-4 bg-light text-center position-relative overflow-hidden aspect-video d-flex align-items-center justify-content-center">
                                    {imageUrl ? (
                                        <img src={imageUrl} alt="Thumbnail" className="img-fluid rounded position-absolute w-100 h-100 object-fit-cover" />
                                    ) : (
                                        <div className="text-muted">
                                            <i className="isax isax-image5 fs-48 d-block mb-2" />
                                            <span>No thumbnail uploaded</span>
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        className="position-absolute w-100 h-100 opacity-0 cursor-pointer"
                                        onChange={handleImageUpload}
                                        accept="image/*"
                                    />
                                </div>
                                <p className="text-secondary sm-text mt-2 text-center">Click or drag image to upload (16:9 recommended)</p>
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-3xl">
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Add a new chapter..."
                                    value={newChapterTitle}
                                    onChange={(e) => setNewChapterTitle(e.target.value)}
                                />
                                <button onClick={handleAddChapter} className="btn btn-primary">
                                    <i className="isax isax-add-circle me-1" /> Add Chapter
                                </button>
                            </div>

                            <div className="chapters-list">
                                {chapters.map((chapter) => (
                                    <div key={chapter.id} className="card border mb-3">
                                        <div className="card-body p-3 d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="bg-light p-2 rounded me-3 text-primary">
                                                    <i className="isax isax-element-35" />
                                                </div>
                                                <div>
                                                    <h6 className="mb-0 fw-bold">{chapter.title}</h6>
                                                    <span className="text-muted sm-text">{chapter.lessons?.length || 0} Lessons</span>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <button className="btn btn-icon btn-sm btn-light">
                                                    <i className="isax isax-edit-2" />
                                                </button>
                                                <button className="btn btn-icon btn-sm btn-light text-danger">
                                                    <i className="isax isax-trash" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {chapters.length === 0 && (
                                    <div className="text-center py-5 bg-light rounded border border-dashed">
                                        <p className="text-muted mb-0 italic">No chapters created yet. Start by adding one above.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminCourseEditPage;
