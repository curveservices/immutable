import { faEnvelope, faHome, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import './index.scss';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 590);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return ( 
        <header className={isScrolled ? 'navbar-scroll' : ''}>
            <h1 className='logo'>&#123; Immutable Studio &#125;</h1>
            <nav>
                <NavLink
                    to='/'
                    className='home-link'
                    title='Home page'
                    activeclassname='active'
                    exact='true'
                >
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink
                    to='about'
                    title='About Us'
                    className='about-link'
                    activeclassname='active'
                    exact='true'
                >
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink
                    to='services'
                    title='Our Services'
                    className='services-link'
                    activeclassname='active'
                    exact='true'
                >
                    <FontAwesomeIcon icon={faToolbox} />
                </NavLink>
                <NavLink
                    to='contact'
                    title='Contact Us'
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