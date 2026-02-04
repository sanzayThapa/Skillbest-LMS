"use client";

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    FiHome, FiUsers, FiBriefcase, FiBook, FiAward,
    FiCheckCircle, FiBarChart2, FiMail, FiSettings, FiShield,
    FiFileText, FiDollarSign, FiMenu, FiX
} from 'react-icons/fi';
import { HiOfficeBuilding } from 'react-icons/hi';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        console.log('AdminLayout Session:', session);
        console.log('AdminLayout Status:', status);
        if (status === 'unauthenticated') {
            router.push('/api/auth/signin');
        } else if (status === 'authenticated' && (session?.user as any)?.role !== 'admin') {
            console.log('Redirecting to / because user is not admin. Role:', (session?.user as any)?.role);
            router.push('/');
        }
    }, [status, session, router]);

    if (status === 'loading') {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (!session || (session.user as any)?.role !== 'admin') {
        return null;
    }

    const navigation = [
        {
            group: 'Overview',
            items: [
                { name: 'Dashboard', href: '/admin', icon: FiHome }
            ]
        },
        {
            group: 'Clients',
            items: [
                { name: 'Companies', href: '/admin/companies', icon: HiOfficeBuilding },
                { name: 'Organization', href: '/admin/organization', icon: FiUsers },
                { name: 'Employees', href: '/admin/employees', icon: FiUsers }
            ]
        },
        {
            group: 'Learning',
            items: [
                { name: 'Programs', href: '/admin/programs', icon: FiBriefcase },
                { name: 'Courses', href: '/admin/courses', icon: FiBook },
                { name: 'Assignments', href: '/admin/assignments', icon: FiCheckCircle },
                { name: 'Assessments', href: '/admin/assessments', icon: FiAward }
            ]
        },
        {
            group: 'Monitoring',
            items: [
                { name: 'Compliance', href: '/admin/compliance', icon: FiShield },
                { name: 'Reports', href: '/admin/reports', icon: FiBarChart2 }
            ]
        },
        {
            group: 'Operations',
            items: [
                { name: 'Instructors', href: '/admin/instructors', icon: FiUsers },
                { name: 'Communication', href: '/admin/communication', icon: FiMail }
            ]
        },
        {
            group: 'Business',
            items: [
                { name: 'Billing', href: '/admin/billing', icon: FiDollarSign },
                { name: 'Contracts', href: '/admin/contracts', icon: FiFileText }
            ]
        },
        {
            group: 'System',
            items: [
                { name: 'Settings', href: '/admin/settings', icon: FiSettings }
            ]
        }
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
                {/* Header */}
                <div className="p-4 flex items-center justify-between border-b border-gray-800">
                    {sidebarOpen && <h1 className="text-xl font-bold">Admin Portal</h1>}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 rounded-lg hover:bg-gray-800"
                    >
                        {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-4">
                    {navigation.map((section) => (
                        <div key={section.group} className="mb-6">
                            {sidebarOpen && (
                                <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                    {section.group}
                                </h3>
                            )}
                            <div className="space-y-1">
                                {section.items.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`flex items-center px-4 py-2 text-sm transition-colors ${isActive
                                                ? 'bg-gray-800 text-white'
                                                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                                }`}
                                        >
                                            <Icon size={20} className="flex-shrink-0" />
                                            {sidebarOpen && <span className="ml-3">{item.name}</span>}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* User Profile */}
                <div className="p-4 border-t border-gray-800">
                    {sidebarOpen ? (
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                {session.user?.name?.[0] || 'A'}
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium">{session.user?.name}</p>
                                <p className="text-xs text-gray-400">Admin</p>
                            </div>
                        </div>
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mx-auto">
                            {session.user?.name?.[0] || 'A'}
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <header className="bg-white shadow-sm z-10">
                    <div className="px-6 py-4">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            {navigation.flatMap(s => s.items).find(i => i.href === pathname)?.name || 'Dashboard'}
                        </h2>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
