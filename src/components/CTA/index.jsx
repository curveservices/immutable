import Button from "../button";
import paper from "../../assets/images/1746747.webp";
import "./index.scss";

const CallToAction = () => {
  return (
    <div
      className="cta"
      lazyloading="true"
      style={{
        backgroundImage: `url(${paper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
      </div>
    </div>
  );
};

export default CallToAction;
