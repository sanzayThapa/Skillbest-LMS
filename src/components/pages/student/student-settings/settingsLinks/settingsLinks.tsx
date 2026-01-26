"use client";

import { all_routes } from "@/router/all_routes";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SettingsLinksComponent = () => {
  const location = usePathname();
  const route = all_routes;

  const isActive = (path: any) => location === path;

  return (
    <ul className="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded">
      <li>
        <Link
          href={route.studentSettings}
          className={isActive(route.studentSettings) ? "active" : ""}
        >
          Edit Profile
        </Link>
      </li>
      <li>
        <Link
          href={route.studentChangePassword}
          className={isActive(route.studentChangePassword) ? "active" : ""}
        >
          Security
        </Link>
      </li>
      <li>
        <Link
          href={route.studentSocialProfile}
          className={isActive(route.studentSocialProfile) ? "active" : ""}
        >
          Social Profiles
        </Link>
      </li>
      <li>
        <Link
          href={route.studentLinkedAccounts}
          className={isActive(route.studentLinkedAccounts) ? "active" : ""}
        >
          Linked Accounts
        </Link>
      </li>
      <li>
        <Link
          href={route.studentNotification}
          className={isActive(route.studentNotification) ? "active" : ""}
        >
          Notifications
        </Link>
      </li>
      <li>
        <Link
          href={route.studentBillingAddress}
          className={isActive(route.studentBillingAddress) ? "active" : ""}
        >
          Billing Address
        </Link>
      </li>
    </ul>
  );
};

export default SettingsLinksComponent;
