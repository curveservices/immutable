import { faBars, faClose, faEnvelope, faHouseChimney, faToolbox, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "../../breadcrumbs";
import logo from "../../../assets/images/id.png";
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={isScrolled ? "navbar-scroll" : ""}>
      {showNav ? "mobile-show" : " "}
      <NavLink to="/">
        <img src={logo} alt="Immutable studio logo" className="logo" />
        <h1 className="title">&#123; Immutable Studio &#125;</h1>
      </NavLink>
      <Breadcrumbs />
      <nav >
        <NavLink
          to="/"
          className="home-link"
          title="Home page"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHouseChimney} className="mobile-icon" />
          <div className="text">HOME</div>
        </NavLink>
        <NavLink
          to="services"
          title="Our Services"
          className="services-link"
          activeclassname="active"
          exact="true"
        >
          <FontAwesomeIcon icon={faToolbox} className="mobile-icon" />
          <div className="text">SERVICES</div>
        </NavLink>
        <NavLink
          to="about"
          title="About Us"
          className="about-link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} className="mobile-icon" />
          <div className="text">ABOUT</div>
        </NavLink>
        <NavLink
          to="contact"
          title="Contact Us"
          className="contact-link"
          activeclassname="active"
          exact="true"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} className="mobile-icon" />
          <div className="text">CONTACT</div>
        </NavLink>
        <FontAwesomeIcon
          icon={faClose}
          size="3x"
          className="close-icon"
          onClick={() => setShowNav(false)}
        />
      </nav>
      <FontAwesomeIcon
        icon={faBars}
        size="3x"
        className="hamburger"
        onClick={() => setShowNav(false)}
      />
    </header>
  );
};

export default Navbar;
