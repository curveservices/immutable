import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import StaticCubes from "../../Animations/staticCubes";
import Button from "../../button";
import PriceCard from "../../cards/basicPrice";
import CallToAction from "../../CTA";
import img1 from "../../../assets/images/servicesImg.jpeg";
import Links from "../../links";
import vid from "../../../assets/images/london.mp4";
import london from "../../../assets/images/london.png";
import WorkCard from "../../cards/work";
import LazyVideo from "../../LazyVideo";
import "./index.scss";

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
           <LazyVideo
            src={vid}
            type="video/mp4"
            className="video"
            fallback={london}
          />
          <div className="hero-inner">
            <StaticCubes />
            <div className="text-box">
              <h1 className="title">Our Services</h1>
              <p>
                The services we provide will turn your ideas into amazing
                solutions
              </p>
              <p>
                We offer a full range of website development, AI solutions,
                workflow automation and digital marketing services with flexible
                pricing.
              </p>
              <div className="btn-container">
                <Button text="Discovery form" link="/discovery-form" />
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
              packagesLink="packages"
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
              <PriceCard name="pricing" color="#fff" />
            </div>
          </div>
        </section>
        <section className="fith-section">
          <div className="fith-inner">
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
                <Button text="Portfolio" link="/portfolio" />
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
            <title>Services | Immutable Studio Web Development Agency</title>
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
