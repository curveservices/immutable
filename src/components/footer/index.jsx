import { NavLink } from "react-router-dom";
import Socials from "../socials";
import "./index.scss";

const Footer = () => {
    const year = new Date().getFullYear();
    return ( 
        <footer>
            <h3>&#123; Immutable Studio &#125;</h3>
            <div className="link-container">
                <div className="studio">
                    <div>Studio</div>
                    <ul className="site-links">
                        <li><NavLink />Home</li>
                        <li><NavLink />About</li>
                        <li><NavLink />Services</li>
                        <li><NavLink />Contact</li>
                    </ul>
                </div>
                <div className="lead">
                    <div>Lead Dev</div>
                    <ul className="site-links">
                        <li><NavLink />Portfolio</li>
                        <li><NavLink />About</li>
                        <li><NavLink />Contact</li>
                    </ul>
                </div>
                <div className="experts">
                    <div>Experts in</div>
                    <ul>
                        <li>Hospitality</li>
                        <li>Tutoring</li>
                        <li>B 2 B</li>
                        <li>Design</li>
                    </ul>
                </div>
                <p>Copyyright &copy; {year} Immutable Studio </p>
            </div>
        </footer>
     );
}
 
export default Footer;