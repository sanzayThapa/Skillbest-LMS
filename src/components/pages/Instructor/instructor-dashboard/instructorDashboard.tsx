"use client";
import { useState, useEffect } from 'react'
import api from '@/lib/api'
import Breadcrumb from '@/core/common/Breadcrumb/breadcrumb'
import ProfileCard from '../common/profileCard'
import InstructorSidebar from '../common/instructorSidebar'
import { all_routes } from '@/router/all_routes'
import PredefinedDateRanges from '@/core/common/range-picker/datePicker'
import ImageWithBasePath from '@/core/common/imageWithBasePath'
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const InstructorDashboardComponent = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toursChart] = useState<any>({

    chart: {
      height: 290,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
        endingShape: 'rounded'
      },
    },
    series: [{
      name: 'Earnings',
      data: [80, 100, 70, 110, 80, 90, 85, 85, 110, 30, 100, 90]
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          colors: '#4D4D4D',
          fontSize: '13px',
        }
      }
    },
    yaxis: {
      labels: {
        offsetX: -15,
        style: {
          colors: '#4D4D4D',
          fontSize: '13px',
        }
      }
    },
    grid: {
      borderColor: '#4D4D4D',
      strokeDashArray: 5
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false // Disable data labels
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'linear',
        shadeIntensity: 0.35,
        gradientToColors: ['#392C7D'], // Second gradient color
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        angle: 90 // This sets the gradient direction from top to bottom
      }
    },


  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get('/courses');
        setCourses(data);
      } catch (error) {
        console.error('Failed to fetch courses', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);
  return (
    <>
      <Breadcrumb title='Dashboard' />
      <div className="content">
        <div className="container">
          <ProfileCard />
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar />
            {/* /Sidebar */}
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span className="icon-box bg-primary-transparent me-2 me-xxl-3 flex-shrink-0">
                          <ImageWithBasePath src="/assets/img/icon/graduation.svg" alt="" />
                        </span>
                        <div>
                          <span className="d-block">Enrolled Courses</span>
                          <h4 className="fs-24 mt-1">12</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span className="icon-box bg-secondary-transparent me-2 me-xxl-3 flex-shrink-0">
                          <ImageWithBasePath src="/assets/img/icon/book.svg" alt="" />
                        </span>
                        <div>
                          <span className="d-block">Active Courses</span>
                          <h4 className="fs-24 mt-1">08</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span className="icon-box bg-success-transparent me-2 me-xxl-3 flex-shrink-0">
                          <ImageWithBasePath src="/assets/img/icon/bookmark.svg" alt="" />
                        </span>
                        <div>
                          <span className="d-block">Completed Courses</span>
                          <h4 className="fs-24 mt-1">06</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span className="icon-box bg-info-transparent me-2 me-xxl-3 flex-shrink-0">
                          <ImageWithBasePath src="/assets/img/icon/user-octagon.svg" alt="" />
                        </span>
                        <div>
                          <span className="d-block">Total Students</span>
                          <h4 className="fs-24 mt-1">17</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span className="icon-box bg-blue-transparent me-2 me-xxl-3 flex-shrink-0">
                          <ImageWithBasePath src="/assets/img/icon/book-2.svg" alt="" />
                        </span>
                        <div>
                          <span className="d-block">Total Courses</span>
                          <h4 className="fs-24 mt-1">11</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span className="icon-box bg-purple-transparent me-2 me-xxl-3 flex-shrink-0">
                          <ImageWithBasePath src="/assets/img/icon/money-add.svg" alt="" />
                        </span>
                        <div>
                          <span className="d-block">Total Earnings</span>
                          <h4 className="fs-24 mt-1">$486</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between border-bottom mb-2 pb-3">
                    <h5 className="fw-bold">Earnings by Year</h5>
                    <div className="input-icon position-relative input-range-picker">
                      <span className="input-icon-addon">
                        <i className="isax isax-calendar" />
                      </span>
                      <PredefinedDateRanges />
                    </div>
                  </div>
                  <div id="earnnings_chart" />

                  <ReactApexChart
                    options={toursChart}
                    series={toursChart.series}
                    type="bar"
                    height={290}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">My Courses</h5>
                <Link href="/instructor/create-course" className="btn btn-primary">
                  <i className="ti ti-plus me-2"></i>Create New Course
                </Link>
              </div>
              <div className="table-responsive custom-table">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>Courses</th>
                      <th>Enrolled</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={3} className="text-center">Loading courses...</td>
                      </tr>
                    ) : courses.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="text-center">
                          <p className="text-muted">No courses yet. Create your first course!</p>
                        </td>
                      </tr>
                    ) : (
                      courses.map((course) => (
                        <tr key={course.id}>
                          <td>
                            <div className="course-title d-flex align-items-center">
                              <Link
                                href={`/instructor/courses/${course.id}`}
                                className="avatar avatar-xl flex-shrink-0 me-2"
                              >
                                {course.imageUrl ? (
                                  <img src={course.imageUrl} alt={course.title} className="rounded" />
                                ) : (
                                  <ImageWithBasePath
                                    src="/assets/img/instructor/instructor-table-01.jpg"
                                    alt="Img"
                                  />
                                )}
                              </Link>
                              <div>
                                <p className="fw-medium">
                                  <Link href={`/instructor/courses/${course.id}`}>
                                    {course.title}
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>0</td>
                          <td>
                            <span className={`badge ${course.isPublished ? 'bg-success' : 'bg-warning'}`}>
                              {course.isPublished ? 'Published' : 'Draft'}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default InstructorDashboardComponent;
