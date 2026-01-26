"use client";
import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { header } from "../data/json/header";
import Link from "next/link";
import { all_routes } from "@/router/all_routes";
import { setDataTheme } from "../../redux/themeSettingSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { AppDispatch } from "@/core/redux/store";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenu, setIsMegaMenu] = useState(false);
  const [subOpen, setSubopen] = useState<any>("");
  const [subsidebar, setSubsidebar] = useState("");
  const [subsidebar2, setSubsidebar2] = useState("");
  const [basePath, setBasePath] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const location = usePathname();
  const dataTheme = useSelector((state: any) => state.themeSetting.dataTheme);
  const handleDataThemeChange = (theme: string) => {
    dispatch(setDataTheme(theme));
  };
  const onHandleMobileMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  const toggleSidebar = (title: any) => {
    localStorage.setItem("menuOpened", title);
    if (title === subOpen) {
      setSubopen("");
    } else {
      setSubopen(title);
    }
  };
  const toggleSubsidebar = (subitem: any) => {
    if (subitem === subsidebar) {
      setSubsidebar("");
    } else {
      setSubsidebar(subitem);
    }
  };
  const toggleSubsidebar2 = (subitem: any) => {
    if (subitem === subsidebar2) {
      setSubsidebar2("");
    } else {
      setSubsidebar2(subitem);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("class", dataTheme);
  }, [dataTheme])
  useEffect(() => {
    const path = location;
    const pathArray = path.split("/").filter(Boolean); // Removes empty strings from the split result
    setBasePath(pathArray[0])
  }, [location])
  const DarkButton = () => {
    return (
      <div className={`icon-btn  ${location === '/home' ? '' : 'me-2'}`}>
            <Link
              href="#"
              id="dark-mode-toggle"
              className={`theme-toggle ${dataTheme === 'light' && 'activate'}`}
              onClick={() => handleDataThemeChange("dark-mode")}
            >
              <i className="isax isax-sun-15" />
            </Link>
            <Link
              href="#"
              id="light-mode-toggle"
              className={`theme-toggle ${dataTheme === 'dark-mode' && 'activate'}`}
              onClick={() => handleDataThemeChange("light")}
            >
              <i className="isax isax-moon" />
            </Link>
          </div>
      
    )
  }
  return (
<>
  {/* Header Topbar*/}
  {location === '/home' || location === '/home-2' || location === '/home-3'
      || location === '/home-4' || location === '/home-5' ? 
    <></>
  :
  <div className="header-topbar text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <p className="d-flex align-items-center fw-medium fs-14 mb-2 me-3">
              <i className="isax isax-location5 me-2" />
              1442 Crosswind Drive Madisonville
            </p>
            <p className="d-flex align-items-center fw-medium fs-14 mb-2">
              <i className="isax isax-call-calling5 me-2" />
              +1 45887 77874
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
            <div className="dropdown flag-dropdown mb-2 me-3">
              <Link
                href="#"
                className="dropdown-toggle d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <ImageWithBasePath
                  src="/assets/img/flags/us-flag.svg"
                  className="me-2"
                  alt="flag"
                />
                ENG
              </Link>
              <ul className="dropdown-menu p-2 mt-2">
                <li>
                  <Link
                    className="dropdown-item rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath
                      src="/assets/img/flags/us-flag.svg"
                      className="me-2"
                      alt="flag"
                    />
                    ENG
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath
                      src="/assets/img/flags/arab-flag.svg"
                      className="me-2"
                      alt="flag"
                    />
                    ARA
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath
                      src="/assets/img/flags/france-flag.svg"
                      className="me-2"
                      alt="flag"
                    />
                    FRE
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown mb-2 me-3">
              <Link
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                USD
              </Link>
              <ul className="dropdown-menu p-2 mt-2">
                <li>
                  <Link
                    className="dropdown-item rounded"
                    href="#"
                  >
                    USD
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item rounded"
                    href="#"
                  >
                    YEN
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item rounded"
                    href="#"
                  >
                    EURO
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="social-icon d-flex align-items-center mb-2">
              <li className="me-2">
                <Link href="#">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li className="me-2">
                <Link href="#">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
              <li className="me-2">
                <Link href="#">
                  <i className="fa-brands fa-x-twitter" />
                </Link>
              </li>
              <li className="me-2">
                <Link href="#">
                  <i className="fa-brands fa-youtube" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-linkedin" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> 
}
  
  {/* /Header Topbar*/}
  {/* Header */}
  <header className={`${location === '/home' ? 'header-one': location === '/home-3' || location === '/home-6' ? 
   'header-three':location === '/home-4' ?'header-four':location === '/home-5' ?'header-five header-two': 'header-two'} ${scrolled ? "fixed" : ""}`}>
    <div className="container">
      <div className="header-nav">
        <div className="navbar-header">
          <Link id="mobile_btn" href="#" onClick={() => onHandleMobileMenu()}>
            <span className="bar-icon">
              <i className="isax isax-menu"></i>
            </span>
          </Link>
          <div className="navbar-logo">
            <Link className="logo-white header-logo" href={all_routes.homeone}>
            {location === '/home'  ?
                <ImageWithBasePath src="/assets/img/logo.png" className="logo" alt="Logo"  width={250} /> :
                <ImageWithBasePath src="/assets/img/logo.png" className="logo" alt="Logo" width={250} />
              }
            </Link>
            <Link className="logo-dark header-logo" href={all_routes.homeone}>
              <ImageWithBasePath
                src="/assets/img/logo-white.svg"
                className="logo"
                alt="Logo"
              />
            </Link>
          </div>
        </div>
        <div className={`main-menu-wrapper ${isMegaMenu ? 'active' : ''}`}>
          <div className="menu-header">
            <Link href={all_routes.homeone} className="menu-logo">
              <ImageWithBasePath src="/assets/img/logo.svg" className="img-fluid" alt="Logo" />
            </Link>
            <Link
              id="menu_close"
              className="menu-close"
              href="#"
              onClick={() => onhandleCloseMenu()}
            >
              <i className="fas fa-times" />
            </Link>
          </div>
          <ul className={`main-nav ${isMegaMenu ? 'active' : ''}`}>
            {header.map((mainMenus:any, mainIndex) => (
              <React.Fragment key={mainIndex}>
                {mainMenus.separateRoute ? (
                  <li
                    key={mainIndex}
                    className={
                      `has-submenu megamenu ${location.includes('home')
                        ? "active"
                        : ""}`
                    }
                    onClick={()=>toggleSidebar(mainMenus.tittle)}
                    onMouseOver={() => setIsMegaMenu(true)} onMouseLeave={() => setIsMegaMenu(false)}
                  >
                    <Link href='#'>{mainMenus.tittle}<i className={` ${basePath === 'instructor' || basePath === 'student' ? "isax isax-add" : "fas fa-chevron-down"}`} /></Link> 
                    <ul className={`submenu mega-submenu ${subOpen === mainMenus.tittle ? "d-block" : ""}`} onMouseOver={() => setIsMegaMenu(true)} onMouseLeave={() => setIsMegaMenu(false)}>
                <li>
                  <div className="megamenu-wrapper">
                    <div className="row">
                    {mainMenus.menu.map((menu: any, idx: any) => (
                        <div className="col-lg-2" key={idx}>
                        <div className={`single-demo ${location === menu.route ? 'active' : ''}`}>
                          <div className="demo-img">
                            <Link href={menu.route} className="inner-demo-img">
                              <ImageWithBasePath
                                src={menu.img}
                                className="img-fluid "
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="demo-info">
                            <Link href={menu.route} className="inner-demo-img">
                            {menu.menuValue}
                            </Link>
                          </div>
                        </div>
                      </div>
                       ))}
                      
                      
                    </div>
                  </div>
                </li>
              </ul>
                  </li>
                ) : (
                  <li
                    className={`has-submenu ${mainMenus?.menu?.some((item:any) => item?.route?.includes(location)) || basePath === mainMenus.base || basePath === mainMenus.base2 ? "active" : ""}`}
                  >
                    <Link  href="#" onClick={()=>toggleSidebar(mainMenus.tittle)}>
                      {mainMenus.tittle}{" "}
                      <i className={` ${basePath === 'instructor' || basePath === 'student' ? "isax isax-add" : "fas fa-chevron-down"}`}></i>
                    </Link>
                    <ul
                      className={`submenu ${subOpen === mainMenus.tittle ? "d-block" : ""}`}
                    >
                      {mainMenus.menu?.map((menu:any, menuIndex:any) => (
                        <React.Fragment key={`${mainIndex}-${menuIndex}`}>
                          {menu.hasSubRoute ? (
                            <li
                              key={`${mainIndex}-${menuIndex}`}
                              className={`${menu.hasSubRoute ? "has-submenu" : ""} ${menu?.subMenus?.some((item:any) => item?.route?.includes(location)) || basePath === menu.base ? "active" : ""}`}
                            >
                              <Link href="#" className={`hideonmob`} onClick={()=>{toggleSubsidebar(menu.menuValue)}}>{menu.menuValue}</Link>
                              <ul
                                className={`submenu showonmob ${subsidebar === menu.menuValue  ? "d-block" : ""}`}
                              >
                                {menu.subMenus?.map((subMenu:any, subMenuIndex:any) => (
                                  <React.Fragment key={`${mainIndex}-${menuIndex}-${subMenuIndex}`}>
                                  {subMenu.hasSubRoute ? 
                                    <li className={`${menu.hasSubRoute ? "has-submenu" : ""} ${subMenu?.subMenus?.some((item:any) => item?.route?.includes(location))  ? "active" : ""}`}>
                                    <Link href="#" onClick={()=>{toggleSubsidebar2(subMenu.menuValue)}}>{subMenu.menuValue}</Link>
                                    <ul className={`submenu ${subsidebar2 === subMenu.menuValue ? "d-block" : ""}`}>
                                    {subMenu.subMenus?.map((menu:any, menuIndex2:any) => (
                                      <li key={menuIndex2} className={location === menu.route ? 'active':''}><Link href={menu.route}>{menu.menuValue}</Link></li>
                                      ))}
                                    </ul>
                                  </li>
                                    : 
                                    <li className={location === subMenu.route ? 'active':''}  key={`${mainIndex}-${menuIndex}-${subMenuIndex}`}>
                                    <Link href={subMenu.route}>
                                      {subMenu.menuValue}
                                    </Link>
                                  </li>
                              }
                                 </React.Fragment>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li
                              key={`${mainIndex}-${menuIndex}`}
                              className={
                                location.includes(menu.route || "")
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href={menu.route}>{menu.menuValue}</Link>
                            </li>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  </li>
                )}
              </React.Fragment>
            ))}
           
          </ul>
        </div>
        {location === '/home' ?
          <div className="header-btn d-flex align-items-center">
          <div className="dropdown flag-dropdown icon-btn">
            <Link
              href="#"
              className="d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ImageWithBasePath src="/assets/img/flags/us-flag.svg" alt="flag" />
            </Link>
            <ul className="dropdown-menu p-2 mt-2">
              <li>
                <Link
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <ImageWithBasePath src="/assets/img/flags/us-flag.svg" className="me-2" alt="flag" />
                  ENG
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <ImageWithBasePath
                    src="/assets/img/flags/arab-flag.svg"
                    className="me-2"
                    alt="flag"
                  />
                  ARA
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <ImageWithBasePath
                    src="/assets/img/flags/france-flag.svg"
                    className="me-2"
                    alt="flag"
                  />
                  FRE
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown icon-btn">
            <Link
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="isax isax-dollar-circle4" />
            </Link>
            <ul className="dropdown-menu p-2 mt-2">
              <li>
                <Link className="dropdown-item rounded" href="#">
                  USD
                </Link>
              </li>
              <li>
                <Link className="dropdown-item rounded" href="#">
                  YEN
                </Link>
              </li>
              <li>
                <Link className="dropdown-item rounded" href="#">
                  EURO
                </Link>
              </li>
            </ul>
          </div>
          <DarkButton/>
          <div className="icon-btn">
            <Link href={all_routes.courseCart} className="position-relative">
              <i className="isax isax-shopping-cart5" />
              <span className="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">
                1
              </span>
            </Link>
          </div>
          <Link
            href={all_routes.login}
            className="btn btn-primary d-inline-flex align-items-center me-2"
          >
            Sign In
          </Link>
          <Link href={all_routes.register} className="btn btn-secondary me-0">
            Register
          </Link>
        </div>
        
          : location === '/home-3' ?
          <div className="header-btn d-flex align-items-center">
            <DarkButton/>
            <div className="dropdown flag-dropdown me-3">
              <Link
                href="#"
                className="dropdown-toggle d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <ImageWithBasePath src="/assets/img/flags/us-flag.svg" className="me-2" alt="flag" />
                ENG
              </Link>
              <ul className="dropdown-menu p-2 mt-2">
                <li>
                  <Link
                    className="dropdown-item rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath src="/assets/img/flags/us-flag.svg" className="me-2" alt="flag" />
                    ENG
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath
                      src="/assets/img/flags/arab-flag.svg"
                      className="me-2"
                      alt="flag"
                    />
                    ARA
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath
                      src="/assets/img/flags/france-flag.svg"
                      className="me-2"
                      alt="flag"
                    />
                    FRE
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown me-3">
              <Link
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                USD
              </Link>
              <ul className="dropdown-menu p-2 mt-2" style={{}}>
                <li>
                  <Link className="dropdown-item rounded" href="#">
                    USD
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item rounded" href="#">
                    YEN
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item rounded" href="#">
                    EURO
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href={all_routes.login}
              className="btn btn-primary d-inline-flex align-items-center me-2"
            >
              Sign In
            </Link>
            <Link href={all_routes.register} className="btn btn-secondary me-0">
              Register
            </Link>
          </div>

          : location === '/home-4' ?
          <div className="header-btn d-flex align-items-center">
          <DarkButton/>
          <div className="dropdown flag-dropdown me-3">
            <Link
              href="#"
              className="dropdown-toggle d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ImageWithBasePath src="/assets/img/flags/us-flag.svg" className="me-2" alt="flag" />
              ENG
            </Link>
            <ul className="dropdown-menu p-2 mt-2">
              <li>
                <Link
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <ImageWithBasePath src="/assets/img/flags/us-flag.svg" className="me-2" alt="flag" />
                  ENG
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <ImageWithBasePath
                    src="/assets/img/flags/arab-flag.svg"
                    className="me-2"
                    alt="flag"
                  />
                  ARA
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <ImageWithBasePath
                    src="/assets/img/flags/france-flag.svg"
                    className="me-2"
                    alt="flag"
                  />
                  FRE
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown me-3">
            <Link
              href="#"
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              USD
            </Link>
            <ul className="dropdown-menu p-2 mt-2">
              <li>
                <Link className="dropdown-item rounded" href="#">
                  USD
                </Link>
              </li>
              <li>
                <Link className="dropdown-item rounded" href="#">
                  YEN
                </Link>
              </li>
              <li>
                <Link className="dropdown-item rounded" href="#">
                  EURO
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href={all_routes.login}
            className="btn btn-primary d-inline-flex align-items-center me-2"
          >
            <i className="fa-solid fa-user me-2" />
            Sign In
          </Link>
          <Link href={all_routes.register} className="btn btn-secondary me-0">
            <i className="fa-solid fa-user me-2" />
            Register
          </Link>
        </div>
        
          : location === '/home-5' ?
          <div className="header-btn d-flex align-items-center">
            <div className="dropdown flag-dropdown icon-btn">
              <Link
                href="#"
                className="d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <ImageWithBasePath src="/assets/img/flags/us-flag.svg" alt="flag" />
              </Link>
              <ul className="dropdown-menu p-2 mt-2">
                <li>
                  <Link
                    className="dropdown-item rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath src="/assets/img/flags/us-flag.svg" className="me-2" alt="flag" />
                    ENG
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath
                      src="/assets/img/flags/arab-flag.svg"
                      className="me-2"
                      alt="flag"
                    />
                    ARA
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath
                      src="/assets/img/flags/france-flag.svg"
                      className="me-2"
                      alt="flag"
                    />
                    FRE
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown icon-btn">
              <Link
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="isax isax-dollar-circle4" />
              </Link>
              <ul className="dropdown-menu p-2 mt-2">
                <li>
                  <Link className="dropdown-item rounded" href="#">
                    USD
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item rounded" href="#">
                    YEN
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item rounded" href="#">
                    EURO
                  </Link>
                </li>
              </ul>
            </div>
            <DarkButton/>
            <div className="icon-btn me-3">
              <Link href={all_routes.courseCart} className="position-relative">
                <i className="isax isax-shopping-cart5" />
                <span className="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">
                  1
                </span>
              </Link>
            </div>
            <Link
              href={all_routes.login}
              className="btn btn-primary d-inline-flex align-items-center me-2"
            >
              <i className="isax isax-user me-2" />
              Sign In
            </Link>
            <Link href={all_routes.register} className="btn btn-secondary me-0">
              <i className="isax isax-user-edit me-2" />
              Register
            </Link>
          </div>

          : location === '/home-6' ?
          <div className="header-btn d-flex align-items-center">
            <div className="icon-btn me-2">
              <Link
                href="#"
                className="bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <ImageWithBasePath
                  className="rounded-pill"
                  src="/assets/img/flags/us-flag.svg"
                  alt="flag"
                />
              </Link>
              <ul className="dropdown-menu p-2 mt-2">
                <li className="mb-2">
                  <Link
                    className="dropdown-item w-100 rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath src="/assets/img/flags/us-flag.svg" className="me-2" alt="flag" />
                    ENG
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="dropdown-item w-100 rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath
                      src="/assets/img/flags/arab-flag.svg"
                      className="me-2"
                      alt="flag"
                    />
                    ARA
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item w-100 rounded d-flex align-items-center"
                    href="#"
                  >
                    <ImageWithBasePath
                      src="/assets/img/flags/france-flag.svg"
                      className="me-2"
                      alt="flag"
                    />
                    FRE
                  </Link>
                </li>
              </ul>
            </div>
            <div className="icon-btn me-2">
              <Link href="#" className="bg-white text-primary">
                <i className="isax isax-dollar-circle4" />
              </Link>
            </div>
            <DarkButton/>
            <div className="icon-btn me-3">
              <Link href="#" className="bg-white text-primary position-relative">
                <i className="isax isax-shopping-cart5" />
                <span className="count-icon bg-success p-2 rounded-pill text-white fs-10 fw-bold">
                  1
                </span>
              </Link>
            </div>
            <div>
              <Link
                href={all_routes.login}
                className="btn btn-primary d-inline-flex align-items-center me-2 px-3"
              >
                Sign In
              </Link>
            </div>
            <Link href={all_routes.register} className="btn btn-secondary me-0 px-3">
              Register
            </Link>
          </div>

          :  location.includes('instructor') ?
          <div className="header-btn d-flex align-items-center">
            <DarkButton/>
            <div className="icon-btn me-3">
              <Link href={all_routes.courseCart} className="position-relative">
                <i className="isax isax-shopping-cart5" />
                <span className="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">
                  1
                </span>
              </Link>
            </div>
            <div className="dropdown profile-dropdown">
              <Link
                href="#"
                className="d-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <span className="avatar">
                  <ImageWithBasePath
                    src="/assets/img/user/user-01.jpg"
                    alt="Img"
                    className="img-fluid rounded-circle"
                  />
                </span>
              </Link>
              <div className="dropdown-menu dropdown-menu-end">
                <div className="profile-header d-flex align-items-center">
                  <div className="avatar">
                    <ImageWithBasePath
                      src="/assets/img/user/user-01.jpg"
                      alt="Img"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div>
                    <h6>Eugene Andre</h6>
                    <p>instructerdemo@example.com</p>
                  </div>
                </div>
                <ul className="profile-body">
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center rounded fw-medium"
                      href={all_routes.instructorProfile}
                    >
                      <i className="isax isax-security-user me-2" />
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center rounded fw-medium"
                      href={all_routes.instructorCourse}
                    >
                      <i className="isax isax-teacher me-2" />
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center rounded fw-medium2"
                      href={all_routes.instructorEarning}
                    >
                      <i className="isax isax-dollar-circle me-2" />
                      Earnings
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center rounded fw-medium"
                      href={all_routes.instructorPayout}
                    >
                      <i className="isax isax-coin me-2" />
                      Payouts
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center rounded fw-medium"
                      href={all_routes.instructorMessage}
                    >
                      <i className="isax isax-messages-3 me-2" />
                      Messages<span className="message-count">2</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center rounded fw-medium"
                      href={all_routes.instructorsettings}
                    >
                      <i className="isax isax-setting-2 me-2" />
                      Settings
                    </Link>
                  </li>
                </ul>
                <div className="profile-footer">
                  <Link
                    className="dropdown-item d-inline-flex align-items-center rounded fw-medium"
                    href={all_routes.login}
                  >
                    <i className="isax isax-arrow-2 me-2" />
                    Log in as Student
                  </Link>
                  <Link
                    href={all_routes.homeone}
                    className="btn btn-secondary d-inline-flex align-items-center justify-content-center w-100"
                  >
                    <i className="isax isax-logout me-2" />
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>

          : location.includes('student') ?
          <div className="header-btn d-flex align-items-center">
            <DarkButton/>
            <div className="icon-btn me-3">
              <Link href={all_routes.courseCart} className="position-relative">
                <i className="isax isax-shopping-cart5" />
                <span className="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">
                  1
                </span>
              </Link>
            </div>
            <div className="dropdown profile-dropdown">
              <Link
                href="#"
                className="d-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <span className="avatar">
                  <ImageWithBasePath
                    src="/assets/img/user/user-02.jpg"
                    alt="Img"
                    className="img-fluid rounded-circle"
                  />
                </span>
              </Link>
              <div className="dropdown-menu dropdown-menu-end">
                <div className="profile-header d-flex align-items-center">
                  <div className="avatar">
                    <ImageWithBasePath
                      src="/assets/img/user/user-02.jpg"
                      alt="Img"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div>
                    <h6>Ronald Richard</h6>
                    <p>studentdemo@example.com</p>
                  </div>
                </div>
                <ul className="profile-body">
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center rounded fw-medium"
                      href={all_routes.studentProfile}
                    >
                      <i className="isax isax-security-user me-2" />
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center rounded fw-medium"
                      href={all_routes.studentQuiz}
                    >
                      <i className="isax isax-award me-2" />
                      Quiz Attempts
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center rounded fw-medium2"
                      href={all_routes.studentOrderHistory}
                    >
                      <i className="isax isax-shopping-cart me-2" />
                      Order History
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center rounded fw-medium"
                      href={all_routes.studentMessage}
                    >
                      <i className="isax isax-messages-3 me-2" />
                      Messages<span className="message-count">2</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-inline-flex align-items-center rounded fw-medium"
                      href={all_routes.studentSettings}
                    >
                      <i className="isax isax-setting-2 me-2" />
                      Settings
                    </Link>
                  </li>
                </ul>
                <div className="profile-footer">
                  <Link
                    className="dropdown-item d-inline-flex align-items-center rounded fw-medium"
                    href={all_routes.login}
                  >
                    <i className="isax isax-arrow-2 me-2" />
                    Log in as Instructor
                  </Link>
                  <Link
                    href={all_routes.homeone}
                    className="btn btn-secondary d-inline-flex align-items-center justify-content-center w-100"
                  >
                    <i className="isax isax-logout me-2" />
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>

          :
          <div className="header-btn d-flex align-items-center">
            {location === '/home-2' && 
            <>
          <div className="dropdown flag-dropdown icon-btn">
            <Link
              href="#"
              className="d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <ImageWithBasePath src="/assets/img/flags/us-flag.svg" alt="flag" />
            </Link>
            <ul className="dropdown-menu p-2 mt-2">
              <li>
                <Link
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <ImageWithBasePath src="/assets/img/flags/us-flag.svg" className="me-2" alt="flag" />
                  ENG
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <ImageWithBasePath
                    src="/assets/img/flags/arab-flag.svg"
                    className="me-2"
                    alt="flag"
                  />
                  ARA
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <ImageWithBasePath
                    src="/assets/img/flags/france-flag.svg"
                    className="me-2"
                    alt="flag"
                  />
                  FRE
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown icon-btn">
            <Link
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="isax isax-dollar-circle4" />
            </Link>
            <ul className="dropdown-menu p-2 mt-2">
              <li>
                <Link className="dropdown-item rounded" href="#">
                  USD
                </Link>
              </li>
              <li>
                <Link className="dropdown-item rounded" href="#">
                  YEN
                </Link>
              </li>
              <li>
                <Link className="dropdown-item rounded" href="#">
                  EURO
                </Link>
              </li>
            </ul>
          </div>
          </>
          }
          <DarkButton/>
          <div className="icon-btn me-3">
            <Link href={all_routes.courseCart} className="position-relative">
              <i className="isax isax-shopping-cart5" />
              <span className="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">
                1
              </span>
            </Link>
          </div>
          <Link
            href={all_routes.login}
            className="btn btn-light d-inline-flex align-items-center me-2"
          >
            <i className="isax isax-lock-circle me-2" />
            Sign In
          </Link>
          <Link href={all_routes.register} className="btn btn-secondary me-0">
            <i className="isax isax-user-edit me-2" />
            Register
          </Link>
        </div>

         }
        
      </div>
    </div>
  </header>
  {/* /Header */}
</>



  )
}

export default Header