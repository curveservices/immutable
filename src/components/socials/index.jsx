import { faFacebook, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './index.scss';

const Socials = () => {
    return ( 
        <div className="container">
            <p>Follow Us!</p>
            <ul className="iconList">
                <li className="icons">
                    <a href='' target='_blank' rel='noreferer'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li className="icons">
                    <Link to='' target='_blank' rel='noreferer'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </li>
                <li className="icons">
                    <Link to='' target='_blank' rel='noreferer'>
                        <FontAwesomeIcon icon={faSquareXTwitter} />
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Socials;