import Button from '../button';
import './index.scss';

const Accordion = ({id, title, subtitle, content, link, isActive, onAccordionClick}) => {   
    return ( 
        <div className="accordion-item">
            <div onClick={() => onAccordionClick(id)}>
                <div className="accordion-title">
                    <h3>{title}</h3>
                </div>
                {isActive &&
                    <div className='content-container'>
                    <h3 className='accordion-subtitle'>{subtitle}</h3>
                    <p className='accordion-content'>{content}</p>
                        <Button text='READ MORE' link={`sevices/${link}`} />
                    </div>
                }
            </div>
        </div>
     );
}
 
export default Accordion;