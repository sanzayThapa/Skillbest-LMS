"use client";
import Link from 'next/link'
import ImageWithBasePath from '@/core/common/imageWithBasePath'
import { all_routes } from '@/router/all_routes'


const Footer = () => {
  return (
    <footer className="footer footer-one">
  <div className="footer-top">
    <div className="container">
      <div className="row row-gap-4">
        <div className="col-lg-4">
          <div className="footer-about">
            <div className="footer-logo">
              <ImageWithBasePath src="/assets/img/logo.png" alt="Skillbest LMS logo" width={250}  />
            </div>
            <p>
              Platform designed to help organizations, educators, and learners
              manage, deliver, and track learning and training activities.
            </p>
            <div className="d-flex align-items-center">
              <Link href="#" className="me-2">
                <ImageWithBasePath src="/assets/img/icon/appstore.svg" alt="" />
              </Link>
              <Link href="#">
                <ImageWithBasePath src="/assets/img/icon/googleplay.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="row row-gap-4">
            <div className="col-lg-4 col-md-4">
              <div className="footer-widget footer-menu">
                <h5 className="footer-title">Support</h5>
                <ul>
                  <li>
                    <Link href={all_routes.courseGrid}>Education</Link>
                  </li>
                  <li>
                    <Link href={all_routes.addNewCourse}>Enroll Course</Link>
                  </li>
                  <li>
                    <Link href="#">Orders</Link>
                  </li>
                  <li>
                    <Link href={all_routes.pricingPlan}>Payments</Link>
                  </li>
                  <li>
                    <Link href={all_routes.blogGrid}>Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="footer-widget footer-menu">
                <h5 className="footer-title">About</h5>
                <ul>
                  <li>
                    <Link href={all_routes.courseCategory}>Categories</Link>
                  </li>
                  <li>
                    <Link href={all_routes.courseList}>Courses</Link>
                  </li>
                  <li>
                    <Link href={all_routes.about_us}>About Us</Link>
                  </li>
                  <li>
                    <Link href={all_routes.FAQ}>Faq</Link>
                  </li>
                  <li>
                    <Link href={all_routes.contactUs}>Contacts</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="footer-widget footer-menu">
                <h5 className="footer-title">Useful Links</h5>
                <ul>
                  <li>
                    <Link href="#">Our values</Link>
                  </li>
                  <li>
                    <Link href="#">Our advisory board</Link>
                  </li>
                  <li>
                    <Link href="#">Our partners</Link>
                  </li>
                  <li>
                    <Link href="#">Become a partner</Link>
                  </li>
                  <li>
                    <Link href="#">Work at Future Learn</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-widget footer-contact">
            <h5 className="footer-title">Subscribe Newsletter</h5>
            <div className="footer-newsletter">
              <p>Sign up to get updates &amp; news.</p>
              <form action="#">
                <div className="subscribe-form">
                  <span>
                    <i className="isax isax-message-text" />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary btn-xl w-100"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row row-gap-2">
        <div className="col-lg-5">
          <div className="text-center text-lg-start">
            <p>
              Copyright 2025 © <span className="text-secondary">SkillBest</span>
              . All right reserved.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <ul className="d-flex align-items-center justify-content-center footer-link">
            <li>
              <Link href={all_routes.termsConditions}>Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link href={all_routes.privacyPolicy}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <div className="social-icon">
            <Link href="#">
              <i className="fa-brands fa-facebook-f" />
            </Link>
            <Link href="#">
              <i className="fa-brands fa-instagram" />
            </Link>
            <Link href="#">
              <i className="fa-brands fa-x-twitter" />
            </Link>
            <Link href="#">
              <i className="fa-brands fa-youtube" />
            </Link>
            <Link href="#">
              <i className="fa-brands fa-linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer