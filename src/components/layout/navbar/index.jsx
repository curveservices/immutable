import {
  faArrowTurnDown,
  faBars,
  faClose,
  faEnvelope,
  faHouseChimney,
  faToolbox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "../../breadcrumbs";
import Button from "../../button";
import logo from "../../../assets/images/1-removebg-preview.png";
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
          <div className="title">&#123; Immutable Studio &#125;</div>
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
            <FontAwesomeIcon icon={faToolbox} className="mobile-icon" />
            <div className="dropdown">
              <div className="text">SERVICES <FontAwesomeIcon icon={faArrowTurnDown} className="desktop-icon"/>
              </div>
              <div className="dropdown-content">
                <NavLink
                  to="services/web-development"
                  title="Web Development"
                  className="services-link"
                  activeclassname='active'
                  exact="true"
                >WEB DEVELOPMENT
                </NavLink>

                <NavLink
                  to="services/chat-bots"
                  title="Chat bots"
                  className="services-link"
                  activeclassname='active'
                  exact="true"
                >AI SOLUTIONS
                </NavLink>

                <NavLink
                  to="services/digital-marketing"
                  title="Digital Marketing"
                  className="services-link"
                  activeclassname='active'
                  exact="true"
                >DIGITAL MARKETING
                </NavLink>

                <NavLink
                  to="services/packages"
                  title="Packages"
                  className="services-link"
                  activeclassname='active'
                  exact="true"
                >PACKAGES
                </NavLink>
              </div>
            </div>
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
          boxShadow="none" />
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
