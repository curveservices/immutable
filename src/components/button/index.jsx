import { Link } from 'react-router-dom';
import './index.scss';

const Button = ({ text, title, link }) => {
    
    return ( 
        <button className="flat-btn">
            <Link to={link} title={title}>{text}</Link>
        </button>
     );
}
 
export default Button;