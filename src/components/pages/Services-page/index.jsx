import { Link, NavLink } from 'react-router-dom';
import StaticCubes from '../../Animations/staticCubes';
import CallToAction from '../../CTA';
import './index.scss';


const Services = () => {
    return ( 
        <div className="serivces-page">
            <section className='hero'>
                <div className="hero-inner">
                    <div className="text-box">
                    <h1 className='title'>
                        We will turn your ideas into amazing solutions
                    </h1>
                        <p>We offer a full suite of website development,
                        design and programming services, flexible pricing and outstanding service.      
                        </p>
                    </div>
                    <div className="link-container" >
                        <div className='service-link'>
                            <NavLink to='web-development'>
                                <h3>WEB DEVELOPMENT</h3>
                            </NavLink>
                        </div>
                        <div className="service-link">
                            <NavLink to='design-service'>
                                <h3>DESIGN SERVICES</h3>
                            </NavLink>
                        </div>
                        <div className="service-link">
                            <NavLink to='packages'>
                                <h3>PACKAGES</h3>
                            </NavLink>
                        </div>
                        <div className="service-link">
                            <NavLink>
                                <h3>AI CHAT BOTS</h3>
                            </NavLink>
                        </div>
                        <div className="service-link">
                            <NavLink>
                                <h3>SOCIAL MEDIA MARKETING</h3>
                            </NavLink>
                        </div>
                    </div>
                    <StaticCubes/>
                </div>
            </section>
            <section className='second-section'>
                <div className="second-inner">
                    <h1>PRICING</h1>
                    <div className="pricing">
                        <div className="price-card">
                            <h2></h2>
                            <h3></h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="price-card">
                            <h2></h2>
                            <h3></h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="price-card">
                            <h2></h2>
                            <h3></h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="price-card">
                            <h2></h2>
                            <h3></h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
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