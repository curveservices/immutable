import { Link } from 'react-router-dom';
import './index.scss';

const Button = ({ text, link }) => {
    
    return ( 
        <button className="flat-btn">
            <Link to={link}>{text}</Link>
        </button>
     );
}
 
export default Button;