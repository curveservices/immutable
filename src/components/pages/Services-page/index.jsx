import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import StaticCubes from "../../Animations/staticCubes";
import Symbols from "../../Animations/symbols";
import Button from "../../button";
import PriceCard from "../../cards/price";
import CallToAction from "../../CTA";
import Featured from "../featured";
import img1 from "../../../assets/images/service-1.jpeg";
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

const Services = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [whyScroll, setWhyScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollWhy = window.scrollY;
        setIsScrolled(scrollY > 2600);
        setWhyScroll(scrollWhy > 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="serivces-page">
      <section className="hero">
        <div className="hero-inner">
          <div className="text-box">
            <h1 className="title">
              We will turn your ideas into amazing solutions
            </h1>
            <p>
              We offer a full suite of website development, design and
              programming services, AI website chat bots and social media
              marketing packages with flexible pricing and outstanding service.
            </p>
            <Button text="start now" link="contact" />
          </div>

          <Symbols />
          <div className="link-container">
            <div className="service-link">
              <NavLink to="web-development">
                <h3>WEB DEVELOPMENT</h3>
              </NavLink>
            </div>
            <div className="service-link">
              <NavLink to="design-service">
                <h3>DESIGN SERVICES</h3>
              </NavLink>
            </div>
            <div className="service-link">
              <NavLink to="packages">
                <h3>PACKAGES</h3>
              </NavLink>
            </div>
            <div className="service-link">
              <NavLink to="chat-bots">
                <h3>AI CHAT BOTS</h3>
              </NavLink>
            </div>
            <div className="service-link">
              <NavLink to="social-media-marketing">
                <h3>SOCIAL MEDIA MARKETING</h3>
              </NavLink>
            </div>
          </div>
          <StaticCubes />
        </div>
      </section>
      <section className="second-section">
        <div className="second-inner">
          <div className="text-box">
            <h1>Transform your online presence with expert design solutions</h1>
            <p>
              Are you tired of your outdated website design that fails to
              captivate visitors and convert them into loyal customers?
              Immutable Studio specialise in creating visually stunning and
              highly functional websites that take your online presence to new
              heights. Our expert team of web designers combines creativity,
              technical expertise, and industry knowledge to deliver exceptional
              results that align perfectly with your business objectives.
            </p>
          </div>
          <img src={img1} alt="computer screen" className="img1" />
        </div>
      </section>
      <section className="third-section">
        <div className="third-inner">
          <h1 className="title">Why Choose &#123; IMMUTABLE STUDIO &#125;</h1>
                  <div className="element-container">
                      <div className="elem-card">
                          <FontAwesomeIcon className="icon" icon={faPeopleGroup} />
                          <p className="elem-title">Excellent Client Service</p>
                          <p>Customer service is more than a commitment at Immutable Studio, it's a guiding principle that shapes every aspect of our interactions.
                              From the initial consultation to the final delivery, we prioritize understanding our clients' unique visions and objectives.
                          </p>
                      </div>
            <div className="elem-card">
              <FontAwesomeIcon className="icon" icon={faTrophy} />
              <p className="elem-title">Unparalleled Design Excellence</p>
              <p>
                Our talented designers craft unique, captivating web experiences
                that leave a lasting impression on your target audience. We
                blend aesthetics with user-centric design principles, ensuring
                seamless navigation, intuitive interfaces, and eye-catching
                visuals.
              </p>
            </div>
              <div className="elem-card">
              <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} />
              <p className="elem-title">Customized Solutions</p>
              <p>
                We understand that every business is unique. Our web design
                services are tailored to your specific requirements, brand
                identity, and target audience. We collaborate closely with you
                to create a website that reflects your vision while maximizing
                user engagement and conversions.
              </p>
            </div>
            <div className="elem-card">
              <FontAwesomeIcon className="icon" icon={faUserAstronaut} />
              <p className="elem-title">Seamless User Experience</p>
              <p>
                User experience is at the core of what we do. We meticulously
                design user journeys, focusing on simplicity, clarity, and ease
                of use. By providing a seamless browsing experience, we keep
                visitors engaged and inspire them to take action.
              </p>
            </div>
          
              <div className="elem-card">
                <FontAwesomeIcon className="icon" icon={faMobileScreenButton} />
                <p className="elem-title">Mobile-First</p>
                <p>
                  In today's mobile-driven world, a responsive website is
                  essential for success. Our designs are optimized for all
                  devices, ensuring a flawless experience on smartphones,
                  tablets, and desktops. Your website will look stunning and
                  perform flawlessly across all platforms.
                </p>
              </div>
              <div className="elem-card">
                <FontAwesomeIcon className="icon" icon={faChartLine} />
                <p className="elem-title">Conversion-Oriented Design</p>
                <p>
                  We go beyond creating visually appealing websites. Our designs
                  are strategically crafted to drive conversions and achieve
                  your business goals. From intuitive call-to-actions to
                  persuasive content placement, we employ industry best
                  practices to boost your online performance.
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
                At Immutable Studio we believe in transparency and building strong relationships with our clients.
                That's why we offer straightforward pricing for our services. We understand the importance of budgeting, which is why we provide a breakdown of our pricing.
                All of our packages can be expanded as your business grows so that your site always fits your needs.
            </p>
          </div>
          <hr />
          <h1 className="price-title">Check out our starter packages</h1>
          <div className={`${isScrolled ? "contentAnim" : "none"}`}>
            <PriceCard />
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
  );
};

export default Services;
