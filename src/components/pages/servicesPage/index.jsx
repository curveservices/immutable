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
  faChartLine,
  faMobileScreenButton,
  faPeopleGroup,
  faScrewdriverWrench,
  faTrophy,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";

const Services = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPrice = window.scrollY;
      const scrollSecond = window.scrollY;
      setSecond(scrollSecond > 250);
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
                We will turn your ideas into amazing solutions
              </h1>
              <p>
                We offer a full suite of website development, design and
                programming services, AI website chat bots and social media
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
                  <h3>AI CHAT BOTS</h3>
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
                Need a supportive full-service design agency for your business?
              </h1>
              <p>
                Drawing on extensive industry experience, we excel in providing
                comprehensive solutions tailored to your needs. Understanding
                your business, we offer expert advice to address design
                challenges effectively. Whether it's boosting brand visibility
                or creating a lead-generating website, count on us to deliver
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
            <h1 className="title">Why Choose Us</h1>
            <div className="element-container">
              <div className="elem-card">
                <FontAwesomeIcon className="icon" icon={faPeopleGroup} />
                <p className="elem-title">Excellent Client Service</p>
                <p className="desc">
                  Customer service is more than a commitment, it's a guiding principle that shapes every aspect of
                  our interactions. From discovery to final
                  delivery, we prioritize understanding your unique
                  visions and objectives.
                </p>
              </div>
              <div className="elem-card">
                <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} />
                <p className="elem-title">Automated Solutions</p>
                <p className="desc">
                  We understand every business is unique.
                  We create custom automated workflows &amp; chatbot assisants,
                  to save your time with repetitive tasks powered by AI.
                  Collaborating with you to create seamless solutions that reflects &amp; maximizing
                  user engagement and conversions.
                </p>
              </div>
              <div className="elem-card">
                <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
                <p className="elem-title">Seamless User Experience</p>
                <p className="desc">
                  User experience is at the core of what we do. We meticulously
                  design user journeys, focusing on simplicity, clarity, and
                  ease of use. By providing a seamless browsing experience, we
                  keep visitors engaged and inspire them to take action.
                </p>
              </div>

              <div className="elem-card">
                <FontAwesomeIcon className="icon" icon={faMobileScreenButton} />
                <p className="elem-title">Mobile-First</p>
                <p className="desc">
                  In today's mobile-driven world, a responsive website is
                  essential for success. Our designs are optimized for all
                  devices, ensuring a flawless experience on smartphones,
                  tablets, and desktops. Your website will look stunning and
                  perform flawlessly across all platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="forth-section">
          <div className="forth-inner">
            <div className="text-box">
              <h1>Transparent Pricing</h1>
              <p>
                At Immutable Studio we believe in transparency and building
                strong relationships with our clients. That's why we offer
                straightforward pricing for our services. We understand the
                importance of budgeting, which is why we provide a breakdown of
                our pricing. All of our packages can be expanded as your
                business grows so that your site always fits your needs.
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
