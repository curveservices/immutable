import {
    faHtml5,
    faNode,
    faReact,
    faGitAlt,
    faSass,
    faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'react-scroll/modules/components/Link';
import './index.scss';

const Home = () => {
    return ( 
        <div className='home-page'>
            <section className='right-hero'>
                <h1 className='main-title'>Web Develoment Agency</h1>
                <p>Immutable Studio is a leading web development agency comprising seasoned web designers,
                    UX/UI specialists, and web developers who excel in crafting bespoke business websites. Our team is dedicated to delivering cutting-edge technology
                    solutions tailored to help your company achieve its goals with utmost efficiency.
                </p>
                <div className="flat-btn">
                    <Link to='contact'>CONTACT US</Link>
                </div>
                <div className="letter-contianer">
                    <div className='brackets'>&#123; &#125;</div>
                    <div className='symbol1'>&lt; &gt;</div>
                    <div className='symbol2'>&lt;&#47;&gt;</div>
                </div>
                
            </section>
            
            <section className="stage-cube-cont">
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
            </section>
            
        </div>
     );
}
 
export default Home;