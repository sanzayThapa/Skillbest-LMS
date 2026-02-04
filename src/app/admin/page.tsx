"use client";

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import ImageWithBasePath from '@/core/common/imageWithBasePath';
import Link from 'next/link';
import { FiTrendingUp, FiAlertCircle, FiClock, FiCheckCircle } from 'react-icons/fi';

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

    if (loading) return <div className="text-center py-10">Loading Dashboard...</div>;
    if (!stats) return <div className="text-center py-10 text-red-500">Error loading data</div>;

    const statCards = [
        {
            title: 'Total Companies',
            value: stats.stats.totalCompanies,
            subtitle: `${stats.stats.activeCompanies} active`,
            icon: '/assets/img/icon/building.svg', // Assuming this exists or using a fallback
            color: 'bg-primary-transparent'
        },
        {
            title: 'Active Learners',
            value: stats.stats.activeEmployees,
            subtitle: `of ${stats.stats.totalEmployees} total`,
            icon: '/assets/img/icon/user-octagon.svg',
            color: 'bg-secondary-transparent'
        },
        {
            title: 'Ongoing Programs',
            value: stats.stats.totalPrograms,
            subtitle: `${stats.stats.totalCourses} courses`,
            icon: '/assets/img/icon/book.svg',
            color: 'bg-success-transparent'
        },
        {
            title: 'Enrollments',
            value: stats.stats.totalEnrollments,
            subtitle: `${stats.stats.overdueEnrollments} overdue`,
            icon: '/assets/img/icon/graduation.svg',
            color: 'bg-info-transparent'
        },
        {
            title: 'Compliance Rate',
            value: `${stats.stats.complianceRate}%`,
            subtitle: 'Target: 95%',
            icon: '/assets/img/icon/award.svg',
            color: 'bg-purple-transparent'
        }
    ];

    return (
        <div className="row">
            {/* Stat Cards */}
            {statCards.map((card, index) => (
                <div key={index} className="col-md-6 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <span className={`icon-box ${card.color} me-2 me-xxl-3 flex-shrink-0`}>
                                    <ImageWithBasePath src={card.icon} alt={card.title} />
                                </span>
                                <div>
                                    <span className="d-block text-muted sm-text">{card.title}</span>
                                    <h4 className="fs-24 mt-1 fw-bold">{card.value}</h4>
                                    <span className="text-xs text-secondary d-flex align-items-center mt-1">
                                        <FiTrendingUp className="me-1" /> {card.subtitle}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Main Content Area */}
            <div className="col-md-12">
                {/* System Alerts */}
                {alerts.length > 0 && (
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
                                <h5 className="fw-bold mb-0">System Alerts</h5>
                            </div>
                            <div className="space-y-4">
                                {alerts.map((alert, index) => (
                                    <div key={index} className={`d-flex items-start p-3 rounded-lg ${alert.type === 'CRITICAL' ? 'bg-danger-transparent' : 'bg-warning-transparent'}`}>
                                        <FiAlertCircle className={`mt-1 flex-shrink-0 ${alert.type === 'CRITICAL' ? 'text-danger' : 'text-warning'}`} />
                                        <div className="ml-3">
                                            <p className="text-sm font-medium">{alert.message}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div className="row">
                    <div className="col-lg-8">
                        {/* Recent Activities */}
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
                                    <h5 className="fw-bold mb-0">Recent Activities</h5>
                                </div>
                                <div className="table-responsive custom-table">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Learner</th>
                                                <th>Course / Program</th>
                                                <th>Company</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stats.recentActivities.map((activity, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar avatar-sm me-2 rounded-circle bg-gray-100 flex-shrink-0">
                                                                {activity.employee.firstName[0]}
                                                            </div>
                                                            <span className="text-sm fw-medium">{activity.employee.firstName} {activity.employee.lastName}</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-sm">
                                                        {activity.course?.title || activity.program?.name}
                                                    </td>
                                                    <td className="text-sm text-muted">
                                                        {activity.employee.company.name}
                                                    </td>
                                                    <td>
                                                        <span className={`badge ${activity.status === 'COMPLETED' ? 'bg-success-transparent text-success' : 'bg-info-transparent text-info'}`}>
                                                            {activity.status.replace('_', ' ')}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        {/* Low Compliance Companies */}
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
                                    <h5 className="fw-bold mb-0">Low Compliance Entities</h5>
                                </div>
                                <div className="space-y-4">
                                    {stats.companiesWithLowCompliance.map((company) => (
                                        <div key={company.id} className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="text-sm fw-medium mb-0">{company.name}</p>
                                                <p className="text-xs text-muted mb-0">{company._count.employees} employees</p>
                                            </div>
                                            <div className="text-end">
                                                <span className="text-danger fw-bold">78%</span>
                                                <div className="progress progress-xs mt-1" style={{ width: '60px' }}>
                                                    <div className="progress-bar bg-danger" style={{ width: '78%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <hr />
                                <Link href="/admin/compliance" className="btn btn-outline-primary btn-sm w-100">
                                    View Detailed Report
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
