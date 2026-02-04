"use client";

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import Link from 'next/link';
import Table from "@/core/common/dataTable/index";
import ImageWithBasePath from '@/core/common/imageWithBasePath';

export default function AdminCoursesPage() {
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            setLoading(true);
            const res = await api.get('/courses');
            setCourses(res.data);
        } catch (error) {
            console.error('Failed to fetch courses', error);
        } finally {
            setLoading(false);
        }
    };

    const columns = [
        {
            title: "Course Name",
            dataIndex: "title",
            render: (text: string, record: any) => (
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-lg me-2 flex-shrink-0 bg-gray-100 rounded">
                        {record.imageUrl ? (
                            <img src={record.imageUrl} alt={text} className="img-fluid rounded object-fit-cover" />
                        ) : (
                            <div className="w-100 h-100 d-flex align-items-center justify-content-center text-primary fw-bold">
                                {text[0]}
                            </div>
                        )}
                    </div>
                    <div>
                        <h6 className="fw-medium mb-1">
                            <Link href={`/admin/courses/${record.id}`}>{text}</Link>
                        </h6>
                        <div className="d-flex align-items-center fs-12 text-muted">
                            <span className="me-2 pe-2 border-end">
                                <i className="isax isax-video-circle me-1" />
                                {record.chapters?.length || 0} Chapters
                            </span>
                            <span>
                                <i className="isax isax-clock me-1" />
                                {record.duration || '00:00:00'}
                            </span>
                        </div>
                    </div>
                </div>
            ),
            sorter: (a: any, b: any) => a.title.localeCompare(b.title),
        },
        {
            title: "Price",
            dataIndex: "price",
            render: (price: number) => price ? `$${price}` : 'Free',
            sorter: (a: any, b: any) => (a.price || 0) - (b.price || 0),
        },
        {
            title: "Status",
            dataIndex: "isPublished",
            render: (isPublished: boolean) => (
                <span className={`badge badge-sm ${isPublished ? 'bg-success' : 'bg-info'} d-inline-flex align-items-center`}>
                    <i className="fa-solid fa-circle fs-5 me-1" />
                    {isPublished ? 'Published' : 'Draft'}
                </span>
            ),
            sorter: (a: any, b: any) => (a.isPublished === b.isPublished ? 0 : a.isPublished ? 1 : -1),
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            render: (date: string) => new Date(date).toLocaleDateString(),
            sorter: (a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        },
        {
            title: "Action",
            dataIndex: "id",
            render: (id: string) => (
                <div className="d-flex align-items-center">
                    <Link href={`/admin/courses/${id}`} className="d-inline-flex fs-14 me-1 action-icon">
                        <i className="isax isax-edit-2" />
                    </Link>
                    <button className="d-inline-flex fs-14 action-icon border-0 bg-transparent text-danger">
                        <i className="isax isax-trash" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="page-title d-flex align-items-center justify-content-between mb-4">
                <h5 className="fw-bold mb-0">Management Courses</h5>
                <Link href="/admin/courses/new" className="btn btn-primary">
                    <i className="ti ti-plus me-2"></i>Create New Course
                </Link>
            </div>

            <div className="card">
                <div className="card-body p-0">
                    <Table
                        dataSource={courses}
                        columns={columns}
                        Search={true}
                    />
                </div>
            </div>
        </>
    );
}
