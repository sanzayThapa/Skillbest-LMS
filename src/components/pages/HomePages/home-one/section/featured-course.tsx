import { useState, useEffect } from 'react';
import Link from 'next/link'
import ImageWithBasePath from '@/core/common/imageWithBasePath'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { all_routes } from '@/router/all_routes';
import api from '@/lib/api';

const Featuredcourse = () => {
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const { data } = await api.get('/courses/public/all');
                setCourses(data);
            } catch (error) {
                console.error("Failed to fetch featured courses", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const featurecourseslider = {
        dots: false,
        infinite: courses.length > 3,
        speed: 300,
        slidesToShow: Math.min(courses.length, 3) || 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: Math.min(courses.length, 3),
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: Math.min(courses.length, 2),
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const route = all_routes;

    if (loading) return null;
    if (courses.length === 0) return null;

    return (
        <>
            <section className="featured-courses-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                            Featured Courses
                        </span>
                        <h2>What’s New in DreamLMS</h2>
                        <p>
                            Discover our featured courses, specially curated to help you gain in-demand skills
                        </p>
                    </div>
                    <div className='feature-course-slider-22 top-courses-slider'>
                        <Slider {...featurecourseslider}>
                            {courses.map((course) => (
                                <div key={course.id}>
                                    <div className="course-item">
                                        <div className="course-img">
                                            <Link href={`${route.courseDetails}?id=${course.id}`}>
                                                <img
                                                    src={course.imageUrl || "/assets/img/course/course-36.jpg"}
                                                    alt={course.title}
                                                    className="img-fluid rounded-3"
                                                    style={{ width: '100%', height: '200px', objectCover: 'cover' } as any}
                                                />
                                            </Link>
                                            <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                                <span className="price-badge ms-auto">${course.price || 0}</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="badge badge-md badge-soft-info rounded-pill">
                                                {course.category?.name || "General"}
                                            </span>
                                        </div>
                                        <div className="pb-3 border-bottom mb-3">
                                            <h5 className="text-truncate">
                                                <Link href={`${route.courseDetails}?id=${course.id}`}>
                                                    {course.title}
                                                </Link>
                                            </h5>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <div className="course-rating">
                                                <span className="course-user">
                                                    <img
                                                        src={course.user?.image || "/assets/img/user/user-06.jpg"}
                                                        alt="instructor"
                                                        className="img-fluid rounded-circle"
                                                        style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                                                    />
                                                </span>
                                                <span className="ms-2 text-sm">{course.user?.name || "Instructor"}</span>
                                            </div>
                                            <div className="d-flex">
                                                <span className="d-flex align-items-center rating">
                                                    <i className="fa-solid fa-star text-warning me-2" />
                                                    5.0
                                                </span>
                                            </div>
                                        </div>
                                        <Link href={`${route.courseDetails}?id=${course.id}`} className="btn buy-course-btn w-100">
                                            View Course
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Link href={route.courseList} className="btn btn-primary btn-md">
                            View All Courses
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featuredcourse
