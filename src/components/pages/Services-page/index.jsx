import { Link } from 'react-router-dom';
import StaticCubes from '../../Animations/staticCubes';
import CallToAction from '../../CTA';
import './index.scss';

const Services = () => {
    return ( 
        <div className="serivces-page">
            <section className='hero'>
                <div className="hero-inner">
                    <Symbol />
                    <h1 className='title'>
                        We will turn your ideas into amazing solutions
                    </h1>
                    
                    <Link className="packages" >
                        Packages
                    </Link>
                    <Link className="web-dev">

                    </Link>
                    <Link className="web-deesign">

                    </Link>
                    <Link className="social-media">

                    </Link>
                    <StaticCubes/>
                </div>
            </section>
            <section className='second-section'>
                <div className="services-inner">
                    <div className="pricing" id='packages'>

                    </div>
                </div>
            </section>
            <section className='cta'>
                <CallToAction />
            </section>
        </div>
     );
}
 
export default Services;