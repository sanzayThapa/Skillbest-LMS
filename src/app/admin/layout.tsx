"use client";

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Breadcrumb from '@/core/common/Breadcrumb/breadcrumb';
import AdminProfileCard from '@/components/pages/Admin/common/adminProfileCard';
import AdminSidebar from '@/components/pages/Admin/common/adminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/api/auth/signin');
        } else if (status === 'authenticated' && (session?.user as any)?.role !== 'admin') {
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

    // Map pathname to a readable title for breadcrumb
    const getTitle = () => {
        const parts = pathname.split('/');
        const last = parts[parts.length - 1];
        if (!last || last === 'admin') return 'Dashboard';
        return last.charAt(0).toUpperCase() + last.slice(1);
    }

    return (
        <div className="main-wrapper">
            <Breadcrumb title={getTitle()} />
            <div className="content">
                <div className="container">
                    <AdminProfileCard />
                    <div className="row">
                        <AdminSidebar />
                        <div className="col-lg-9">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
