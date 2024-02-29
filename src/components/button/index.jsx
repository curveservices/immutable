import { Link } from 'react-router-dom';
import './index.scss';

const Button = ({ text, title, link }) => {
    
    return ( 
       
        <Link className='flat-btn' to={link} title={title}>{text}</Link>
       
     );
}
 
export default Button;