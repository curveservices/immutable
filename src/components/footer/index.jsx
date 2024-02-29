import { Link, NavLink } from "react-router-dom";
import Socials from "../socials";
import "./index.scss";

const Footer = () => {
    const year = new Date().getFullYear();
    return ( 
        <footer>
            <div className="foot-title">
                <h3>&#123; Immutable Studio &#125;</h3>
            </div>
   
                <p className="copy">Copyyright &copy; {year} Immutable Studio </p>
        
           
            <div className="link-container">
                <div className="studio">
                    <div><b>Studio</b></div>
                    <ul className="site-links">
                        <li><NavLink to='/' />Home</li>
                        <li><NavLink to='/about' />About</li>
                        <li><NavLink  to='services'/>Services</li>
                        <li><NavLink to='contact' />Contact</li>
                    </ul>
                </div>
                <div className="lead">
                    <div><b>Lead Dev</b></div>
                    <ul className="site-links">
                        <li><Link to='https://dev-paul.netlify.app/' target='_blank' rel="norefer"/>Portfolio</li>
                        <li><Link to='https://dev-paul.netlify.app/about' rel="norefer" target='_blank' />About</li>
                        <li><Link to='https://dev-paul.netlify.app/contact' rel="norefer" target='_blank'/>Contact</li>
                    </ul>
                </div>
                <div className="experts">
                    <div><b>Experts in</b></div>
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
}
 
export default Footer;