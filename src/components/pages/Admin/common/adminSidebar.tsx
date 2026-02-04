"use client";
import { adminSidebarData } from '@/core/common/data/json/admin-sidebar'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminSidebar = () => {
    const location = usePathname();
    return (
        <div className="col-lg-3">
            <div className="settings-sidebar mb-lg-0 theiaStickySidebar">
                <div>
                    <h6 className="mb-3">Admin Menu</h6>
                    <ul className="mb-3 pb-1">
                        {adminSidebarData.map((menu: any, index: any) => (
                            <li key={index}>
                                <Link
                                    href={menu.route}
                                    className={`d-inline-flex align-items-center ${location === menu.route ? 'active' : ''}`}
                                >
                                    <i className={`${menu.icon} me-2`} />
                                    {menu.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <ul>
                        <li>
                            <Link
                                href="/api/auth/signout"
                                className="d-inline-flex align-items-center"
                            >
                                <i className="isax isax-logout5 me-2" />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar
