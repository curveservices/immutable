import {
  faBars,
  faClose,
  faEnvelope,
  faHouseChimney,
  faMoneyBill1Wave,
  faSuitcase,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "../../breadcrumbs";
import Button from "../../button";
import logo from "../../../assets/images/logo-desktop.png";
import "./index.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "navbar-scroll" : ""}>
      <NavLink to="/">
        <div className="title-container">
          <img src={logo} alt="Immutable studio logo" className="logo" />
        </div>
      </NavLink>
      <Breadcrumbs />
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          to="/"
          className="home-link"
          title="Home page"
          activeclassname="active"
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
          className="services-link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <div className="menu-container">
            <FontAwesomeIcon icon={faTools} className="mobile-icon" />
            <div className="text">SERVICES </div>
          </div>
        </NavLink>
        <NavLink
          to="featured-work"
          title="Featured Work"
          className="services-link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <div className="menu-container">
            <FontAwesomeIcon icon={faSuitcase} className="mobile-icon" />
            <div className="text">WORK</div>
          </div>
        </NavLink>
        <NavLink
          to="pricing"
          title="Pricing"
          className="services-link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <div className="menu-container">
            <FontAwesomeIcon icon={faMoneyBill1Wave} className="mobile-icon" />
            <div className="text">PRICING</div>
          </div>
        </NavLink>
        <NavLink
          to="about"
          title="About Us"
          className="about-link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <div className="menu-container">
            <FontAwesomeIcon icon={faUser} className="mobile-icon" />
            <div className="text">ABOUT</div>
          </div>
        </NavLink>
        <NavLink
          to="contact"
          title="Contact Us"
          className="contact-link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <div className="menu-container">
            <FontAwesomeIcon icon={faEnvelope} className="mobile-icon" />
            <div className="text">CONTACT</div>
          </div>
        </NavLink>
        <FontAwesomeIcon
          icon={faClose}
          size="2x"
          className="close-icon"
          onClick={() => setShowNav(false)}
        />
        <Button
          text="Book a Call"
          link="https://calendly.com/immutable-studio/website-consultancy?month=2024-05"
          target="_blank"
          background="#fff"
          color="#000"
          boxShadow="none"
        />
      </nav>
      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        className="hamburger"
        onClick={() => setShowNav(true)}
      />
    </header>
  );
};

export default Navbar;
