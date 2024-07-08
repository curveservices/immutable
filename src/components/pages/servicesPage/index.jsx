import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faScrewdriverWrench,
  faUserAstronaut,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet, HelmetProvider } from "react-helmet-async";

import StaticCubes from "../../Animations/staticCubes";
import Button from "../../button";
import PriceCard from "../../cards/basicPrice";
import CallToAction from "../../CTA";
import img1 from "../../../assets/images/servicesImg.jpeg";
import "./index.scss";
import Card from "../../cards/work";
import Links from "../../links";

const Services = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [second, setSecond] = useState(false);
  const [thirdLt, setThirdLt] = useState(false);
  const [thirdRt, setThirdRt] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPrice = window.scrollY;
      const scrollSecond = window.scrollY;
      const scrollThird = window.scrollY;
      setSecond(scrollSecond > 150);
      setThirdLt(scrollThird > 600);
      setThirdRt(scrollThird > 600);
      setIsScrolled(scrollPrice > 1700);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="serivces-page">
        <section className="hero">
          <div className="hero-inner">
            <StaticCubes />
            <div className="text-box">
              <h1 className="title">
                Our Services will turn your ideas into amazing solutions
              </h1>
              <p className="fadeInUp">
                We offer a full range of website development, AI solutions,
                workflow automation and digital marketing services with flexible
                pricing.
              </p>
              <div className="btn-container">
                <Button text="start now" link="/contact" />
                <Button
                  text="book a call"
                  link="https://calendly.com/immutable-studio/website-consultancy"
                  target="_blank"
                />
              </div>
            </div>
            <Links
              webLink="web-development"
              aiLink="chat-bots"
              digitalLink="digital-marketing"
              packageLink="packages"
            />
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
            <div className={`${second ? "anim-second" : "second-none"}`}>
              <h1>
                Need a supportive full-service development agency for your
                business?
              </h1>
              <p>
                Drawing on our industry experience, we excel in providing
                comprehensive solutions tailored to your needs. Understanding
                your business, we offer expert advice to address design
                challenges effectively. Whether it's boosting brand visibility,
                creating a lead-generating website or building AI solutions
                &amp; automated workflows count on us to deliver outstanding
                results.
              </p>
            </div>
            <img
              src={img1}
              alt="computer screen"
              className={`${second ? "animSecondimg" : "second-none"}`}
            />
          </div>
        </section>
        <section className="third-section">
          <div className="third-inner">
            <h1 className="title">Why Choose Us?</h1>
            <div className="element-container">
              <NavLink to="/about">
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
              <NavLink to="chat-bots">
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
              <NavLink to="web-development">
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
              <NavLink to="web-development">
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
            <div className="text-box">
              <h1>Transparent Pricing</h1>
              <p>
                We believe in transparency and building strong relationships
                with our clients. We offer straightforward pricing &amp;
                understand the importance of budgeting. Packages can be expanded
                as your business grows.
              </p>
            </div>
            <h1 className="price-title">Our Starting Prices</h1>
            <div className={`${isScrolled ? "contentAnim" : "none"}`}>
              <PriceCard name="pricing" color="#fff"/>
            </div>
          </div>
        </section>
        <section className="fith-section">
          <div className="fith-inner">
            <h2>FEATURED WORK</h2>
            <Card />
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
            Services | Immutable Studio Web Development Agency
          </title>
          <meta
            name="keywords"
            content="solutions, Website, Website Design, Website Development, Web design, AI Solutions, Chatbot, workflows, automated, Business, London, Greenwich London"
          />
        </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Services;
