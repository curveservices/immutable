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
import Helmet from "react-helmet";

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
              <h1 className="main-title">
                Empowering your Business with Website &amp; AI Solutions
              </h1>
              <p>
                Discover how we can revolutionise your business. Our custom web
                development &amp; AI solutions, including bespoke AI chatbots,
                and automated workflows are designed to optimise efficiency,
                reduce costs, and enhance customer engagement.
              </p>
              <p>
                We are seasoned web developers &amp; Ai specialists who excel in
                creating custom business websites and workflow solutions. Our
                team is dedicated to delivering cutting-edge technology tailored
                to help your company achieve its goals.
              </p>

              <div className="btn-container">
                <Button link="contact" text="CONTACT US" />
                <Button
                  link="https://calendly.com/immutable-studio/website-consultancy"
                  text="Book a call"
                  noreferer
                />
              </div>
            </div>
          </div>
        </section>

        <section className="second-section">
          <div className="second-inner">
            <h2 className="title">SERVICES</h2>
            <p className="text-box">
              Our services model operates with monthly payments covering hosting
              and maintenance, AI and automation solutions, and digital
              marketing. Service payments are customized based on your specific
              needs and usage, ensuring flexibility and scalability. We aim to
              provide comprehensive support, making it easy for your business to
              grow and adapt in the ever-evolving digital landscape.
            </p>
            <div className="cubes">
              <StaticCubes />
            </div>
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
      <div>
        <Helmet>
          <title>
            Home - Immutable Studio: Web Development, AI &amp; Automation
            Solutions Agency
          </title>
          <meta
            name="keywords"
            content="Website, AI Solutions, Chatbot, Empowering, workflows, automated, Business"
          />
        </Helmet>
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  );
};

export default Home;
