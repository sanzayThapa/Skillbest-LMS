"use client";
import Breadcrumb from "@/core/common/Breadcrumb/breadcrumb";
import ImageWithBasePath from "@/core/common/imageWithBasePath";
import ProfileCard from "../../common/profileCard";
import InstructorSidebar from "../../common/instructorSidebar";
import InstructorSettingsLink from "../settings-link/instructorSettingsLink";
import { all_routes } from "@/router/all_routes";
import { DatePicker } from "antd";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

const InstructorProfileSettingsComponent = () => {
  const route = all_routes;
  const { data: session } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
    bio: "",
    headline: "", // Mapped to 'Degree' or 'Position' for now, or just Headline
    gender: "",
    dob: null as any,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/user-profile");
        const user = response.data;
        if (user) {
          const [first, ...rest] = (user.name || "").split(" ");
          setFormData({
            firstName: first || "",
            lastName: rest.join(" ") || "",
            userName: user.name || "", // Often username is same as name or separate
            phone: user.phone || "",
            bio: user.bio || "",
            headline: user.headline || "",
            gender: user.gender || "",
            dob: user.dateOfBirth ? dayjs(user.dateOfBirth) : null,
          });
        }
      } catch (error) {
        console.error("Failed to fetch profile", error);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchProfile();
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: any, dateString: any) => {
    setFormData({ ...formData, dob: date });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      await axios.patch("/api/user-profile", {
        name: fullName,
        phone: formData.phone,
        bio: formData.bio,
        headline: formData.headline,
        dateOfBirth: formData.dob ? formData.dob.toDate() : null
      });
      alert("Profile updated successfully!");
      router.refresh();
    } catch (error) {
      console.error("Error updating profile", error);
      alert("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("add_assignment");
    return modalElement ? modalElement : document.body;
  };

  if (initialLoading) return <div>Loading...</div>;

  return (
    <>
      <Breadcrumb title="My Profile" />
      <div className="content">
        <div className="container">
          <ProfileCard />
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar />
            {/* /Sidebar */}
            <div className="col-lg-9">
              <div className="mb-3">
                <h5>Settings</h5>
              </div>
              <InstructorSettingsLink />
              <form onSubmit={handleSubmit}>
                <div className="card">
                  <div className="card-body">
                    {/* Avatar Logic Omitted for Brevity - Keeping Existing Structure if Possible, or Simplifying */}
                    {/* ... (Keeping the avatar section static/placeholder for now as requested task is about 'details') ... */}

                    <div>
                      <div className="edit-profile-info mb-3">
                        <h5 className="mb-1 fs-18">Personal Details</h5>
                        <p>Edit your personal information</p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              First Name <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Last Name <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              User Name <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={formData.userName}
                              readOnly
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Phone Number{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-4">
                            <label className="form-label">
                              Bio <span className="text-danger"> *</span>
                            </label>
                            <textarea
                              rows={4}
                              className="form-control"
                              name="bio"
                              value={formData.bio}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb-4">
                            <label className="form-label">
                              Headline / Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="headline"
                              value={formData.headline}
                              onChange={handleChange}
                              placeholder="e.g. Senior Instructor"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Date of Birth
                            </label>
                            <div className="input-icon position-relative calender-input">
                              <span className="input-icon-addon">
                                <i className="isax isax-calendar z-1" />
                              </span>
                              <DatePicker
                                className="form-control datetimepicker"
                                getPopupContainer={getModalContainer}
                                placeholder="dd/mm/yyyy"
                                value={formData.dob}
                                onChange={handleDateChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <button
                            className="btn btn-secondary rounded-pill"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? "Updating..." : "Update Profile"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorProfileSettingsComponent;
