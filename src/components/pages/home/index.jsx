import React, { useEffect, useState  } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TypewriterComponent from "typewriter-effect";

import Button from "../../button/index";
import StaticCubes from "../../Animations/staticCubes";
import { accordionData } from "../../utils/accordionData";
import Accordion from "../../Accordion";
import CallToAction from "../../CTA";
import WorkCard from "../../cards/work";
import "./index.scss";

const Home = () => {
  const [second, setSecond] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState(0);

  useEffect(() => {
     const handleScroll = () => {
      const scrollP = window.scrollY;
      setSecond(scrollP > 350);
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
            <div className="text-box">
              <h1 className="main-title" >
                Empowering your Business with
              </h1>
            <div className="typewriter">
              <TypewriterComponent
              options={{
              strings: [
                "Website Design.",
                "Web Development.",
                "Chat Assistants.",
                "AI Solutions.",
                "Workflow Automation.",
                "Custom Built GPT's",
                "Digital Marketing.",
                ],
              wrapperClassName: 'Typewriter__wrapper',
              autoStart: true,
              loop: true,
            }}
            />
            </div>
            <div className="text">
               <p>
                Discover how we can transform your online presence. Our custom web
                development &amp; AI solutions, including bespoke AI chatbots,
                and automated workflows are designed to optimise efficiency,
                reduce costs, and enhance customer engagement.
              </p>
              <p>
                We are seasoned web developers &amp; Ai specialists who excel in
                creating professional custom websites and workflow solutions. Our
                team is dedicated to delivering cutting-edge technology tailored
                to help you achieve its goals.
              </p>

            </div>
             
              <div className="btn-container">
                <Button link="contact" text="CONTACT US" />
                <Button
                  link="https://calendly.com/immutable-studio/website-consultancy"
                  text="Book a call"
                  noreferer
                />
              </div>
          </div>
        </section>

        <section className="second-section">
          <div className="second-inner">
            <h2 className="title">SERVICES</h2>
            <p className={`text-box ${second ? "anim" : "none"}`}>
              Our services model operates with monthly payments covering hosting
              and maintenance, AI and automation solutions, and digital
              marketing. Service payments are customized based on your specific
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
            <h2 className="title">FEATURED WORK</h2>
            <div className="text-contanier">
              <div className="textBox">
                <p>
                  Signing off on a new website is always a moment of immense pride
                and satisfaction for us. With each project, we take great care
                to understand our clients' unique needs and deliver tailored
              solutions.
                </p>
              </div>
              <div className="textBox">
                <p>
                  As our client base continues to expand, we are excited to
                showcase the diverse and innovative work we do, particularly in
                creating cutting-edge websites and AI solutions.
                </p>
              </div>
              <div className="btn-container">
                <Button text="Our Latest Projects" link="featured-work" />
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
            <title>
              Home | Immutable Studio Web Development Agency
            </title>
            <meta
              name="keywords"
              content="Website, Website Design, Website Development, Web design, AI Solutions, Chatbot, Empowering, workflows, automated, Business, London, Greenwich London"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Home;
