import Button from "../button";
import "./index.scss";

const CallToAction = () => {
  return (
    <>
      <div className="text-container">
        <h2 className="cta-title">Ready to get started?</h2>
        <p className="cta-p">
          Contact us to discuss your project, either a discovery call with us or
          download our website starter kit to get started.
        </p>
      </div>
      <div className="btn-container">
        <Button
          text="book a call"
          link="https://calendly.com/immutable-studio/website-consultancy"
          target="_blank"
          background="var(--primary)"
        />
        <Button text="contact us" link="/contact" background="var(--primary)" />
      </div>
    </>
  );
};

export default CallToAction;
