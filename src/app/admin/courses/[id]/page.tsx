"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import api from "@/lib/api";
import Link from "next/link";
import CustomSelect from '@/core/common/commonSelect';
import { CourseLevel, Language } from '@/core/common/selectOption/json/selectOption';
import DefaultEditor from "react-simple-wysiwyg";

const AdminCourseEditPage = () => {
    const params = useParams();
    const router = useRouter();
    const courseId = params.id as string;

    const [course, setCourse] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState("Basic Info");
    const [categories, setCategories] = useState<any[]>([]);
    const [newCategoryName, setNewCategoryName] = useState("");

    // Form States
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "0",
        imageUrl: "",
        categoryId: "",
        level: "Beginner",
        language: "English",
        requirements: [] as string[],
        faq: [] as any[],
        isPublished: false
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [courseRes, catRes] = await Promise.all([
                    api.get(`/courses/${courseId}`),
                    api.get('/courses/meta/categories')
                ]);

                const c = courseRes.data;
                setCourse(c);
                setFormData({
                    title: c.title,
                    description: c.description || "",
                    price: c.price?.toString() || "0",
                    imageUrl: c.imageUrl || "",
                    categoryId: c.categoryId || "",
                    level: c.level || "Beginner",
                    language: c.language || "English",
                    requirements: Array.isArray(c.requirements) ? c.requirements : [],
                    faq: Array.isArray(c.faq) ? c.faq : [],
                    isPublished: c.isPublished
                });
                setCategories(catRes.data.map((cat: any) => ({ label: cat.name, value: cat.id })));
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setLoading(false);
            }
        };
        if (courseId) fetchData();
    }, [courseId]);

    const handleSave = async () => {
        setSaving(true);
        try {
            await api.patch(`/courses/${courseId}`, {
                ...formData,
                price: parseFloat(formData.price)
            });
            alert("Course updated successfully!");
        } catch (error) {
            console.error("Save failed", error);
            alert("Failed to save changes.");
        } finally {
            setSaving(false);
        }
    };

    const handleAddCategory = async () => {
        if (!newCategoryName) return;
        try {
            const { data } = await api.post('/courses/meta/categories', { name: newCategoryName });
            setCategories([...categories, { label: data.name, value: data.id }]);
            setFormData({ ...formData, categoryId: data.id });
            setNewCategoryName("");
        } catch (error) {
            console.error("Failed to add category", error);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const fd = new FormData();
        fd.append('file', file);
        try {
            const { data } = await api.post('/upload', fd);
            setFormData({ ...formData, imageUrl: data.url });
        } catch (error) {
            console.error("Upload failed", error);
        }
    };

    if (loading) return <div className="p-10 text-center">Loading Course Details...</div>;
    if (!course) return <div className="p-10 text-center text-danger">Course not found</div>;

    return (
        <>
            <div className="page-title d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                    <Link href="/admin/courses" className="me-3 btn btn-outline-secondary btn-sm">
                        <i className="ti ti-arrow-left" />
                    </Link>
                    <h5 className="fw-bold mb-0">{formData.title || "Edit Course"}</h5>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <span className={`badge ${formData.isPublished ? "bg-success" : "bg-warning"}`}>
                        {formData.isPublished ? "Published" : "Draft"}
                    </span>
                    <button onClick={handleSave} disabled={saving} className="btn btn-primary btn-sm px-4">
                        {saving ? "Saving..." : "Save All Changes"}
                    </button>
                </div>
            </div>

            <div className="card shadow-sm mb-4">
                <div className="card-header bg-white">
                    <ul className="nav nav-tabs card-header-tabs border-0">
                        {["Basic Info", "Advanced", "Curriculum", "FAQ"].map(tab => (
                            <li className="nav-item" key={tab}>
                                <button
                                    className={`nav-link border-0 ${activeTab === tab ? "active fw-bold text-primary" : "text-muted"}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card-body">
                    {activeTab === "Basic Info" && (
                        <div className="row g-4">
                            <div className="col-md-7">
                                <div className="mb-3">
                                    <label className="form-label fw-medium">Course Title</label>
                                    <input type="text" className="form-control" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-medium">Description</label>
                                    <DefaultEditor value={formData.description} onChange={(e: any) => setFormData({ ...formData, description: e.target.value })} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-medium d-flex justify-content-between">
                                            Category <Link href="#" data-bs-toggle="modal" data-bs-target="#add-cat-edit" className="text-primary text-sm">Add New</Link>
                                        </label>
                                        <CustomSelect
                                            options={categories}
                                            defaultValue={categories.find(c => c.value === formData.categoryId)}
                                            onChange={(val: any) => setFormData({ ...formData, categoryId: val.value })}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-medium">Price ($)</label>
                                        <input type="number" className="form-control" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <label className="form-label fw-medium text-center d-block">Thumbnail</label>
                                <div className="border border-2 border-dashed rounded-3 p-4 bg-light text-center position-relative overflow-hidden aspect-video d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                                    {formData.imageUrl ? (
                                        <img src={formData.imageUrl} alt="Thumbnail" className="img-fluid rounded w-100 h-100 object-fit-cover position-absolute" />
                                    ) : (
                                        <div className="text-muted"><i className="ti ti-image fs-1 d-block mb-2" /><span>Upload Image</span></div>
                                    )}
                                    <input type="file" className="position-absolute w-100 h-100 opacity-0 cursor-pointer" onChange={handleFileUpload} accept="image/*" />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "Advanced" && (
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <h6>Requirements</h6>
                                {formData.requirements.map((req, idx) => (
                                    <div key={idx} className="d-flex mb-2">
                                        <input type="text" className="form-control me-2" value={req} onChange={e => {
                                            const newR = [...formData.requirements];
                                            newR[idx] = e.target.value;
                                            setFormData({ ...formData, requirements: newR });
                                        }} />
                                        <button className="btn btn-outline-danger" onClick={() => setFormData({ ...formData, requirements: formData.requirements.filter((_, i) => i !== idx) })}><i className="ti ti-trash" /></button>
                                    </div>
                                ))}
                                <button className="btn btn-link p-0" onClick={() => setFormData({ ...formData, requirements: [...formData.requirements, ""] })}>+ Add Requirement</button>
                            </div>
                            <div className="col-md-6 mb-4">
                                <h6>Settings</h6>
                                <div className="form-check form-switch mb-3">
                                    <input className="form-check-input" type="checkbox" checked={formData.isPublished} onChange={e => setFormData({ ...formData, isPublished: e.target.checked })} />
                                    <label className="form-check-label">Published</label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Language</label>
                                    <CustomSelect options={Language} defaultValue={Language.find(l => l.label === formData.language)} onChange={(val: any) => setFormData({ ...formData, language: val.label })} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Level</label>
                                    <CustomSelect options={CourseLevel} defaultValue={CourseLevel.find(l => l.label === formData.level)} onChange={(val: any) => setFormData({ ...formData, level: val.label })} />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "Curriculum" && (
                        <div className="text-center py-5">
                            <i className="ti ti-folders fs-1 text-muted mb-3" />
                            <h5>Chapters & Lessons</h5>
                            <p className="text-muted">Curriculum management is available in the instructor section. Admin curriculum tools coming soon.</p>
                            <Link href={`/instructor/courses/${courseId}`} className="btn btn-outline-primary btn-sm">Open in Instructor View</Link>
                        </div>
                    )}

                    {activeTab === "FAQ" && (
                        <div>
                            {formData.faq.map((f, idx) => (
                                <div key={idx} className="border p-3 rounded mb-3 bg-light">
                                    <input type="text" className="form-control mb-2" placeholder="Question" value={f.question} onChange={e => {
                                        const newF = [...formData.faq];
                                        newF[idx].question = e.target.value;
                                        setFormData({ ...formData, faq: newF });
                                    }} />
                                    <textarea className="form-control mb-2" placeholder="Answer" value={f.answer} onChange={e => {
                                        const newF = [...formData.faq];
                                        newF[idx].answer = e.target.value;
                                        setFormData({ ...formData, faq: newF });
                                    }} />
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => setFormData({ ...formData, faq: formData.faq.filter((_, i) => i !== idx) })}>Remove FAQ</button>
                                </div>
                            ))}
                            <button className="btn btn-primary btn-sm" onClick={() => setFormData({ ...formData, faq: [...formData.faq, { question: "", answer: "" }] })}>+ Add FAQ</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Add Category Modal */}
            <div className="modal fade" id="add-cat-edit">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header"><h5>Add New Category</h5><button type="button" className="btn-close" data-bs-dismiss="modal"></button></div>
                        <div className="modal-body">
                            <input type="text" className="form-control" placeholder="Category Name" value={newCategoryName} onChange={e => setNewCategoryName(e.target.value)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={handleAddCategory} data-bs-dismiss="modal">Add Category</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminCourseEditPage;
