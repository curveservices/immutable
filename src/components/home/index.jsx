import {
    faHtml5,
    faNode,
    faReact,
    faGitAlt,
    faSass,
    faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const Home = () => {
    return ( 
        <div className='home-page'>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5}/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3Alt}/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faNode} />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGitAlt} />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faSass}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;