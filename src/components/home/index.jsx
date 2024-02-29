import Button from '../button/index'
import CubeSpinner from '../Animations/cubespinner';
import StaticCubes from '../Animations/staticCubes';
import { accordionData } from '../utils/accordionData';
import Accordion from '../utils/Accordion';
import { useState } from 'react';
import Symbols from '../Animations/symbols';
import Card from '../cards';
import './index.scss';


const Home = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);
   
    const handleAccordionClick = (accordionId) => {
        setActiveAccordion((prev) => (prev === accordionId ? prev : accordionId));
    };
    return ( 
        
        <div className='home-page'>
            <section className='hero'>
                <div className="left-hero">
                    <CubeSpinner />
                </div>
                <div className="right-hero">
                    <div className="text-box">
                        <h1 className='main-title'>Web Develoment Agency</h1>
                        <p>Immutable Studio is a leading web development agency comprising seasoned web designers,
                            UX/UI specialists, and web developers who excel in crafting bespoke business websites. Our team is dedicated to delivering cutting-edge technology
                            solutions tailored to help your company achieve its goals with utmost efficiency.
                        </p>
                    </div>
                    <Button link='contact' text='CONTACT US' />
                    <Symbols />
                </div>
            </section>
            
            <section className='second-section'>
                <h1 className='title'>SERVICES</h1>
                <StaticCubes />
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
              
            </section>
            <section className='third-section'>
                <h1 className='feature-title'>FEATURED WORK</h1>
                <Card />
                <div className="view-btn">
                    <Button text='view more' link='featured-work' />
                </div>
            </section>
            
            <section className='cta'>
                <div className="text-container">
                    <h2 className='cta-title'>Ready to get started?</h2>
                    <h3 className='cta-p'>Contact us to discuss your project, either a discovery call
                        with us or download our website starter kit to get started.
                    </h3>
                </div>
                <div className="btn-container">
                    <Button text='book a call' link=''/>
                    <Button text='download kit' link='' />
                </div>
            </section>
        </div>
     );
}
 
export default Home;