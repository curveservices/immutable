import Button from '../../button';
import './index.scss';

const Accordion = ({id, title, subtitle, content, link, isActive, onAccordionClick}) => {   
    return ( 
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => onAccordionClick(id)}>
                <h3>{title}</h3>
                {isActive &&
                    <div className='content-container'>
                    <div className='accordion-subtitle'>{subtitle}</div>
                    <div className='accordion-content'>{content}</div>
                        <Button text='READ MORE' link={`sevices/${link}`} />
                    </div>
                }
            </div>
        </div>
     );
}
 
export default Accordion;