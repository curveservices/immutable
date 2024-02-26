import { faCss3Alt, faHtml5, faJsSquare, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const StaticCubes = () => {
    return ( 
        <div className="cube-container">
             <div className="cube1">
                <div className="side top"><FontAwesomeIcon icon={ faSass }/></div>
                <div className="left side"><FontAwesomeIcon icon={ faJsSquare }/></div>
            <div className="front side"><FontAwesomeIcon icon={ faReact }/></div>
        </div>
        <div className="cube2">
                <div className="top side"><FontAwesomeIcon icon={ faNodeJs}/></div>
                <div className="left side"><FontAwesomeIcon icon={ faCss3Alt } /></div>
                <div className="front side"><FontAwesomeIcon icon={ faHtml5 }/></div>
        </div>
        </div>

     );
}
 
export default StaticCubes;