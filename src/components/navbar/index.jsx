import { faEnvelope, faHome, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import { useRef } from 'react';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const el = useRef();

    useEffect(() => {
        if (el.current) {
            const handleScroll = (e) => {
                window.scrollY > 20 ? setScrolling(true) : setScrolling(false)
            };
            el.current.addEventListener("scroll", handleScroll);
            return () => {
                el.current.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    return ( 
        <header>
            <h1 className='logo'>Immutable Designs</h1>
            <nav className={scrolling ? 'navbar-scroll' : ''} ref={el}>
                <NavLink
                    to='/'
                    className='home-link'
                    activeclassname='active'
                    exact='true'
                >
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink
                    to='about'
                    className='about-link'
                    activeclassname='active'
                    exact='true'
                >
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink
                    to='services'
                    className='services-link'
                    activeclassname='active'
                    exact='true'
                >
                    <FontAwesomeIcon icon={faToolbox} />
                </NavLink>
                <NavLink
                    to='contact'
                    className='contact-link'
                    activeclassname='active'
                    exact='true'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
            </nav>
        </header>
     );
}
 
export default Navbar;