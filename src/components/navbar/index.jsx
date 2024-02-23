import { faEnvelope, faHome, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect,useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
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
                <NavLink to='/'><FontAwesomeIcon icon={faHome} /></NavLink>
                <NavLink to='about'><FontAwesomeIcon icon={faUser} /></NavLink>
                <NavLink to='services'><FontAwesomeIcon icon={faToolbox} /></NavLink>
                <NavLink to='contact'><FontAwesomeIcon icon={faEnvelope}/></NavLink>
            </nav>
        </header>
     );
}
 
export default Navbar;