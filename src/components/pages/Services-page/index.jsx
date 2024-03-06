import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import StaticCubes from '../../Animations/staticCubes';
import PriceCard from '../../cards/price';
import CallToAction from '../../CTA';
import Featured from '../featured';
import './index.scss';


const Services = () => {
    const [isScrolled, setIsScrolled] = useState(false);
   
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
            setIsScrolled(scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    
    return ( 
        <div className="serivces-page">
            <section className='hero'>
                <div className="hero-inner">
                    <div className="text-box">
                    <h1 className='title'>
                        We will turn your ideas into amazing solutions
                    </h1>
                        <p>We offer a full suite of website development,
                            design and programming services, AI website chat bots and 
                            social media marketing packages with flexible pricing and outstanding service.      
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
                            <NavLink to="chat-bots">
                                <h3>AI CHAT BOTS</h3>
                            </NavLink>
                        </div>
                        <div className="service-link">
                            <NavLink to="social-media-marketing">
                                <h3>SOCIAL MEDIA MARKETING</h3>
                            </NavLink>
                        </div>
                    </div>
                    <StaticCubes/>
                </div>
            </section>
            <section className='second-section'>
                <div className="second-inner">
                    <div className="text-box">
                        <h1>STARTING PRICES</h1>
                        <p>Take a look at our starting prices for professional web development, AI chat bots and social media marketing,
                            for more options and pricing click to show more or contact us to start your project.
                        </p>
                    </div>
                    <div className={`${isScrolled ? 'contentAnim' : 'none'}`}>
                        <PriceCard/>
                    </div>
                </div>
            </section>
            <section className="third-section">
                <div className="third-inner">
                    <Featured/>
                </div>
            </section>
            <section className='cta'>
                <CallToAction />
            </section>
        </div>
     );
}
 
export default Services;