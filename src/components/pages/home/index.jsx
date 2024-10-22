import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TypewriterComponent from "typewriter-effect";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faScrewdriverWrench,
  faUserAstronaut,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import MarqueeComp from "../../marquee";
import Button from "../../button/index";
import StaticCubes from "../../Animations/staticCubes";
import { accordionData } from "../../utils/accordionData";
import Accordion from "../../Accordion";
import CallToAction from "../../CTA";
import LazyVideo from "../../LazyVideo";
import WorkCard from "../../cards/work";
import vid from "../../../assets/images/greenwich.mp4";
import fallback from "../../../assets/images/greenwich.png";
import web from '../../../assets/images/servicesImg.jpeg';
import "./index.scss";

const Home = () => {
  const [second, setSecond] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [thirdLt, setThirdLt] = useState(false);
  const [thirdRt, setThirdRt] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollP = window.scrollY;
      const scrollThird = window.scrollY;
      setSecond(scrollP > 100);
      setThirdLt(scrollThird > 1000);
      setThirdRt(scrollThird > 1000);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleAccordionClick = (accordionId) => {
    setActiveAccordion((prev) => (prev === accordionId ? prev : accordionId));
  };
  return (
    <>
      <div className="home-page">
        <section className="hero">
          <LazyVideo
            ariaLabel="Footage of the Royal College of Greenwich"
            src={vid}
            type="video/mp4"
            className="video"
            fallback={fallback}
            
          />
          <div className="text-box">
            <h1 className="main-title">Empowering your Business with</h1>
            <div className="typewriter">
              <TypewriterComponent
                options={{
                  strings: [
                    "Website Design.",
                    "Maintenance & SEO.",
                    "AI Chat Assistants.",
                    "Website Development.",
                    "AI Solutions.",
                  ],
                  wrapperClassName: "Typewriter__wrapper",
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 40, 
                }}
              />
            </div>
            <div className="text">
              <p> Discover how our website design &amp; development services can transform your online presence.
                Based in Greenwich, London, we specialise in custom website builds, SEO &amp; maintenance, hosting, and bespoke AI business solutions.
              </p>
               <div className="btn-container">
                <Button link="https://calendly.com/immutable-studio/website-consultancy" text="book a call" target="_blank"/>
                <Button link="discovery-form" text="discovery form" />
              </div>
            </div>
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner"> 
            <h2 className="title">OUR SERVICES</h2>
            <div className="text-box">
              <p>
                <hr />
                Our services model operates either monthly or annually covering full website development,
                hosting and maintenance, and AI business solutions.
                <hr />
                Service payments can be customised based on your specific
                needs and usage, ensuring flexibility and scalability.
                <hr />
                We provide comprehensive support, making it easy for your business to grow and adapt.
                <hr />
              </p>
              <img src={web} alt="two people working on a computer" className="serviceImg" />
            </div>
            <div className={`cubes ${second ? "anim" : "none"}`}>
              <StaticCubes />
            </div>
            <div className={`accordion ${second ? "anim" : "none"}`}>
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
            <div className="home-marquee">
              <MarqueeComp />
            </div>
          </div>
        </section>
        <section className="third-section">
          <div className="third-inner">
            <h2 className="title">WHY CHOOSE US?</h2>
            <div className="text-container">
              <p>
                We offer a full range of website design, SEO &amp; maintenance, AI chat assistants, and
                workflow automation services with flexible pricing. We also package up all of these services as a convenient business pack.
              </p>
            </div>
            <div className="element-container">
              <NavLink to="/portfolio" aria-label="link to about page">
                <div
                  className={`elem-card ${thirdLt ? "thirdLt" : "third-none"}`}
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </div>
                  <div className="copy">
                    <h3 className="elem-title">Excellent Client Service</h3>
                    <p className="desc">
                      Customer service is more than a commitment, it shapes
                      every aspect of our business. From discovery to final
                      delivery, we prioritise understanding your visions &amp;
                      goals.
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink to="services/chat-bots" aria-label="link to chat bots page">
                <div
                  className={`elem-card ${thirdRt ? "thirdRt" : "third-none"}`}
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                  </div>
                  <div className="copy">
                    <h3 className="elem-title">Automated AI Solutions</h3>
                    <p className="desc">
                      Every business is unique. We create custom automated
                      workflows &amp; AI solutions, tailored to your business
                      saving you time &amp; money with repetitive tasks powered
                      by AI.
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink to="services" aria-label="link to web development page">
                <div
                  className={`elem-card ${thirdLt ? "thirdLt" : "third-none"}`}
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserAstronaut} />
                  </div>
                  <div className="copy">
                    <h3 className="elem-title">Seamless User Experience</h3>
                    <p className="desc">
                      User experience is vital. We design user journeys focusing
                      on simplicity &amp; ease of use. By providing seamless
                      browsing, we engage visitors &amp; inspire them to take
                      action.
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink to="services/web-development" aria-label="link to web development page">
                <div
                  className={`elem-card ${thirdRt ? "thirdRt" : "third-none"}`}
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                  </div>
                  <div className="copy">
                    <h3 className="elem-title">Mobile-First Approach</h3>
                    <p className="desc">
                      It's a mobile-driven world &amp; a responsive website is
                      essential. Our designs are optimised for all devices,
                      ensuring a flawless experience on phones, tablets &amp;
                      desktops.
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </section>
        <section className="forth-section">
          <div className="forth-inner">
            <h2 className="title">FEATURED WORK</h2>
            <div className="text-container">
              <div className="textBox">
                <p>
                  Signing off on a new website is always a moment of
                  pride and satisfaction for us. With each project, we take
                  great care to understand our clients' unique needs and deliver
                  tailored solutions. Here are some of our featured projects.
                </p>
              </div>
              <div className="">
              <WorkCard />
            </div>
              <div className="textBox">
                <p>
                  As our client base continues to expand, we are excited to
                  showcase the diverse and innovative work we do. Each
                  project that we complete represents a commitment to
                  excellence and our passion for helping businesses thrive online.
                </p>
              </div>
              <div className="btn-container">
                <Button text="Portfolio" link="portfolio" />
                <Button text="Discovery Form" link="discovery-form"/>
              </div>
            </div>
          </div>
        </section>
        <section className="cta">
          <CallToAction />
        </section>
      </div>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>Web Design Agency | Web Design London | Immutable Studio</title>
            <meta
              name="description"
              content="Immutable Studio is a leading website development and website design agency. We build fast and responsive websites and create AI solutions for businesses."
            />
            <meta
              name="keywords"
              content="Website, Website Design, Website Development, Web design, AI Solutions, Chatbot, workflows, London, Greenwich"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Home;
