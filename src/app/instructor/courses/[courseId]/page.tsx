"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import api from "@/lib/api";
import Link from "next/link";
import { Upload, Plus, Trash, Video, Image as ImageIcon, Settings, ListChecks, HelpCircle, Layers } from "lucide-react";

// Simple Tab Component
const Tabs = ({ active, setActive, tabs }: any) => {
    return (
        <div className="flex border-b mb-6 overflow-x-auto">
            {tabs.map((tab: any) => (
                <button
                    key={tab.id}
                    className={`px-6 py-3 font-semibold text-sm whitespace-nowrap focus:outline-none flex items-center gap-2 transition-all ${active === tab.id
                        ? "border-b-2 border-indigo-600 text-indigo-600 bg-indigo-50/30"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                        }`}
                    onClick={() => setActive(tab.id)}
                >
                    {tab.icon}
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

const CourseEditPage = () => {
    const params = useParams();
    const router = useRouter();
    const courseId = params.courseId as string;

    const [course, setCourse] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState("basic");

    // Form States
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [language, setLanguage] = useState("English");
    const [requirements, setRequirements] = useState<string[]>([]);
    const [faq, setFaq] = useState<{ q: string; a: string }[]>([]);

    // Meta States
    const [categories, setCategories] = useState<any[]>([]);
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");

    // Curriculum States
    const [chapters, setChapters] = useState<any[]>([]);
    const [newChapterTitle, setNewChapterTitle] = useState("");

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [courseRes, catRes] = await Promise.all([
                    api.get(`/courses/${courseId}`),
                    api.get("/courses/meta/categories")
                ]);

                const data = courseRes.data;
                setCourse(data);
                setTitle(data.title || "");
                setDescription(data.description || "");
                setPrice(data.price?.toString() || "");
                setImageUrl(data.imageUrl || "");
                setCategoryId(data.categoryId || "");
                setLanguage(data.language || "English");
                setRequirements(data.requirements || []);
                setFaq(data.faq || []);
                setChapters(data.chapters || []);

                setCategories(catRes.data || []);
            } catch (error) {
                console.error("Failed to fetch initial data", error);
            } finally {
                setLoading(false);
            }
        };
        if (courseId) fetchInitialData();
    }, [courseId]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const formData = new FormData();
            formData.append("file", e.target.files[0]);
            try {
                const { data } = await api.post("/upload", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                setImageUrl(data.url);
                await api.patch(`/courses/${courseId}`, { imageUrl: data.url });
            } catch (error) {
                alert("Upload failed");
            }
        }
    };

    const handleSaveBasic = async () => {
        setSaving(true);
        try {
            await api.patch(`/courses/${courseId}`, {
                title,
                description,
                price: price ? parseFloat(price) : null,
                imageUrl,
                categoryId: categoryId || null,
                language,
                requirements,
                faq
            });
            alert("Course updated successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to save. Check console.");
        } finally {
            setSaving(false);
        }
    };

    const handleAddCategory = async () => {
        if (!newCategoryName) return;
        try {
            const { data } = await api.post("/courses/meta/categories", { name: newCategoryName });
            setCategories([...categories, data]);
            setCategoryId(data.id);
            setNewCategoryName("");
            setShowAddCategory(false);
        } catch (error) {
            alert("Failed to add category");
        }
    };

    const handleAddChapter = async () => {
        if (!newChapterTitle) return;
        try {
            const { data } = await api.post(`/courses/${courseId}/chapters`, { title: newChapterTitle });
            setChapters([...chapters, { ...data, lessons: [] }]);
            setNewChapterTitle("");
        } catch (error) {
            alert("Failed to add chapter");
        }
    };

    const handleAddLesson = async (chapterId: string) => {
        const lessonTitle = prompt("Enter lesson title:");
        if (!lessonTitle) return;
        try {
            const { data } = await api.post(`/courses/chapters/${chapterId}/lessons`, { title: lessonTitle });
            setChapters(chapters.map(ch => ch.id === chapterId ? { ...ch, lessons: [...(ch.lessons || []), data] } : ch));
        } catch (error) {
            alert("Failed to add lesson");
        }
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                <p className="text-gray-500 font-medium">Loading Course Data...</p>
            </div>
        </div>
    );

    if (!course) return <div className="p-8 text-center text-red-500">Course not found</div>;

    const tabs = [
        { id: 'basic', label: 'Basic Info', icon: <ImageIcon size={18} /> },
        { id: 'details', label: 'Course Details', icon: <ListChecks size={18} /> },
        { id: 'curriculum', label: 'Curriculum', icon: <Layers size={18} /> },
        { id: 'faq', label: 'FAQ', icon: <HelpCircle size={18} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
    ];

    return (
        <div className="container mx-auto p-4 md:p-8 max-w-7xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="space-y-1">
                    <Link href="/instructor/instructor-course" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors">
                        &larr; Back to My Courses
                    </Link>
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{title || "Untitled Course"}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${course.isPublished ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}>
                        {course.isPublished ? "Published" : "Draft Mode"}
                    </span>
                    <button
                        onClick={handleSaveBasic}
                        disabled={saving}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 transition-all active:scale-95 disabled:opacity-50"
                    >
                        {saving ? "Saving..." : "Save Progress"}
                    </button>
                </div>
            </div>

            {/* Navigation Tabs */}
            <Tabs tabs={tabs} active={activeTab} setActive={setActiveTab} />

            {/* Content Area */}
            <div className="mt-8">
                {activeTab === "basic" && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 space-y-8">
                            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                                <h3 className="text-xl font-bold text-gray-800 pb-2 border-b">Core Information</h3>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Course Title</label>
                                    <input
                                        type="text"
                                        className="w-full border-2 border-gray-100 rounded-2xl p-4 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-300"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Enter a catchy title for your course"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                    <textarea
                                        className="w-full border-2 border-gray-100 rounded-2xl p-4 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-300 min-h-[200px]"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="What will students learn?"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Price (USD)</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                                            <input
                                                type="number"
                                                className="w-full border-2 border-gray-100 rounded-2xl p-4 pl-8 focus:border-indigo-500 outline-none transition-all"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Primary Language</label>
                                        <select
                                            className="w-full border-2 border-gray-100 rounded-2xl p-4 focus:border-indigo-500 outline-none transition-all bg-white"
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
                                        >
                                            <option value="English">English</option>
                                            <option value="Nepali">Nepali</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="French">French</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Course Category</label>
                                    <div className="flex gap-3">
                                        <select
                                            className="flex-1 border-2 border-gray-100 rounded-2xl p-4 focus:border-indigo-500 outline-none transition-all bg-white"
                                            value={categoryId}
                                            onChange={(e) => setCategoryId(e.target.value)}
                                        >
                                            <option value="">-- Choose Category --</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </select>
                                        <button
                                            onClick={() => setShowAddCategory(!showAddCategory)}
                                            className={`p-4 border-2 rounded-2xl transition-all ${showAddCategory ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-indigo-200'}`}
                                            title="Add New Category"
                                        >
                                            <Plus size={24} />
                                        </button>
                                    </div>
                                    {showAddCategory && (
                                        <div className="mt-4 p-6 bg-indigo-50 rounded-2xl border-2 border-indigo-100 flex gap-3 animate-in fade-in zoom-in-95">
                                            <input
                                                type="text"
                                                className="flex-1 border-2 border-white rounded-xl p-3 shadow-sm outline-none focus:border-indigo-300"
                                                placeholder="New category name..."
                                                value={newCategoryName}
                                                onChange={(e) => setNewCategoryName(e.target.value)}
                                            />
                                            <button
                                                onClick={handleAddCategory}
                                                className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold shadow-md hover:bg-indigo-700"
                                            >
                                                Create
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </section>
                        </div>
                        <div className="space-y-8">
                            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b">Thumbnail</h3>
                                <div className="relative group aspect-video rounded-2xl border-4 border-dashed border-gray-100 bg-gray-50 overflow-hidden hover:border-indigo-200 transition-all flex flex-col items-center justify-center text-center p-4">
                                    {imageUrl ? (
                                        <>
                                            <img src={imageUrl} alt="Course Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <Upload className="text-white w-10 h-10" />
                                            </div>
                                        </>
                                    ) : (
                                        <div className="space-y-3">
                                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto">
                                                <ImageIcon className="text-indigo-400" size={30} />
                                            </div>
                                            <p className="text-sm font-bold text-gray-500">Click to upload media</p>
                                            <p className="text-xs text-gray-400">Higher resolution images look better on the storefront.</p>
                                        </div>
                                    )}
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageUpload} accept="image/*" />
                                </div>
                                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                                    <ul className="text-[11px] text-gray-500 space-y-1 font-medium italic">
                                        <li>• Aspect Ratio: 16:9 recommended</li>
                                        <li>• Format: PNG, JPG, or WEBP</li>
                                        <li>• Size: Maximum 5MB</li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                )}

                {activeTab === "details" && (
                    <div className="max-w-4xl space-y-10">
                        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-8 pb-2 border-b">
                                <h3 className="text-xl font-bold text-gray-800">Requirements</h3>
                                <button
                                    onClick={() => setRequirements([...requirements, ""])}
                                    className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-indigo-100 transition-colors"
                                >
                                    <Plus size={18} /> Add New Row
                                </button>
                            </div>
                            <div className="space-y-4">
                                {requirements.map((req, idx) => (
                                    <div key={idx} className="flex gap-3 group animate-in slide-in-from-left-2 duration-300">
                                        <div className="flex-1 relative">
                                            <CheckCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-200" size={18} />
                                            <input
                                                className="w-full border-2 border-gray-50 bg-gray-50/30 rounded-2xl p-4 pl-12 focus:border-indigo-300 outline-none transition-all placeholder:text-gray-300"
                                                value={req}
                                                placeholder="e.g. Basic understanding of HTML/CSS"
                                                onChange={(e) => {
                                                    const newReqs = [...requirements];
                                                    newReqs[idx] = e.target.value;
                                                    setRequirements(newReqs);
                                                }}
                                            />
                                        </div>
                                        <button
                                            onClick={() => setRequirements(requirements.filter((_, i) => i !== idx))}
                                            className="text-gray-300 hover:text-red-500 p-2 transition-colors"
                                        >
                                            <Trash size={20} />
                                        </button>
                                    </div>
                                ))}
                                {requirements.length === 0 && (
                                    <div className="py-12 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100">
                                        <p className="text-gray-400 font-medium">No requirements listed yet.</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === "faq" && (
                    <div className="max-w-4xl space-y-10">
                        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-8 pb-2 border-b">
                                <h3 className="text-xl font-bold text-gray-800">Frequently Asked Questions</h3>
                                <button
                                    onClick={() => setFaq([...faq, { q: "", a: "" }])}
                                    className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-indigo-100 transition-colors"
                                >
                                    <Plus size={18} /> Add New FAQ
                                </button>
                            </div>
                            <div className="space-y-6">
                                {faq.map((item, idx) => (
                                    <div key={idx} className="p-6 border-2 border-gray-50 bg-gray-50/20 rounded-3xl group relative animate-in zoom-in-95 duration-300">
                                        <button
                                            onClick={() => setFaq(faq.filter((_, i) => i !== idx))}
                                            className="absolute top-4 right-4 text-gray-300 hover:text-red-500 p-1 transition-colors"
                                        >
                                            <Trash size={18} />
                                        </button>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-black text-xs">Q</span>
                                                <input
                                                    className="flex-1 bg-transparent font-bold border-none outline-none placeholder:text-gray-300"
                                                    placeholder="What is the question students often ask?"
                                                    value={item.q}
                                                    onChange={(e) => {
                                                        const newFaq = [...faq];
                                                        newFaq[idx].q = e.target.value;
                                                        setFaq(newFaq);
                                                    }}
                                                />
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-black text-xs shrink-0 mt-1">A</span>
                                                <textarea
                                                    className="flex-1 bg-transparent border-none outline-none text-gray-600 placeholder:text-gray-300 text-sm leading-relaxed"
                                                    rows={3}
                                                    placeholder="Provide a clear and concise answer..."
                                                    value={item.a}
                                                    onChange={(e) => {
                                                        const newFaq = [...faq];
                                                        newFaq[idx].a = e.target.value;
                                                        setFaq(newFaq);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {faq.length === 0 && (
                                    <div className="py-12 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100">
                                        <HelpCircle className="mx-auto text-gray-200 mb-2" size={40} />
                                        <p className="text-gray-400 font-medium">Add some FAQs to build trust with your students.</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === "curriculum" && (
                    <div className="max-w-5xl space-y-8">
                        <div className="flex flex-col md:flex-row gap-4 p-8 bg-indigo-900 rounded-3xl shadow-xl shadow-indigo-100">
                            <div className="flex-1 relative">
                                <Layers className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" size={20} />
                                <input
                                    type="text"
                                    className="w-full bg-white/10 border-2 border-white/20 rounded-2xl p-4 pl-12 text-white placeholder:text-indigo-300 focus:border-white/40 outline-none transition-all shadow-inner"
                                    placeholder="Chapter Name (e.g. Phase 1: Foundations)"
                                    value={newChapterTitle}
                                    onChange={(e) => setNewChapterTitle(e.target.value)}
                                />
                            </div>
                            <button
                                onClick={handleAddChapter}
                                className="bg-white text-indigo-900 px-8 py-4 rounded-2xl font-black shadow-lg hover:bg-gray-50 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                <Plus size={20} strokeWidth={3} /> CREATE CHAPTER
                            </button>
                        </div>

                        <div className="space-y-10">
                            {chapters.map((chapter, cIdx) => (
                                <div key={chapter.id} className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${cIdx * 100}ms` }}>
                                    <div className="absolute -left-3 top-0 bottom-0 w-1.5 bg-indigo-600 rounded-full opacity-50"></div>
                                    <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden">
                                        <div className="bg-gray-50/80 p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                            <div className="space-y-1">
                                                <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-600 px-3 py-1 bg-white rounded-full border shadow-sm">
                                                    Chapter {cIdx + 1}
                                                </div>
                                                <h3 className="text-xl font-extrabold text-gray-900">{chapter.title}</h3>
                                            </div>
                                            <div className="flex items-center gap-2 w-full md:w-auto">
                                                <button
                                                    onClick={() => handleAddLesson(chapter.id)}
                                                    className="flex-1 md:flex-none text-sm bg-white border-2 border-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                                                >
                                                    <Plus size={16} /> ADD LESSON
                                                </button>
                                                <button className="p-2.5 text-gray-300 hover:text-red-500 transition-colors">
                                                    <Trash size={20} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-6 space-y-3">
                                            {chapter.lessons?.map((lesson: any, lIdx: number) => (
                                                <div key={lesson.id} className="group/lesson flex items-center justify-between p-4 rounded-2xl border-2 border-gray-50 hover:border-indigo-100 hover:bg-indigo-50/10 transition-all bg-white">
                                                    <div className="flex items-center gap-5">
                                                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover/lesson:bg-indigo-100 group-hover/lesson:text-indigo-600 transition-all shadow-inner">
                                                            <Video size={20} />
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-[10px] font-bold text-gray-400">LES {lIdx + 1}</span>
                                                                <p className="font-bold text-gray-800">{lesson.title}</p>
                                                            </div>
                                                            <div className="flex items-center gap-3 mt-1">
                                                                <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-black uppercase tracking-tighter">Draft</span>
                                                                <span className="text-[10px] text-gray-400 font-bold">• VIDEO NOT LINKED</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 opacity-0 group-hover/lesson:opacity-100 transition-all">
                                                        <button
                                                            onClick={() => router.push(`/instructor/courses/${courseId}/lessons/${lesson.id}`)}
                                                            className="text-sm text-indigo-600 font-black px-4 py-2 bg-white rounded-lg border shadow-sm hover:shadow-md active:scale-95 transition-all"
                                                        >
                                                            CONFIGURE
                                                        </button>
                                                        <button className="text-gray-300 hover:text-red-500 p-2">
                                                            <Trash size={18} />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                            {(!chapter.lessons || chapter.lessons.length === 0) && (
                                                <div className="py-10 text-center border-2 border-dashed border-gray-50 rounded-2xl flex flex-col items-center">
                                                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                                                        <Video size={20} className="text-gray-200" />
                                                    </div>
                                                    <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">Empty Chapter</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "settings" && (
                    <div className="max-w-4xl space-y-8">
                        <section className="bg-white p-8 rounded-3xl border border-gray-100 space-y-10">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-indigo-50 rounded-[2rem] border-2 border-indigo-100 gap-6">
                                <div>
                                    <h4 className="text-xl font-black text-indigo-900 mb-1">Visibility Status</h4>
                                    <p className="text-sm font-medium text-indigo-700 opacity-70">
                                        Your course is currently {course.isPublished ? "visible to the public marketplace" : "a private draft only you can see"}.
                                    </p>
                                </div>
                                <button
                                    onClick={async () => {
                                        await api.patch(`/courses/${courseId}`, { isPublished: !course.isPublished });
                                        setCourse({ ...course, isPublished: !course.isPublished });
                                    }}
                                    className={`w-full md:w-auto px-10 py-4 rounded-2xl font-black shadow-xl transition-all active:scale-95 ${course.isPublished ? 'bg-white text-indigo-900 border-2 border-indigo-200 hover:bg-indigo-100' : 'bg-green-600 text-white hover:bg-green-700 shadow-green-100'}`}
                                >
                                    {course.isPublished ? "HIDE COURSE" : "PUBLISH NOW"}
                                </button>
                            </div>

                            <div className="p-8 border-2 border-red-50 bg-red-50/30 rounded-[2rem]">
                                <h4 className="text-xl font-black text-red-900 mb-2">Danger Zone</h4>
                                <p className="text-sm font-medium text-red-600 opacity-70 mb-6">
                                    Deleting this course is permanent. All related chapters, lessons, and student progress will be destroyed. This action cannot be undone.
                                </p>
                                <button
                                    onClick={async () => {
                                        if (confirm("CRITICAL WARNING: Are you sure you want to PERMANENTLY DELETE this course?")) {
                                            await api.delete(`/courses/${courseId}`);
                                            router.push("/instructor/instructor-course");
                                        }
                                    }}
                                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-red-100 transition-all active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <Trash size={20} /> DELETE COURSE PERMANENTLY
                                </button>
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseEditPage;
