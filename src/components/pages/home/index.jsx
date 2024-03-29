import Button from "../../button/index";
import CubeSpinner from "../../Animations/cubespinner";
import StaticCubes from "../../Animations/staticCubes";
import { accordionData } from "../../utils/accordionData";
import Accordion from "../../Accordion";
import { useLayoutEffect, useState } from "react";
import Featured from "../../featured";
import CallToAction from "../../CTA";
import React from "react";
import Loader from "react-loaders";
import "./index.scss";

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const handleAccordionClick = (accordionId) => {
    setActiveAccordion((prev) => (prev === accordionId ? prev : accordionId));
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Loader type="ball-spin-fade-loader" />
      <section className="hero">
        <div className="left-hero">
          <CubeSpinner />
        </div>
        <div className="right-hero">
          <div className="text-box">
            <h1 className="main-title">Web Develoment & AI Solutions Agency</h1>
            <p>
              Immutable Studio is a leading web development agency comprising
              seasoned web designers, UX/UI specialists, and web developers who
              excel in crafting bespoke business websites. Our team is dedicated
              to delivering cutting-edge technology solutions tailored to help
              your company achieve its goals with utmost efficiency.
            </p>
            <Button link="contact" text="CONTACT US" />
          </div>
        </div>
      </section>

      <section className="second-section">
        <div className="second-inner">
          <h1 className="title">SERVICES</h1>
          <StaticCubes />
          <div className="accordion">
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
      <section className="third-section">
        <div className="third-inner">
          <Featured />
        </div>
      </section>
      <section className="cta">
        <CallToAction />
      </section>
    </div>
  );
};

export default Home;
