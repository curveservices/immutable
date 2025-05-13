import {
  faHouseChimney,
  faPersonCircleQuestion,
  faSuitcase,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import Button from "../../components/button";
import logo from "../../assets/images/logo-desktop.webp";
import mobileLogo from "../../assets/images/1-removebg-preview.webp";
import MenuToggle from "../../components/menuToggle"
import "./index.scss";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = mobileLogo;
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 125);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
        title="Home page"
        aria-label="home page"
        exact="true"
        onClick={() => setShowNav(false)}
      >
        <div className="menu-container">
          <FontAwesomeIcon icon={faHouseChimney} className="mobile-icon" />
          <div className="text">Home</div>
        </div>
      </NavLink>
      <NavLink
        to="services"
        title="Our Services"
        aria-label="Link to our services"
        className={({ isActive }) => (isActive ? "active" : "")}
        exact="true"
        onClick={() => setShowNav(false)}
      >
        <div className="menu-container">
          <FontAwesomeIcon icon={faTools} className="mobile-icon" />
          <div className="text">Services</div>
        </div>
      </NavLink>
      <NavLink
        to="portfolio"
        title="Portfolio"
        aria-label="Link to portfolio"
        className={({ isActive }) => (isActive ? "active" : "")}
        exact="true"
        onClick={() => setShowNav(false)}
      >
        <div className="menu-container">
          <FontAwesomeIcon icon={faSuitcase} className="mobile-icon" />
          <div className="text">Portfolio</div>
        </div>
      </NavLink>
      {/* <NavLink
        to="frequently-asked-questions"
        title="FAQs"
        aria-label="Link to FAQs page"
        className={({ isActive }) => (isActive ? "active" : "")}
        exact="true"
        onClick={() => setShowNav(false)}
      >
        <div className="menu-container">
          <FontAwesomeIcon
            icon={faPersonCircleQuestion}
            className="mobile-icon"
          />
          <div className="text">FAQs</div>
        </div>
      </NavLink> */}
      <NavLink
        to="about-us"
        title="About Us"
        aria-label="Link to about us page"
        className={({ isActive }) => (isActive ? "active" : "")}
        exact="true"
        onClick={() => setShowNav(false)}
      >
        <div className="menu-container">
          <FontAwesomeIcon icon={faUser} className="mobile-icon" />
          <div className="text">About</div>
        </div>
      </NavLink>
      <Button
        text="Contact Us"
        link="/contact"
        background="#fff"
        color="#000"
        boxShadow="none"
        onClick={() => setShowNav(false)}
      />
    </>
  );

  return (
    <>
      <header
        className={`${isScrolled ? "navbar-scroll" : ""} ${showNav ? "menu-open" : ""}`}
      >
        <NavLink to="/" aria-label="home page">
          <div className="title-container">
            <img
              src={mobileLogo}
              alt="Immutable Studio, Custom website design services in London."
              className="mobile-logo"
              loading="lazy"
            />
            <img
              src={logo}
              alt="Immutable studio, Custom website design services in London"
              className="logo"
              loading="lazy"
            />
          </div>
        </NavLink>
        <Breadcrumbs className={isScrolled ? "navbar-scroll" : ""} />
        {hasMounted &&
          (isMobile ? (
            <AnimatePresence>
              {showNav && (
                <motion.nav
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="mobile-show"
                >
                  {links}
                </motion.nav>
              )}
            </AnimatePresence>
          ) : (
            <nav>{links}</nav>
          ))}
        <MenuToggle showNav={showNav} setShowNav={setShowNav}/>
      </header>
    </>
  );
};

export default Navbar;
