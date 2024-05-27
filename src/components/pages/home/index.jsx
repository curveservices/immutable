import Button from "../../button/index";
import CubeSpinner from "../../Animations/cubespinner";
import StaticCubes from "../../Animations/staticCubes";
import { accordionData } from "../../utils/accordionData";
import Accordion from "../../Accordion";
import { useState } from "react";
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
  return (
    <>
      <div className="home-page">
       
        <section className="hero">
          <div className="left-hero">
            <CubeSpinner />
          </div>
          <div className="right-hero">
            <div className="text-box">
              <h1 className="main-title">Empowering your Business with Website &amp; AI solutions</h1>
              <p>
                Discover how we can revolutionise your business.
                Our custom web development &amp; AI solutions, including bespoke AI chatbots,
                automations &amp; workflows are designed to optimise efficiency, reduce costs,
                and enhance customer engagement.
                <p>
                  with seasoned web developers &amp; UX/UI specialists who
                  excel in crafting bespoke business websites and workflow solutions. Our team is dedicated
                  to delivering cutting-edge technology tailored to help
                  your company achieve its goals with utmost efficiency.
                </p>
              </p>

              <div className="btn-container">
                <Button link="contact" text="CONTACT US" />
                <Button link="https://calendly.com/immutable-studio/website-consultancy" text='Book a call' target='_blank' />
              </div>
            </div>
          </div>
        </section>

        <section className="second-section">
          <div className="second-inner">
            <h2 className="title">SERVICES</h2>
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
            {/* <Featured /> */}
          </div>
        </section>
        <section className="cta">
          <CallToAction />
        </section>
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
    
  );
};

export default Home;
