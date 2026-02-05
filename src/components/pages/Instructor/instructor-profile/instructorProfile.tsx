"use client";
import Breadcrumb from '@/core/common/Breadcrumb/breadcrumb'
import ProfileCard from '../common/profileCard'
import InstructorSidebar from '../common/instructorSidebar'
import Link from 'next/link';

import { useSession } from "next-auth/react";
import { all_routes } from '@/router/all_routes';

const InstructorProfileComponent = () => {
  const { data: session } = useSession();
  const user = session?.user;

  // Helper to safely get name parts
  const fullName = user?.name || "Instructor";
  const [firstName, ...lastNameParts] = fullName.split(" ");
  const lastName = lastNameParts.join(" ");

  return (
    <>
      <Breadcrumb title='My Profile' />
      <div className="content">
        <div className="container">
          <ProfileCard />
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar />
            {/* /Sidebar */}
            <div className="col-lg-9">
              <div className="page-title d-flex align-items-center justify-content-between">
                <h5 className="fw-bold">My Profile</h5>
                <Link href={all_routes.instructorsettings} className="edit-profile-icon">
                  <i className="isax isax-edit-2" />
                </Link>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="fs-18 pb-3 border-bottom mb-3">Basic Information</h5>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <h6>First Name</h6>
                        <span>{firstName}</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <h6>Last Name</h6>
                        <span>{lastName}</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <h6>Registration Date</h6>
                        <span>N/A</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <h6>User Name</h6>
                        <span>{user?.name || "N/A"}</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <h6>Phone Number</h6>
                        <span>N/A</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <h6>Email</h6>
                        <span>{user?.email || "N/A"}</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <h6>Gender</h6>
                        <span>N/A</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <h6>DOB</h6>
                        <span>N/A</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <h6>Age</h6>
                        <span>N/A</span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <h6>Bio</h6>
                        <span>
                          N/A
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="fs-18 pb-3 border-bottom mb-3">Education</h5>
                  <div className="education-flow">
                    <p>No education details added yet.</p>
                  </div>
                </div>
              </div>
              <div className="card mb-0">
                <div className="card-body">
                  <h5 className="fs-18 pb-3 border-bottom mb-3">Experience</h5>
                  <p>No experience details added yet.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default InstructorProfileComponent
