import { Link, NavLink } from "react-router-dom";
import Socials from "../../socials";
import logo from "../../../assets/images/logo-desktop.webp";
import { Helmet } from "react-helmet";
// import hat from "../../../assets/images/santa-hat.png"
import "./index.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <Helmet>
      <link
        rel="preload"
        as="image"
        href={logo}
        type="image/webp"
      />
    </Helmet>
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
                {/* <img src={hat} alt="santa hat" style={{position: "absolute",top: "-4px", transform: "scaleX(-1)", right: "47rem"}}/> */}
                <img src={logo} alt="logo" className="footer-logo" />
              </NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
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
