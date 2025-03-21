import {
  faBars,
  faClose,
  faHouseChimney,
  faSuitcase,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "../../breadcrumbs";
import Button from "../../button";
import logo from "../../../assets/images/logo-desktop.webp";
import mobileLogo from "../../../assets/images/1-removebg-preview.webp";
import "./index.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = mobileLogo;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 125);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={isScrolled ? "navbar-scroll" : ""}>
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
        <nav className={showNav ? "mobile-show" : ""}>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'active' : ''}
            title="Home page"
            aria-label="home page"
            activeClassname="active"
            exact="true"
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faHouseChimney} className="mobile-icon" />
              <div className="text">HOME</div>
            </div>
          </NavLink>
          <NavLink
            to="services"
            title="Our Services"
            aria-label="Link to our services"
            className={({ isActive }) => isActive ? 'active' : ''}
            activeClassname="active"
            exact="true"
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faTools} className="mobile-icon" />
              <div className="text">SERVICES </div>
            </div>
          </NavLink>
          <NavLink
            to="portfolio"
            title="Portfolio"
            aria-label="Link to portfolio"
            className={({ isActive }) => isActive ? 'active' : ''}
            activeClassname="active"
            exact="true"
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faSuitcase} className="mobile-icon" />
              <div className="text">PORTFOLIO</div>
            </div>
          </NavLink>
          <NavLink
            to="about-us"
            title="About Us"
            aria-label="Link to about us page"
            className={({ isActive }) => isActive ? 'active' : ''}
            activeClassname="active"
            exact="true"
            onClick={() => setShowNav(false)}
          >
            <div className="menu-container">
              <FontAwesomeIcon icon={faUser} className="mobile-icon" />
              <div className="text">ABOUT</div>
            </div>
          </NavLink>
          <FontAwesomeIcon
            icon={faClose}
            size="2x"
            className="close-icon"
            onClick={() => setShowNav(false)}
          />
          <Button
            text="Contact Us"
            link="/contact"
            background="#fff"
            color="#000"
            boxShadow="none"
            onClick={() => setShowNav(false)}
          />
        </nav>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className="hamburger"
          onClick={() => setShowNav(true)}
        />
      </header>
    </>
  );
};

export default Navbar;
