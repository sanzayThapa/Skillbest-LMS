"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import Link from "next/link";

const CreateCoursePage = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await api.post("/courses", { title });
            router.push(`/instructor/courses/${data.id}`);
        } catch (error) {
            console.error("Failed to create course", error);
            alert("Failed to create course. Check console for details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-2xl">
            <h1 className="text-2xl font-bold mb-6">Name your course</h1>
            <p className="text-gray-600 mb-8">
                What would you like to name your course? Don't worry, you can change this later.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course Title
                    </label>
                    <input
                        type="text"
                        className="w-full p-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g. Advanced Web Development"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={loading}
                        required
                    />
                </div>

                <div className="flex items-center gap-x-2">
                    <Link href="/instructor/instructor-dashboard" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={!title || loading}
                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
                    >
                        {loading ? "Creating..." : "Continue"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateCoursePage;
