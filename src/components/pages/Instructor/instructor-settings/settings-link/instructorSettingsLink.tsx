"use client";
import { all_routes } from "@/router/all_routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const InstructorSettingsLink = () => {
    const route = all_routes;

    const location = usePathname();

  return (
    <>
      <ul className="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded">
        <li>
          <Link href={route.instructorsettings} className={`${location === '/instructor/instructor-settings' ? 'active' : ''}`}>
            Profile
          </Link>
        </li>
        <li>
          <Link href={route.instructorChangePassword} className={`${location === '/instructor/instructor-change-password' ? 'active' : ''}`}>Security</Link>
        </li>
        <li>
          <Link href={route.instructorPlan} className={`${location === '/instructor/instructor-plans' ? 'active' : ''}`}>Plans</Link>
        </li>
        <li>
          <Link href={route.instructorSocialProfiles} className={`${location === '/instructor/instructor-social-profiles' ? 'active' : ''}`}>Social Profiles</Link>
        </li>
        <li>
          <Link href={route.instructorLinkedAccounts} className={`${location === '/instructor/instructor-linked-accounts' ? 'active' : ''}`}>Linked Accounts</Link>
        </li>
        <li>
          <Link href={route.instructorNotification} className={`${location === '/instructor/instructor-notifications' ? 'active' : ''}`}>Notifications</Link>
        </li>
        <li>
          <Link href={route.instructorIntegrations} className={`${location === '/instructor/instructor-integrations' ? 'active' : ''}`}>Integrations</Link>
        </li>
        <li>
          <Link href={route.instructorWithdraw} className={`${location === '/instructor/instructor-withdraw' ? 'active' : ''}`}>Withdraw</Link>
        </li>
      </ul>
    </>
  );
};

export default InstructorSettingsLink;
