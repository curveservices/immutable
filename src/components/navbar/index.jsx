import { faEnvelope, faHome, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Outlet } from 'react-router-dom';
import './index.scss';

const Navbar = () => {
    return ( 
        <div className="page">
            <header>
                <nav>
                    <h1>Immutable Designs</h1>
                    <NavLink to='/'><FontAwesomeIcon icon={faHome} /></NavLink>
                    <NavLink to='about'><FontAwesomeIcon icon={faUser} /></NavLink>
                    <NavLink to='services'><FontAwesomeIcon icon={faToolbox} /></NavLink>
                    <NavLink to=''><FontAwesomeIcon icon={faEnvelope}/></NavLink>
                </nav>
            
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default Navbar;