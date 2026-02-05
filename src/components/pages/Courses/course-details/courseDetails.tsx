"use client";
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Breadcrumb from '@/core/common/Breadcrumb/breadcrumb'
import ImageWithBasePath from '@/core/common/imageWithBasePath'
import Link from 'next/link'
import { all_routes } from '@/router/all_routes'
import api from '@/lib/api'
import VideoModal from '../../HomePages/home-one/section/videoModal';

const CourseDetailsContent = () => {
    const searchParams = useSearchParams();
    const courseId = searchParams.get('id');
    const [course, setCourse] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const route = all_routes;

    useEffect(() => {
        if (!courseId) return;
        const fetchCourse = async () => {
            try {
                const { data } = await api.get(`/courses/${courseId}`);
                setCourse(data);
            } catch (error) {
                console.error("Failed to fetch course details", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourse();
    }, [courseId]);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false)

    if (loading) return <div className="p-10 text-center">Loading course details...</div>;
    if (!course) return <div className="p-10 text-center">Course not found.</div>;

    const requirements = Array.isArray(course.requirements) ? course.requirements : [];
    const faqs = Array.isArray(course.faq) ? course.faq : [];

    return (
        <>
            <Breadcrumb title='Course Detail' />
            <section className="course-details-two">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-light">
                                <div className="card-body d-lg-flex align-items-center">
                                    <div className="position-relative">
                                        <div onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
                                            <img
                                                className="img-fluid rounded-2"
                                                src={course.imageUrl || "/assets/img/course/video-bg.jpg"}
                                                alt={course.title}
                                                style={{ width: '320px', height: '180px', objectFit: 'cover' }}
                                            />
                                            {course.videoUrl && (
                                                <div className="play-icon">
                                                    <i className="ti ti-player-play-filled fs-28" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <VideoModal show={showModal} handleClose={handleCloseModal} videoUrl={course.videoUrl} />
                                    <div className="w-100 ps-lg-4 mt-4 mt-lg-0">
                                        <h3 className="mb-2">{course.title}</h3>
                                        <div className="d-flex align-items-center gap-2 gap-sm-3 gap-xl-4 flex-wrap my-3">
                                            <p className="fw-medium d-flex align-items-center mb-0 text-sm">
                                                <i className="ti ti-book me-2" />
                                                {course.chapters?.length || 0} Chapters
                                            </p>
                                            <p className="fw-medium d-flex align-items-center mb-0 text-sm">
                                                <i className="ti ti-language me-2" />
                                                {course.language || 'English'}
                                            </p>
                                            <span className="badge badge-sm rounded-pill bg-info fs-12">
                                                {course.category?.name || 'General'}
                                            </span>
                                        </div>
                                        <div className="d-sm-flex align-items-center justify-content-sm-between mt-3">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar avatar-lg">
                                                    <img
                                                        className="rounded-circle"
                                                        src={course.user?.image || "/assets/img/avatar/avatar10.jpg"}
                                                        alt="instructor"
                                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div className="ms-3">
                                                    <h5 className="fs-18 fw-semibold mb-0">
                                                        {course.user?.name || "Instructor"}
                                                    </h5>
                                                    <p className="fs-14 mb-0 text-muted">Course Instructor</p>
                                                </div>
                                            </div>
                                            <div className="d-flex mt-sm-0 mt-3 align-items-center">
                                                <i className="fa-solid fa-star text-warning me-1" />
                                                <p className="fs-14 mb-0">
                                                    <span className="text-dark fw-bold">5.0</span> (New)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-8">
                            <div className="course-page-content pt-0">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-3">Overview</h5>
                                        <h6 className="mb-2">Course Description</h6>
                                        <div className="mb-4" dangerouslySetInnerHTML={{ __html: course.description }} />

                                        {requirements.length > 0 && (
                                            <>
                                                <h6 className="mb-2">Requirements</h6>
                                                <ul className="custom-list mb-0">
                                                    {requirements.map((req: string, i: number) => (
                                                        <li key={i} className="list-item">{req}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="subs-title mb-3">Course Content</h5>
                                        <div className="accordion accordion-customicon1" id="courseCurriculum">
                                            {course.chapters?.map((chapter: any, index: number) => (
                                                <div className="accordion-item mb-2 border rounded" key={chapter.id}>
                                                    <h2 className="accordion-header">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#chapter-${chapter.id}`}
                                                        >
                                                            {chapter.title}
                                                            <span className="ms-auto me-3 text-sm text-muted">
                                                                {chapter.lessons?.length || 0} lessons
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id={`chapter-${chapter.id}`} className="accordion-collapse collapse" data-bs-parent="#courseCurriculum">
                                                        <div className="accordion-body p-0">
                                                            <ul className="list-group list-group-flush">
                                                                {chapter.lessons?.map((lesson: any) => (
                                                                    <li key={lesson.id} className="list-group-item d-flex justify-content-between align-items-center py-3">
                                                                        <div className="d-flex align-items-center">
                                                                            <i className="ti ti-player-play me-2 text-primary" />
                                                                            <span>{lesson.title}</span>
                                                                        </div>
                                                                        {lesson.isFree && <span className="badge bg-success-soft text-success">Preview</span>}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {faqs.length > 0 && (
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h5 className="subs-title mb-3">Frequently Asked Questions</h5>
                                            <div className="accordion accordion-customicon1" id="courseFaq">
                                                {faqs.map((faq: any, i: number) => (
                                                    <div className="accordion-item mb-2 border rounded" key={i}>
                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq-${i}`}>
                                                                {faq.question}
                                                            </button>
                                                        </h2>
                                                        <div id={`faq-${i}`} className="accordion-collapse collapse" data-bs-parent="#courseFaq">
                                                            <div className="accordion-body">
                                                                {faq.answer}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="course-sidebar-sec mt-0">
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-body">
                                        <div className="text-center mb-4">
                                            <h2 className="text-primary fs-36 mb-0">${course.price || 0}</h2>
                                            <p className="text-muted">Full Lifetime Access</p>
                                        </div>
                                        <button className="btn btn-primary w-100 btn-enroll py-3 mb-3 fw-bold">
                                            Enroll Now
                                        </button>
                                        <p className="text-center text-sm text-muted mb-0">
                                            30-Day Money-Back Guarantee
                                        </p>
                                    </div>
                                </div>
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h5 className="subs-title mb-4">This Course Includes</h5>
                                        <ul className="list-unstyled">
                                            <li className="mb-3 d-flex align-items-center">
                                                <i className="ti ti-video me-3 text-muted" /> {course.chapters?.length || 0} Sections
                                            </li>
                                            <li className="mb-3 d-flex align-items-center">
                                                <i className="ti ti-file-text me-3 text-muted" /> Articles & Resources
                                            </li>
                                            <li className="mb-3 d-flex align-items-center">
                                                <i className="ti ti-smartphone me-3 text-muted" /> Access on mobile and TV
                                            </li>
                                            <li className="mb-0 d-flex align-items-center">
                                                <i className="ti ti-certificate me-3 text-muted" /> Certificate of completion
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const CourseDetailsComponent = () => {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <CourseDetailsContent />
        </Suspense>
    );
}

export default CourseDetailsComponent;
