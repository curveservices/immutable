import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "../../breadcrumbs";
import "./index.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={isScrolled ? "navbar-scroll" : ""}>
      <h1 className="logo">&#123; Immutable Studio &#125;</h1>
      <Breadcrumbs />
      <nav>
        <NavLink
          to="/"
          className="home-link"
          title="Home page"
          activeclassname="active"
          exact="true"
        >
          HOME
        </NavLink>
        <NavLink
          to="about"
          title="About Us"
          className="about-link"
          activeclassname="active"
          exact="true"
        >
          ABOUT
        </NavLink>
        <NavLink
          to="services"
          title="Our Services"
          className="services-link"
          activeclassname="active"
          exact="true"
        >
          SERVICES 
        </NavLink>
        <NavLink
          to="contact"
          title="Contact Us"
          className="contact-link"
          activeclassname="active"
          exact="true"
        >
          CONTACT
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
