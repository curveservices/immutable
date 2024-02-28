import Button from '../button/index'
import CubeSpinner from '../Animations/cubespinner';
import StaticCubes from '../Animations/staticCubes';
import { accordionData } from '../utils/accordionData';
import Accordion from '../utils/Accordion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Symbols from '../Animations/symbols';
import Card from '../cards';
import './index.scss';
import Socials from '../socials';


const Home = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const handleAccordionClick = (accordionId) => {
        setActiveAccordion((prev) => (prev === accordionId ? null : accordionId));
    }

    const year = new Date().getFullYear();

    return ( 
        <div className='home-page'>
            <section className='hero'>
                <div className="text-box">
                    <h1 className='main-title'>Web Develoment Agency</h1>
                    <p>Immutable Studio is a leading web development agency comprising seasoned web designers,
                        UX/UI specialists, and web developers who excel in crafting bespoke business websites. Our team is dedicated to delivering cutting-edge technology
                        solutions tailored to help your company achieve its goals with utmost efficiency.
                    </p>
                    <Button link='contact' text='CONTACT US' />
                    <Symbols />
                </div>
            </section>
             <div className="left-hero">
                    <CubeSpinner />
                </div>
            <section className='second-section'>
                <h1 className='title'>SERVICES</h1>
                <div className="service-container">
                    <div className="accordion" >
                        {accordionData.map(({ title, subtitle, content, id, link }) => (
                            <Accordion
                                key={id}
                                id={id}
                                link={link}
                                title={title}
                                subtitle={subtitle}
                                content={content}
                                isActive={id === activeAccordion}
                                onAccordionClick={handleAccordionClick}
                            />
                        ))}
                   </div>
                </div>
                <StaticCubes />
            </section>
            <section className='third-section'>
                <h1 className='title feature-title'>FEATURED WORK</h1>
                <Card />
                <div className="btn-container">
                    <Button text='view more' link='' />
                </div>
            </section>
            <section className='cta'>
                <h2>Ready to get started?</h2>
                <h3>Contact us to discuss your project, either a discovery call 
                    with us or download our website starter kit to get started.
                </h3>
                <div className="btn-container">
                    <Button text='book a call' link=''/>
                    <Button text='click to download' link='' />
                </div>
            </section>
            <footer>
                <h3>&#123; Immutable Studio &#125;</h3>
                <div className="link-container">
                    <div className="studio">
                        <div>Studio</div>
                        <ul className="site-links">
                            <li><NavLink />Home</li>
                            <li><NavLink />About</li>
                            <li><NavLink />Services</li>
                            <li><NavLink />Contact</li>
                        </ul>
                    </div>
                    <div className="lead">
                        <div>Lead Dev</div>
                        <ul className="site-links">
                            <li><NavLink />Portfolio</li>
                            <li><NavLink />About</li>
                            <li><NavLink />Contact</li>
                        </ul>
                    </div>
                    <div className="experts">
                        <div>Experts in</div>
                        <ul>
                            <li>Hospitality</li>
                            <li>Tutoring</li>
                            <li>B 2 B</li>
                            <li>Design</li>
                        </ul>
                    </div>
                    <div className="social-container">
                        <p>Follow us</p>
                        <Socials />
                    </div>
                    <p>Copyyright &copy; {year} Immutable Studio </p>
                </div>
            </footer>
        </div>
     );
}
 
export default Home;