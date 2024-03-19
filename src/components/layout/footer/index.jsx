import { Link, NavLink } from "react-router-dom";
import Socials from "../../socials";
import "./index.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="foot-title">
        <h3>&#123; Immutable Studio &#125;</h3>
      </div>

      <div className="socials-container">
        <p>Follow Us!</p>
        <Socials />
        <p className="copy">Copyyright &copy; {year} Immutable Studio </p>
      </div>

      <div className="link-container">
        <div className="studio">
          <div>
            <p>Studio</p>
          </div>
          <ul className="site-links">
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
          <div>
            <p>Lead Dev</p>
          </div>
          <ul className="site-links">
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
          <div>
            <p>Experts in</p>
          </div>
          <ul>
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
