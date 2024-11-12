import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "../../button";
import PriceCard from "../../cards/basicPrice";
import MarqueeComp from "../../marquee";
import CallToAction from "../../CTA";
import img1 from "../../../assets/images/homeService.webp";
import Links from "../../links";
import vid from "../../../assets/images/london.mp4";
import fallback from "../../../assets/images/london.webp";
import WorkCard from "../../cards/work";
import LazyVideo from "../../LazyVideo";
import "./index.scss";
import ExitIntentPopup from "../../exitIntentPopUp";
import HowitWorks from "../../howItWorks";
import webdev from "../../../assets/images/layout.gif";
import meeting from "../../../assets/images/online-meeting.gif";
import chatbot from "../../../assets/images/chat-bot.gif";
import design from "../../../assets/images/prototype.gif";

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
      <ExitIntentPopup/>
      <div className="serivces-page">
        <section className="hero">
          <LazyVideo
            src={vid}
            type="video/mp4"
            className="video"
            fallback={fallback}
          />
          <div className="hero-inner">
            <div className="text-box">
              <h1 className="title">Our Services</h1>
              <p>
                The services we provide will turn your ideas into amazing
                solutions.
              </p>
              <p>
                We offer a full range of website development, website
                maintenance, hosting and, AI solutions services with flexible
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
              maintenanceLink="seo-website-maintenance"
              packagesLink="packages"
            />
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
            <div
              className={`text-content ${
                second ? "anim" : "none"
              }`}
            >
              <h3 className="subtitle"><i>Our Services</i></h3>
              <HowitWorks
                title="How it works"
                mainP="We’re passionate about helping our clients brand stand out online. Customer service is more than a commitment, it shapes
                      every aspect of our business. From discovery to final delivery, we prioritise understanding your visions &amp; goals."
                card1Gif={meeting}
                card1Title="Discovery Call"
                card1P="Conducting a video call helps us to get to know each other. Discovery calls are important to help us understand
                          your projects needs."
                card2Gif={design}
                card2Title="Proposal and Design"
                  card2P="Once we fully understand your project a proposal is drawn up. We then start on design, we will create wireframe UI/UX designs
                          for approval."
                card3Gif={webdev}
                card3Title="Draft & Completion"
                  card3P="As soon as the design is approved development begins. A draft will hosted for you to approve. Once approved your 
                        project is ready for completion"
                card4Gif={chatbot}
                card4Title="Ongoing Support"
                  card4P="We offer ongoing support with hosting, website maintenance and SEO development. Our support gives you peace-of-mind, we'll be
                  on hand to help."
                text="Explore our Portfolio"
                link="/portfolio"
              />
              <Links
                webLink="web-development"
                aiLink="chat-bots"
                maintenanceLink="seo-website-maintenance"
                packagesLink="packages"
              />
              <div className="marquee">
                <MarqueeComp />
              </div>
            </div>
          </div>
        </section>
        <section className="third-section">
          <div className="third-inner">
            <div className="text-box">
              <h2>Transparent Pricing</h2>
              <p>
                We believe in transparency and building strong relationships
                with our clients. We offer straightforward pricing and
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
        <section className="forth-section">
          <div
            className="forth-inner"
          >
            <div className="subtitle">
              <h3><i>Our Portfolio</i></h3>
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
            <title>Services | Immutable Studio Web Development Agency</title>
            <meta
              name="keywords"
              content="Website design agency, Website Design, Website Development, Web design, AI Solutions, Chatbot, workflows, automated, Business, London, Greenwich London"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Services;
