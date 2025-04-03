import { Link, NavLink } from "react-router-dom";
import Socials from "../../components/socials";
import logo from "../../assets/images/logo-desktop.webp";
import "./index.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="foot-title">
          <div className="footer-container">
            <ul className="site-links">
              <li>
                <NavLink to="services">Services</NavLink>
              </li>
              <li>
                <NavLink to="portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <img
                    src={logo}
                    alt="Immutable Studio, Custom website design services in London"
                    className="footer-logo"
                    loading="lazy"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="about-us">About</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr className="div-line" />
        <div className="socials-container">
          <Socials
            fblink="https://www.facebook.com/profile.php?id=61557552873479"
            lilink="https://www.linkedin.com/company/21439623"
            instalink="https://www.instagram.com/immutable_studio/"
          />
          <div className="copy">
            <p>Copyright &copy; {year} Immutable Studio </p>
            <Link to="privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
