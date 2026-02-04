"use client";

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import Link from 'next/link';
import { FiPlus, FiEdit2, FiTrash2, FiEye, FiSearch } from 'react-icons/fi';

export default function CompaniesPage() {
    const [companies, setCompanies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState<any>(null);

    useEffect(() => {
        fetchCompanies();
    }, [search, statusFilter, page]);

    const fetchCompanies = async () => {
        try {
            setLoading(true);
            const params = new URLSearchParams();
            if (search) params.append('search', search);
            if (statusFilter) params.append('status', statusFilter);
            params.append('page', page.toString());
            params.append('limit', '10');

            const res = await api.get(`/companies?${params.toString()}`);
            setCompanies(res.data.companies);
            setPagination(res.data.pagination);
        } catch (error) {
            console.error('Failed to fetch companies', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this company?')) return;

        try {
            await api.delete(`/companies/${id}`);
            fetchCompanies();
        } catch (error) {
            console.error('Failed to delete company', error);
            alert('Failed to delete company');
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Companies</h1>
                    <p className="text-gray-600 mt-1">Manage all client companies</p>
                </div>
                <Link
                    href="/admin/companies/new"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <FiPlus className="mr-2" />
                    Add Company
                </Link>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search companies..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => {
                            setStatusFilter(e.target.value);
                            setPage(1);
                        }}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="">All Statuses</option>
                        <option value="ACTIVE">Active</option>
                        <option value="PAUSED">Paused</option>
                        <option value="INACTIVE">Inactive</option>
                        <option value="TRIAL">Trial</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center">Loading...</div>
                ) : companies.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">No companies found</div>
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Company
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Industry
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Employees
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Programs
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {companies.map((company) => (
                                        <tr key={company.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    {company.logo && (
                                                        <img
                                                            src={company.logo}
                                                            alt={company.name}
                                                            className="w-10 h-10 rounded-full mr-3"
                                                        />
                                                    )}
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {company.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            {company.slug}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {company.industry || 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {company._count.employees}
                                                {company.employeeLimit && ` / ${company.employeeLimit}`}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {company._count.trainingPrograms}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${company.status === 'ACTIVE'
                                                        ? 'bg-green-100 text-green-800'
                                                        : company.status === 'PAUSED'
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : company.status === 'TRIAL'
                                                                ? 'bg-blue-100 text-blue-800'
                                                                : 'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {company.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex items-center justify-end space-x-2">
                                                    <Link
                                                        href={`/admin/companies/${company.id}`}
                                                        className="text-blue-600 hover:text-blue-900"
                                                    >
                                                        <FiEye size={18} />
                                                    </Link>
                                                    <Link
                                                        href={`/admin/companies/${company.id}/edit`}
                                                        className="text-indigo-600 hover:text-indigo-900"
                                                    >
                                                        <FiEdit2 size={18} />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(company.id)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        <FiTrash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {pagination && pagination.totalPages > 1 && (
                            <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                                <div className="text-sm text-gray-700">
                                    Showing <span className="font-medium">{(page - 1) * pagination.limit + 1}</span> to{' '}
                                    <span className="font-medium">
                                        {Math.min(page * pagination.limit, pagination.total)}
                                    </span>{' '}
                                    of <span className="font-medium">{pagination.total}</span> results
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => setPage(page - 1)}
                                        disabled={page === 1}
                                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => setPage(page + 1)}
                                        disabled={page === pagination.totalPages}
                                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
