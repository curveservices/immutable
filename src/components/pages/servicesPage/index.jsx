import { useEffect, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import StaticCubes from "../../Animations/staticCubes";
import Button from "../../button";
import PriceCard from "../../cards/basicPrice";
import CallToAction from "../../CTA";
import Featured from "../../featured";
import img1 from "../../../assets/images/servicesImg.jpeg";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faPeopleGroup,
  faScrewdriverWrench,
  faUserAstronaut,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";

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
      setSecond(scrollSecond > 250);
      setThirdLt(scrollThird > 750);
      setThirdRt(scrollThird > 750);
      setIsScrolled(scrollPrice > 2100);
      
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="serivces-page">
        <section className="hero">
          <div className="hero-inner">
            <StaticCubes />
            <div className="text-box">
              <h1 className="title">
                We will turn your ideas into amazing <span className="black">solutions</span> 
              </h1>
              <p>
                We offer a full range of website development, AI solutions, workflow automation and digital
                marketing packages with flexible pricing and outstanding
                service.
              </p>
              <div className="btn-container">
                <Button text="start now" link="/contact" />
                <Button text="book a call" link="https://calendly.com/immutable-studio/website-consultancy" target="_blank" />
              </div>
            </div>
            <div className="link-container">
              <div className="service-link">
                <NavLink to="web-development">
                  <h3>WEB DEVELOPMENT</h3>
                </NavLink>
              </div>
              <div className="service-link">
                <NavLink to="chat-bots">
                  <h3>AI SOLUTIONS</h3>
                </NavLink>
              </div>
              <div className="service-link">
                <NavLink to="digital-marketing">
                  <h3>DIGITAL MARKETING</h3>
                </NavLink>
              </div>
              <div className="service-link">
                <NavLink to="packages">
                  <h3>PACKAGES</h3>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
            <div className={`${second ? "anim-second" : "second-none"}`}>
              <h1>
                Need a supportive full-service development agency for your business?
              </h1>
              <p>
                Drawing on extensive industry experience, we excel in providing
                comprehensive solutions tailored to your needs. Understanding
                your business, we offer expert advice to address design
                challenges effectively. Whether it's boosting brand visibility,
                creating a lead-generating website or building AI solutions &amp; automated workflows count on us to deliver
                outstanding results.
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
                <div className={`elem-card ${thirdLt ? "thirdLt" : "third-none"}`}>
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </div>
                  <div className="copy">
                    <p className="elem-title">Excellent Client Service</p>
                    <p className="desc">
                      Customer service is more than a commitment, it shapes every aspect of
                      our business. From discovery to final delivery, we prioritise understanding your
                      visions &amp; goals.
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink to="chat-bot">
                <div className={`elem-card ${thirdRt ? "thirdRt" : "third-none"}`}>
                  <div className="icon">
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                  </div>
                  <div className="copy">
                    <p className="elem-title">Automated AI Solutions</p>
                    <p className="desc">
                      Every business is unique.
                      We create custom automated workflows &amp; AI solutions, tailored to
                      your business saving you time &amp; money with repetitive tasks powered by AI.
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink to="web-development">
                <div className={`elem-card ${thirdLt ? "thirdLt" : "third-none"}`}>
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserAstronaut} />
                  </div>
                  <div className="copy">
                    <p className="elem-title">Seamless User Experience</p>
                    <p className="desc">
                      User experience is vital. We
                      design user journeys focusing on simplicity &amp;
                      ease of use. By providing seamless browsing, we
                      engage visitors &amp; inspire them to take action.
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink to="web-development">
                <div className={`elem-card ${thirdRt ? "thirdRt" : "third-none"}`}>
                  <div className="icon">
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                  </div>
                  <div className="copy">
                    <p className="elem-title">Mobile-First Approach</p>
                    <p className="desc">
                      In today's mobile-driven world, a responsive website is
                      essential. Our designs are optimized for all
                      devices, ensuring a flawless experience on smartphones,
                      tablets &amp; desktops.
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
                We believe in transparency and building
                strong relationships with our clients. We offer
                straightforward pricing &amp; understand the
                importance of budgeting. Packages can be expanded as your
                business grows.
              </p>
            </div>
            <h1 className="price-title">Check out our starting prices</h1>
            <div className={`${isScrolled ? "contentAnim" : "none"}`}>
              <PriceCard name="pricing" />
            </div>
          </div>
        </section>
        <section className="fith-section">
          <div className="fith-inner">
            <Featured />
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

export default Services;
