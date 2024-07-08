import { useEffect, useState } from "react";
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
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPrice = window.scrollY;
      const scrollSecond = window.scrollY;
      setSecond(scrollSecond > 150);
      setIsScrolled(scrollPrice > 950);
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
                <Button text="Contact us" link="/contact" />
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
            <h2 className="price-title">Our Starting Prices</h2>
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
