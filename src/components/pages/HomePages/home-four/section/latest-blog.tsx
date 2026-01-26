"use client";
import ImageWithBasePath from '@/core/common/imageWithBasePath'
import { all_routes } from '@/router/all_routes'
import Link from 'next/link';

const Latestblog = () => {
    const route = all_routes;
    return (
        <>
            {/* Latest Blog */}
            <section className="latest-blog-sec">
                <div className="container">
                    <div className="section-header text-center" data-aos="fade-up">
                        <span className="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">
                            News &amp; Events
                        </span>
                        <h2>Our Latest Updates</h2>
                        <p>Dont Miss Stay Updated with the Latest Articles and Insights</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-down">
                            <div className="event-blog-main">
                                <div className="latest-blog-img">
                                    <Link href={route.blogDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt="Img"
                                            src="/assets/img/blog/blog-31.jpg"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <Link href={route.blogDetails} className="category-name">
                                        LMS
                                    </Link>
                                    <h4 className="title">
                                        <Link href={route.blogDetails}>
                                            Promoting Health &amp; Well being in Schools
                                        </Link>
                                    </h4>
                                    <p className="blog-date">
                                        <i className="isax isax-calendar-1 me-1" />
                                        14 Sep 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-down">
                            <div className="event-blog-main">
                                <div className="latest-blog-img">
                                    <Link href={route.blogDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt="Img"
                                            src="/assets/img/blog/blog-32.jpg"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <Link href={route.blogDetails} className="category-name">
                                        Sales
                                    </Link>
                                    <h4 className="title">
                                        <Link href={route.blogGrid}>
                                            Why an LMS is Essential for Modern Education
                                        </Link>
                                    </h4>
                                    <p className="blog-date">
                                        <i className="isax isax-calendar-1 me-1" />
                                        14 Sep 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-down">
                            <div className="event-blog-main">
                                <div className="latest-blog-img">
                                    <Link href={route.blogDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt="Img"
                                            src="/assets/img/blog/blog-33.jpg"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <Link href={route.blogDetails} className="category-name">
                                        Website Design
                                    </Link>
                                    <h4 className="title">
                                        <Link href={route.blogDetails}>
                                            11 Tips to Help You Get New Clients with the design
                                        </Link>
                                    </h4>
                                    <p className="blog-date">
                                        <i className="isax isax-calendar-1 me-1" />
                                        14 Sep 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* View all  Events */}
                    <div className="col-lg-12">
                        <div className="more-details text-center" data-aos="fade-down">
                            <Link href={route.blogGrid} className="btn btn-secondary btn-xl">
                                View all Updates
                            </Link>
                        </div>
                    </div>
                    {/* /View all  Events */}
                </div>
                <ImageWithBasePath src="/assets/img/bg/blog-bg.png" alt="img" className="blog-bg" />
            </section>
            {/* /Latest Blog */}
        </>

    )
}

export default Latestblog
