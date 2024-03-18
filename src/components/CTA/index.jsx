import Button from "../button";
import "./index.scss";

const CallToAction = () => {
  return (
    <>
      <div className="text-container">
        <h2 className="cta-title">Ready to get started?</h2>
        <h3 className="cta-p">
          Contact us to discuss your project, either a discovery call with us or
          download our website starter kit to get started.
        </h3>
      </div>
      <div className="btn-container">
        <Button text="book a call" link="" background="var(--primary)" />
        <Button text="contact us" link="" background="var(--primary)" />
      </div>
    </>
  );
};

export default CallToAction;
