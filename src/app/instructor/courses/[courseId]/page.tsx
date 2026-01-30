"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import api from "@/lib/api";
import Link from "next/link";
import Image from "next/image";

// Simple Tab Component
const Tabs = ({ active, setActive, tabs }: any) => {
    return (
        <div className="flex border-b mb-6">
            {tabs.map((tab: string) => (
                <button
                    key={tab}
                    className={`px-4 py-2 font-medium text-sm focus:outline-none ${active === tab
                            ? "border-b-2 border-indigo-600 text-indigo-600"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                    onClick={() => setActive(tab)}
                >
                    {tab}
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
    const [activeTab, setActiveTab] = useState("Basic Info");

    // Form States
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
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
                // router.push("/instructor/instructor-dashboard");
            } finally {
                setLoading(false);
            }
        };
        if (courseId) fetchCourse();
    }, [courseId, router]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageFile(file);

            const formData = new FormData();
            formData.append("file", file);

            try {
                const { data } = await api.post("/upload", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                setImageUrl(data.url);
                // Auto-save image url to course
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
                price: parseFloat(price),
                imageUrl // Ensure current image URL is saved
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

    if (loading) return <div>Loading...</div>;
    if (!course) return <div>Course not found</div>;

    return (
        <div className="container mx-auto p-6">
            <div className="flex items-center justify-between mb-6">
                <Link href="/instructor/instructor-dashboard" className="text-sm hover:underline">
                    &larr; Back to Dashboard
                </Link>
                <div className="flex gap-2">
                    {/* Publish/Unpublish buttons could go here */}
                    <button className="bg-gray-100 px-3 py-1 rounded text-sm">
                        {course.isPublished ? "Published" : "Draft"}
                    </button>
                    <button onClick={handleSaveBasic} disabled={saving} className="bg-indigo-600 text-white px-4 py-2 rounded">
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>

            <h1 className="text-2xl font-bold mb-6">{title}</h1>

            <Tabs tabs={["Basic Info", "Curriculum"]} active={activeTab} setActive={setActiveTab} />

            {activeTab === "Basic Info" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Course Title</label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea
                                className="w-full border p-2 rounded"
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Price</label>
                            <input
                                type="number"
                                className="w-full border p-2 rounded"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Course Thumbnail</label>
                        <div className="border-2 border-dashed p-4 rounded-md flex flex-col items-center justify-center bg-gray-50 aspect-video relative overflow-hidden">
                            {imageUrl ? (
                                <img src={imageUrl} alt="Thumbnail" className="object-cover w-full h-full absolute inset-0" />
                            ) : (
                                <div className="text-gray-400">No image</div>
                            )}
                            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageUpload} accept="image/*" />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Click to upload. Aspect ratio 16:9 recommended.</p>
                    </div>
                </div>
            )}

            {activeTab === "Curriculum" && (
                <div className="max-w-3xl">
                    <div className="flex gap-2 mb-4">
                        <input
                            type="text"
                            className="flex-1 border p-2 rounded"
                            placeholder="New Chapter Title..."
                            value={newChapterTitle}
                            onChange={(e) => setNewChapterTitle(e.target.value)}
                        />
                        <button onClick={handleAddChapter} className="bg-indigo-600 text-white px-4 py-2 rounded">Add Chapter</button>
                    </div>

                    <div className="space-y-4">
                        {chapters.map((chapter) => (
                            <div key={chapter.id} className="border p-4 rounded bg-white shadow-sm">
                                <h3 className="font-semibold text-lg">{chapter.title}</h3>
                                {/* Nested Lesson List could go here */}
                                <div className="text-sm text-gray-500 mt-2">
                                    {chapter.lessons?.length || 0} Lessons
                                </div>
                            </div>
                        ))}
                        {chapters.length === 0 && <div className="text-gray-500 italic">No chapters yet.</div>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseEditPage;
