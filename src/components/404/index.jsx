import { Link } from 'react-router-dom';
import './index.scss';
import notFound from '../../assets/images/404.png';

const NotFound = () => {
    return ( 
        <div className="container">
            <h1>PAGE NOT FOUND</h1>
            <Link to='/' className='flat-btn'>GO BACK</Link>
            <img src={notFound} alt="page not found"/>
        </div>
     );
}
 
export default NotFound;