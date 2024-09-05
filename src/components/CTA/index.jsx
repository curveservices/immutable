import Button from "../button";
import "./index.scss";

const CallToAction = () => {
  return (
    <>
      <div className="text-container">
        <h2 className="cta-title">Ready to get started?</h2>
        <p className="cta-p">
          Contact us to discuss your project, book a discovery call with us or
          complete our online client discovery form to get started.
        </p>
      </div>
      <div className="btn-container">
        <Button
          text="book a call"
          link="https://calendly.com/immutable-studio/website-consultancy"
          target="_blank"
        />
        <Button text="Discovery Form" link="/discovery-form" />
        <Button text="contact us" link="/contact" />
      </div>
    </>
  );
};

export default CallToAction;
