import Button from "../button";
import "./index.scss";

const Accordion = ({
  id,
  title,
  subtitle,
  content,
  link,
  isActive,
  onAccordionClick,
}) => {
  return (
    <div className="accordion-item" onClick={() => onAccordionClick(id)}>
      <div className="accordion-title">
        <h3>{title}</h3>
      </div>
      {isActive && (
        <div className="content-container">
          <div className="accordion-subtitle">{subtitle}</div>
          <p className="accordion-content">{content}</p>
          <div className="read-btn">
            <Button
              text={`more ${title}`}
              link={`services/${link}`}
              background="var(--primary)"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
