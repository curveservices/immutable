import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TypewriterComponent from "typewriter-effect";

import Button from "../../button/index";
import StaticCubes from "../../Animations/staticCubes";
import { accordionData } from "../../utils/accordionData";
import Accordion from "../../Accordion";
import CallToAction from "../../CTA";
import WorkCard from "../../cards/work";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faScrewdriverWrench,
  faUserAstronaut,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import vid from "../../../assets/images/greenwich.mp4"
import vidwebm from "../../../assets/images/greenwich.webm"
import fallback from "../../../assets/images/greenwich.png"

const Home = () => {
  const [second, setSecond] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [thirdLt, setThirdLt] = useState(false);
  const [thirdRt, setThirdRt] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollP = window.scrollY;
      const scrollThird = window.scrollY;
      setSecond(scrollP > 350);
      setThirdLt(scrollThird > 800);
      setThirdRt(scrollThird > 800);
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
          <video className="video" src={vid} autoPlay loop aria-label="greenwich college">
            <source src={vid} type="video/mp4" />
            <source src={vidwebm} type="video/webm" />
            <img src={fallback} alt="Fallback image" />
          </video>
          <div className="text-box">
            <h1 className="main-title">Empowering your Business with</h1>
            <div className="typewriter">
              <TypewriterComponent
                options={{
                  strings: [
                    "Website Design.",
                    "Web Development.",
                    "Maintenance & Hosting",
                    "Chat Assistants.",
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
              <p>
                Discover how we can transform your online presence. Our custom
                web development &amp; AI solutions, including bespoke AI
                chatbots are designed to optimise efficiency, reduce costs, and enhance customer engagement.
              </p>
              <p>
                We are seasoned web developers &amp; Ai specialists
                creating professional custom websites and AI workflow
                solutions. Our team is dedicated to delivering cutting-edge
                technology tailored to help you achieve its goals.
              </p>
              <div className="btn-container">
              <Button link="contact" text="CONTACT US" />
              <Button link="discovery-form" text="discovery form" />
            </div>
            </div>
          </div>
        </section>

        <section className="second-section">
          <div className="second-inner">
            <h2 className="title">SERVICES</h2>
            <p className={`text-box ${second ? "" : "none"}`}>
              Our services model operates with monthly payments covering hosting
              and maintenance, AI and automation solutions, and digital
              marketing. Service payments are customised based on your specific
              needs and usage, ensuring flexibility and scalability. We aim to
              provide comprehensive support, making it easy for your business to
              grow and adapt in the ever-evolving digital landscape.
            </p>
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
          </div>
        </section>
        <section className="third-section">
          <div className="third-inner">
            <h2 className="title">WHY CHOOSE US?</h2>
            <div className="text-contanier">
              <p>
                We offer a full range of website development, AI solutions,
                workflow automation and digital marketing services with flexible
                pricing.
              </p>
            </div>
            <div className="element-container">
              <NavLink to="/about" aria-label="link to about page">
                <div
                  className={`elem-card ${thirdLt ? "thirdLt" : "third-none"}`}
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </div>
                  <div className="copy">
                    <p className="elem-title">Excellent Client Service</p>
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
                    <p className="elem-title">Automated AI Solutions</p>
                    <p className="desc">
                      Every business is unique. We create custom automated
                      workflows &amp; AI solutions, tailored to your business
                      saving you time &amp; money with repetitive tasks powered
                      by AI.
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink to="services/web-development" aria-label="link to web development page">
                <div
                  className={`elem-card ${thirdLt ? "thirdLt" : "third-none"}`}
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserAstronaut} />
                  </div>
                  <div className="copy">
                    <p className="elem-title">Seamless User Experience</p>
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
                    <p className="elem-title">Mobile-First Approach</p>
                    <p className="desc">
                      I's a mobile-driven world &amp; a responsive website is
                      essential. Our designs are optimized for all devices,
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
            <div className="text-contanier">
              <div className="textBox">
                <p>
                  Signing off on a new website is always a moment of immense
                  pride and satisfaction for us. With each project, we take
                  great care to understand our clients' unique needs and deliver
                  tailored solutions.
                </p>
              </div>
              <div className="textBox">
                <p>
                  As our client base continues to expand, we are excited to
                  showcase the diverse and innovative work we do, particularly
                  in creating cutting-edge websites and AI solutions. Each
                  project featured on this page represents our commitment to
                  excellence and our passion for helping businesses thrive in
                  the digital landscape.
                </p>
              </div>
              <div className="btn-container">
                <Button text="Featured Work" link="featured-work" />
                <Button text="Discovery Form" link="discovery-form"/>
              </div>
            </div>
            <div className="">
              <WorkCard />
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
            <title>Home | Immutable Studio Web Development Agency</title>
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
