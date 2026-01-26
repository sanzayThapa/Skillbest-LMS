"use client";
import Link from 'next/link'
import { studentSidebarData } from '@/core/common/data/json/student-sidebar'
import { all_routes } from '@/router/all_routes'
import { usePathname } from 'next/navigation';

const StudentSidebar = () => {
    const location = usePathname();
  return (
    <div className="col-lg-3 ">
        <div className="settings-sidebar theiaStickySidebar">
          <div>
            <h6 className="mb-3">Main Menu</h6>
            <ul className="mb-3 pb-1">
          {studentSidebarData.map((menu:any ,index:any)=>(
            <li key={index}>
            <Link
              href={menu.route}
              className={`d-inline-flex align-items-center ${location === menu.route || location === menu.subRoute ? 'active' : ''}`}
            >
              <i className={`${menu.icon} me-2`} />
              {menu.title}
            </Link>
          </li>
          ))}
          
        </ul>
            <hr />
            <h6 className="mb-3">Account Settings</h6>
            <ul>
              <li>
                <Link
                  href={all_routes.studentSettings}
                  className={`d-inline-flex align-items-center ${location===all_routes.studentSettings|| location=== all_routes.studentChangePassword || location=== all_routes.studentSocialProfile || location=== all_routes.studentBillingAddress || location=== all_routes.studentLinkedAccounts || location=== all_routes.studentNotification ? 'active' : ''}`}
                >
                  <i className="isax isax-setting-25 me-2" />
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href={all_routes.login}
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

export default StudentSidebar