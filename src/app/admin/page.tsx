"use client";

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import {
    FiUsers, FiBook, FiAlertCircle,
    FiCheckCircle, FiClock, FiTrendingUp
} from 'react-icons/fi';
import { HiOfficeBuilding } from 'react-icons/hi';

interface DashboardStats {
    stats: {
        totalCompanies: number;
        activeCompanies: number;
        totalEmployees: number;
        activeEmployees: number;
        totalEnrollments: number;
        completedEnrollments: number;
        overdueEnrollments: number;
        totalPrograms: number;
        totalCourses: number;
        complianceRate: number;
    };
    recentActivities: any[];
    companiesWithLowCompliance: any[];
}

export default function AdminDashboard() {
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [alerts, setAlerts] = useState<any[]>([]);

    useEffect(() => {
        fetchDashboardData();
        fetchAlerts();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const res = await api.get('/dashboard/overview');
            setStats(res.data);
        } catch (error) {
            console.error('Failed to fetch dashboard data', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchAlerts = async () => {
        try {
            const res = await api.get('/dashboard/alerts');
            setAlerts(res.data);
        } catch (error) {
            console.error('Failed to fetch alerts', error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-lg">Loading dashboard...</div>
            </div>
        );
    }

    if (!stats) {
        return (
            <div className="text-center text-red-600">
                Failed to load dashboard data
            </div>
        );
    }

    const statCards = [
        {
            title: 'Total Companies',
            value: stats.stats.totalCompanies,
            subtitle: `${stats.stats.activeCompanies} active`,
            icon: HiOfficeBuilding,
            color: 'bg-blue-500'
        },
        {
            title: 'Active Learners',
            value: stats.stats.activeEmployees,
            subtitle: `of ${stats.stats.totalEmployees} total`,
            icon: FiUsers,
            color: 'bg-green-500'
        },
        {
            title: 'Ongoing Trainings',
            value: stats.stats.totalEnrollments - stats.stats.completedEnrollments,
            subtitle: `${stats.stats.totalEnrollments} total`,
            icon: FiBook,
            color: 'bg-purple-500'
        },
        {
            title: 'Compliance Rate',
            value: `${stats.stats.complianceRate}%`,
            subtitle: `${stats.stats.completedEnrollments} completed`,
            icon: FiCheckCircle,
            color: 'bg-teal-500'
        },
        {
            title: 'Overdue Trainings',
            value: stats.stats.overdueEnrollments,
            subtitle: 'Requires attention',
            icon: FiAlertCircle,
            color: 'bg-red-500'
        },
        {
            title: 'Training Programs',
            value: stats.stats.totalPrograms,
            subtitle: `${stats.stats.totalCourses} courses`,
            icon: FiTrendingUp,
            color: 'bg-indigo-500'
        }
    ];

    return (
        <div className="space-y-6">
            {/* Page Title */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600 mt-1">Your daily cockpit for managing the LMS</p>
            </div>

            {/* System Alerts */}
            {alerts.length > 0 && (
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-semibold mb-4 flex items-center">
                        <FiAlertCircle className="mr-2 text-orange-500" />
                        System Alerts
                    </h2>
                    <div className="space-y-3">
                        {alerts.map((alert, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg border-l-4 ${alert.type === 'CRITICAL'
                                    ? 'bg-red-50 border-red-500'
                                    : alert.type === 'WARNING'
                                        ? 'bg-yellow-50 border-yellow-500'
                                        : 'bg-blue-50 border-blue-500'
                                    }`}
                            >
                                <p className="text-sm font-medium">{alert.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <div key={index} className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                                    <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                                    <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
                                </div>
                                <div className={`${card.color} p-3 rounded-lg`}>
                                    <Icon size={24} className="text-white" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">Recent Activities</h2>
                </div>
                <div className="p-6">
                    {stats.recentActivities.length > 0 ? (
                        <div className="space-y-4">
                            {stats.recentActivities.map((activity, index) => (
                                <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
                                    <div className="flex-shrink-0">
                                        <FiClock className="text-gray-400" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-900">
                                            <span className="font-medium">
                                                {activity.employee.firstName} {activity.employee.lastName}
                                            </span>
                                            {' '}enrolled in{' '}
                                            <span className="font-medium">
                                                {activity.course?.title || activity.program?.name}
                                            </span>
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {activity.employee.company.name} • {new Date(activity.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${activity.status === 'COMPLETED'
                                            ? 'bg-green-100 text-green-800'
                                            : activity.status === 'IN_PROGRESS'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-gray-100 text-gray-800'
                                            }`}>
                                            {activity.status.replace('_', ' ')}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center py-8">No recent activities</p>
                    )}
                </div>
            </div>

            {/* Companies Overview */}
            <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold">Companies Overview</h2>
                </div>
                <div className="p-6">
                    {stats.companiesWithLowCompliance.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Company
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Employees
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {stats.companiesWithLowCompliance.map((company) => (
                                        <tr key={company.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{company.name}</div>
                                                <div className="text-sm text-gray-500">{company.industry || 'N/A'}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {company._count.employees}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${company.status === 'ACTIVE'
                                                    ? 'bg-green-100 text-green-800'
                                                    : company.status === 'PAUSED'
                                                        ? 'bg-yellow-100 text-yellow-800'
                                                        : 'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {company.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center py-8">No companies found</p>
                    )}
                </div>
            </div>
        </div>
    );
}
