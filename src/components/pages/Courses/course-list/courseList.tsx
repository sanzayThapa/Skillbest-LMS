"use client";
import { useState, useEffect } from 'react'
import Breadcrumb from '@/core/common/Breadcrumb/breadcrumb'
import Link from 'next/link'
import ImageWithBasePath from '@/core/common/imageWithBasePath'
import { Slider } from 'antd'
import type { SliderSingleProps } from 'antd';
import { all_routes } from '@/router/all_routes'
import api from '@/lib/api';

const CourseListComponent = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<any[]>([]);

  const route = all_routes;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseRes, catRes] = await Promise.all([
          api.get('/courses/public/all'),
          api.get('/courses/meta/categories')
        ]);
        setCourses(courseRes.data);
        setCategories(catRes.data);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `$${value}`;

  return (
    <>
      <Breadcrumb title='Course List' />
      <section className="course-content course-list-content">
        <div className="container">
          <div className="row align-items-baseline">
            <div className="col-lg-3 theiaStickySidebar">
              <div className="filter-clear">
                <div className="clear-filter mb-4 pb-lg-2 d-flex align-items-center justify-content-between">
                  <h5>
                    <i className="feather-filter me-2" />
                    Filters
                  </h5>
                  <Link href="#" className="clear-text">Clear</Link>
                </div>
                <div className="accordion accordion-customicon1 accordions-items-seperate">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <Link href="#" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                        Categories <i className="fa-solid fa-chevron-down" />
                      </Link>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show">
                      <div className="accordion-body">
                        {categories.map((cat) => (
                          <div key={cat.id}>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> {cat.name}
                            </label>
                          </div>
                        ))}
                        {categories.length === 0 && <p className="text-muted">No categories</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="showing-list mb-4">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="show-result text-center text-lg-start">
                      <h6 className="fw-medium">Showing {courses.length} results</h6>
                    </div>
                  </div>
                  <div className="col-lg-8 text-end">
                    {/* Sort/Filter options could stay static for now */}
                  </div>
                </div>
              </div>

              <div className="row course-list-wrap">
                {loading ? (
                  <div className="col-12 text-center py-5">Loading courses...</div>
                ) : courses.length === 0 ? (
                  <div className="col-12 text-center py-5">No published courses found.</div>
                ) : (
                  courses.map((course) => (
                    <div className="col-12" key={course.id}>
                      <div className="courses-list-item">
                        <div className="d-md-flex align-items-center">
                          <div className="position-relative overflow-hidden rounded-3 card-image" style={{ width: '250px', height: '180px' }}>
                            <Link href={`${route.courseDetails}?id=${course.id}`}>
                              <img
                                className="img-fluid rounded-3"
                                src={course.imageUrl || "/assets/img/course/course-01.jpg"}
                                alt={course.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                            </Link>
                          </div>
                          <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-sm rounded-circle">
                                  <img
                                    className="img-fluid rounded-circle"
                                    src={course.user?.image || "/assets/img/user/user-06.jpg"}
                                    alt="instructor"
                                    style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                                  />
                                </div>
                                <p className="ms-2 mb-0">
                                  <Link href="#">{course.user?.name || 'Instructor'}</Link>
                                </p>
                              </div>
                              <span className="tag-btn">{course.category?.name || 'General'}</span>
                            </div>
                            <h4 className="mt-3 mb-2">
                              <Link href={`${route.courseDetails}?id=${course.id}`}>
                                {course.title}
                              </Link>
                            </h4>
                            <div className="d-flex align-items-center">
                              <p className="d-flex align-items-center mb-0">
                                <i className="fa-solid fa-star text-warning me-2" /> 5.0
                              </p>
                              <span className="dot mx-2" />
                              <p className="mb-0">{course.language || 'English'}</p>
                            </div>
                            <div className="d-flex justify-content-between mt-3 align-items-center">
                              <h5 className="text-secondary mb-0">${course.price || 0}</h5>
                              <Link
                                href={`${route.courseDetails}?id=${course.id}`}
                                className="btn btn-dark btn-sm d-inline-flex align-items-center"
                              >
                                View Course
                                <i className="fs-8 fas fa-angle-right ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseListComponent;
