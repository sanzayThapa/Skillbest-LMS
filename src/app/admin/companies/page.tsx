"use client";

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import Link from 'next/link';
import Table from "@/core/common/dataTable/index";

export default function CompaniesPage() {
    const [companies, setCompanies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchCompanies();
    }, [page]);

    const fetchCompanies = async () => {
        try {
            setLoading(true);
            const res = await api.get(`/companies?page=${page}&limit=50`);
            setCompanies(res.data.companies);
        } catch (error) {
            console.error('Failed to fetch companies', error);
        } finally {
            setLoading(false);
        }
    };

    const columns = [
        {
            title: "Company",
            dataIndex: "name",
            render: (text: string, record: any) => (
                <div className="d-flex align-items-center">
                    <div className="avatar avatar-md me-2 flex-shrink-0 bg-gray-100 rounded">
                        {record.logo ? (
                            <img src={record.logo} alt={text} className="img-fluid rounded" />
                        ) : (
                            <span className="fw-bold text-primary">{text[0]}</span>
                        )}
                    </div>
                    <div>
                        <h6 className="fw-medium mb-0">
                            <Link href={`/admin/companies/${record.id}`}>{text}</Link>
                        </h6>
                        <span className="fs-12 text-muted">{record.slug}</span>
                    </div>
                </div>
            ),
            sorter: (a: any, b: any) => a.name.localeCompare(b.name),
        },
        {
            title: "Industry",
            dataIndex: "industry",
            render: (text: string) => text || 'N/A',
            sorter: (a: any, b: any) => (a.industry || '').localeCompare(b.industry || ''),
        },
        {
            title: "Employees",
            dataIndex: "_count",
            render: (count: any) => count.employees,
            sorter: (a: any, b: any) => a._count.employees - b._count.employees,
        },
        {
            title: "Programs",
            dataIndex: "_count",
            render: (count: any) => count.trainingPrograms,
            sorter: (a: any, b: any) => a._count.trainingPrograms - b._count.trainingPrograms,
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text: string) => (
                <span className={`badge badge-sm ${text === 'ACTIVE' ? 'bg-success' :
                        text === 'PAUSED' ? 'bg-warning' :
                            text === 'TRIAL' ? 'bg-info' : 'bg-gray-500'
                    } d-inline-flex align-items-center`}>
                    <i className="fa-solid fa-circle fs-5 me-1" />
                    {text}
                </span>
            ),
            sorter: (a: any, b: any) => a.status.localeCompare(b.status),
        },
        {
            title: "Action",
            dataIndex: "id",
            render: (id: string) => (
                <div className="d-flex align-items-center">
                    <Link href={`/admin/companies/${id}`} className="d-inline-flex fs-14 me-1 action-icon">
                        <i className="isax isax-eye" />
                    </Link>
                    <Link href={`/admin/companies/${id}/edit`} className="d-inline-flex fs-14 me-1 action-icon">
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
                <h5 className="fw-bold mb-0">Companies Management</h5>
                <Link href="/admin/companies/new" className="btn btn-primary">
                    <i className="ti ti-plus me-2"></i>Add New Company
                </Link>
            </div>

            <div className="card">
                <div className="card-body p-0">
                    <Table
                        dataSource={companies}
                        columns={columns}
                        Search={true}
                    />
                </div>
            </div>
        </>
    );
}
