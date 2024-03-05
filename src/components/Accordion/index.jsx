import { useEffect, useState } from 'react';
import Button from '../button';
import './index.scss';

const Accordion = ({ id, title, subtitle, content, link, isActive, onAccordionClick }) => {  
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return ( 
        <div className="accordion-item">
            <div onClick={() => onAccordionClick(id)}>
                <div className="accordion-title">
                    <h3>{title}</h3>
                </div>
                {isActive &&
                    <div className={`content-container ${isScrolled ? 'contentAnim' : ''}`}>
                    <h2 className='accordion-subtitle'>{subtitle}</h2>
                        <p className='accordion-content'>{content}</p>
                        <Button text='READ MORE' link={`sevices/${link}`} />
                    </div>
                }
            </div>
        </div>
     );
}
 
export default Accordion;