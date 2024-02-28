import Button from '../button/index'
import CubeSpinner from '../Animations/cubespinner';
import './index.scss';
import StaticCubes from '../Animations/staticCubes';
import { accordionData } from '../utils/accordionData';
import Accordion from '../utils/Accordion';
import { useState } from 'react';
import Symbols from '../Animations/symbols';
import Card from '../cards';


const Home = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const handleAccordionClick = (accordionId) => {
        setActiveAccordion((prev) => (prev === accordionId ? null : accordionId));
    }
    return ( 
        <div className='home-page'>
            <section className='right-hero'>
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
                <h1 className='service-title'>SERVICES</h1>
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
                <h1 className='feature-title'>FEATURED WORK</h1>
            </section>
        </div>
     );
}
 
export default Home;