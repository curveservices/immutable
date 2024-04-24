import { Link, NavLink } from "react-router-dom";
import Socials from "../../socials";
import "./index.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="foot-title">
        <div>&#123; Immutable Studio &#125;</div>
      </div>

      <div className="socials-container">
        <p>Follow Us</p>
        <Socials
          fblink="https://www.facebook.com/profile.php?id=61557552873479"
          lilink="https://www.linkedin.com/company/21439623"
          xlink="https://twitter.com/immutable_LDN" />
        <p className="copy"><Link to='privacy-policy'>Privacy Policy</Link></p>
        <p className="copy">Copyyright &copy; {year} Immutable Studio </p>
      </div>

      <div className="link-container">
        <div className="studio">
          <ul className="site-links">
            <li>
              <p>Studio</p>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="services">Services</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="lead">
          <ul className="site-links">
            <li>
              <p>Lead Dev</p>
            </li>
            <li>
              <Link
                to="https://dev-paul.netlify.app/"
                target="_blank"
                rel="norefer"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="https://dev-paul.netlify.app/about"
                rel="norefer"
                target="_blank"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="https://dev-paul.netlify.app/contact"
                rel="norefer"
                target="_blank"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="experts">
          <ul>
            <li>
              <p>Experts in</p>
            </li>
            <li>Hospitality</li>
            <li>Tutoring</li>
            <li>B 2 B</li>
            <li>Design</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
