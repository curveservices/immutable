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
import CallToAction from "../../CTA";
import LazyVideo from "../../LazyVideo";
import WorkCard from "../../cards/work";
import vid from "../../../assets/images/greenwich.mp4";
import fallback from "../../../assets/images/greenwich.webp";
import ExitIntentPopup from "../../exitIntentPopUp";
import webdev from "../../../assets/images/layout.gif";
import seo from "../../../assets/images/keywords.gif";
import chatbot from "../../../assets/images/chat-bot.gif";
import packing from "../../../assets/images/packing.gif";
import HowitWorks from "../../howItWorks";
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
      setSecond(scrollP > 250);
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
        <ExitIntentPopup/>
        <section className="hero">
          <LazyVideo
            ariaLabel="Footage of the Royal College of Greenwich"
            src={vid}
            type="video/mp4"
            className="video"
            fallback={fallback}
          />
          <div className="text-box">
            <h1 className="main-title">Empowering Business with</h1>
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
              <h2>
                Web design &amp; development that will
                transform your online presence.
              </h2>
              <div className="btn-container">
                <Button
                  link="https://calendly.com/immutable-studio/website-consultancy"
                  text="book a call"
                  target="_blank"
                />
                <Button link="discovery-form" text="discovery form" />
              </div>
            </div>
          </div>
        </section>
        <section className="second-section">
          <div
            className="second-inner"
          >
            <div className={`text-content ${second ? "anim" : "none"}`}>
              <h3 className="subtitle"><i>Our Services</i></h3>
              <HowitWorks
                title="what we do"
                mainP="We’re passionate about helping your brand stand out online. Whether it’s building custom websites, 
                developing AI assistants, SEO &amp; maintenance and other tech services. We’re here to bring your digital 
                ideas to life and make a real impact for your business. Let’s work together to create something amazing!"
              card1Gif={webdev}
              card1Title="Website Development"
              card1P=" We build responsive websites that look and feel amazing on all devices
                    – desktops, laptops and mobiles. Let us help you create the perfect website."
              card2Gif={seo}
              card2Title="SEO & Maintenance"
              card2P="We offer a range of maintenace plans, starting with a free SEO, performance and
                    facebook business page audit. We can manage your site with ease so you don't have to."
              card3Gif={chatbot}
              card3Title="AI Solutions"
              card3P="Our AI assistants are trained on your business and website pages. Answering FAQ's, taking bookings and more.
                    All seamlessly intergrated to your website and systems."
              card4Gif={packing}
              card4Title="Packages"
              card4P="Wrap all of our services up into convienent business packages.
                    We offer a range of website development, AI solutions, analytics and workflow automation."
                text="See all our services"
                link="services"
            />
            </div>
            <div className={`home-marquee ${second ? "anim" : "none"}`}>
              <MarqueeComp />
            </div>
          </div>
        </section>
        <section className="third-section">
          <div className="third-inner">
            <h2 className="title">WHY CHOOSE US?</h2>
            <div className="text-container">
              <p>
                We offer a full range of website design, SEO &amp; maintenance,
                AI chat assistants, and workflow automation services with
                flexible pricing. We also package up all of these services as a
                convenient business pack.
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
              <NavLink
                to="services/chat-bots"
                aria-label="link to chat bots page"
              >
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
              <NavLink
                to="services/web-development"
                aria-label="link to web development page"
              >
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
          <div
            className="forth-inner"
          >
            <div className="text-box">
              <h3 className="subtitle"><i>Our Portfolio</i></h3>
            </div>
            <WorkCard />
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
              Web Design Agency | Web Design London | Immutable Studio
            </title>
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
