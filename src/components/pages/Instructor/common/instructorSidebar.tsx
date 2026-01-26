"use client";
import { instructorSidebarData } from '@/core/common/data/json/instructor-sidebar'
import { all_routes } from '@/router/all_routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const InstructorSidebar = () => {
  const location = usePathname();
  return (
    <div className="col-lg-3 ">
    <div className="settings-sidebar mb-lg-0 theiaStickySidebar">
      <div>
        <h6 className="mb-3">Main Menu</h6>
        <ul className="mb-3 pb-1">
          {instructorSidebarData.map((menu:any ,index:any)=>(
            <li key={index}>
            <Link
              href={menu.route}
              className={`d-inline-flex align-items-center ${location === menu.route || location === menu.subRoute  ? 'active' : ''}`}
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
              href={all_routes.instructorsettings}
              className={`d-inline-flex align-items-center ${location===all_routes.instructorsettings || location===all_routes.instructorChangePassword || location===all_routes.instructorPlan || location===all_routes.instructorSocialProfiles || location===all_routes.instructorLinkedAccounts || location===all_routes.instructorNotification || location===all_routes.instructorIntegrations || location===all_routes.instructorWithdraw ? 'active' : ''}`}
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

export default InstructorSidebar