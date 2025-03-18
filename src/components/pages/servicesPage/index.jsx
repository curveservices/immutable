import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "../../button";
import PriceCard from "../../cards/basicPrice";
import MarqueeComp from "../../marquee";
import CallToAction from "../../CTA";
import Links from "../../links";
import vid from "../../../assets/images/london.mp4";
import fallback from "../../../assets/images/london.webp";
import WorkCard from "../../cards/work";
import LazyVideo from "../../LazyVideo";
import HowitWorks from "../../howItWorks";
import webdev from "../../../assets/images/layout.mp4";
import meeting from "../../../assets/images/online-meeting.mp4";
import chatbot from "../../../assets/images/chat-bot.mp4";
import design from "../../../assets/images/prototype.mp4";

const Services = () => {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);
  const [fith, setFith] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollSecond = window.scrollY;
      const scrollThird = window.scrollY;
      const scrollForth = window.scrollY;
      const scrollFith = window.scrollY;
      setSecond(scrollSecond > 150);
      setThird(scrollThird > 1500);
      setForth(scrollForth > 2500);
      setFith(scrollFith > 3300);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    import("./index.scss").catch((error) => {
      console.error("error loading css", error);
    });
    return () => {
      const styleSheets = Array.from(document.styleSheets);
      const homeStyleSheet = styleSheets.find(
        (sheet) => sheet.href && sheet.href.includes("index.scss"),
      );
      if (homeStyleSheet) {
        document.head.removeChild(homeStyleSheet.ownerNode);
      }
    };
  }, []);
  return (
    <>
      <div className="serivces-page">
        <section className="hero">
          <LazyVideo
            src={vid}
            type="video/mp4"
            className="video"
            fallback={fallback}
            alt="Video of London's Tower Bridge"
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
              aiLink="ai-assistants"
              maintenanceLink="seo-website-maintenance"
              packagesLink="packages"
            />
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
            <div className="subtitle">
              <i>Our Services</i>
            </div>
            <div className={`text-content ${second ? "anim" : "none"}`}>
              <HowitWorks
                title="How it works"
                mainP="We’re passionate about helping our clients brand stand out online. Customer service is more than a commitment, it shapes
                      every aspect of our business. From discovery to final delivery, we prioritise understanding your visions &amp; goals."
                card1Gif={meeting}
                card1Title="Onboarding"
                card1P="Conducting a video call helps us to get to know each other. Discovery calls are important to help us understand
                          your projects needs."
                link1="https://calendly.com/immutable-studio/website-consultancy"
                text1="book a call"
                card2Gif={design}
                card2Title="Proposal and Design"
                card2P="Once we fully understand your project a proposal is drawn up. We then start on design, we will create wireframe UI/UX designs
                          for approval."
                link2="/portfolio"
                text2="our clients"
                card3Gif={webdev}
                card3Title="Draft & Completion"
                card3P="As soon as the design is approved development begins. A draft will hosted for you to approve. Once approved your 
                        project is ready for completion"
                link3="/contact"
                text3="contact us"
                card4Gif={chatbot}
                card4Title="Ongoing Support"
                card4P="We offer ongoing support with hosting, website maintenance and SEO development. Our support gives you peace-of-mind, we'll be
                  on hand to help."
                link4="seo-website-maintenance"
                text4="maintenance & SEO"
                text="Explore our Portfolio"
                link="/portfolio"
              />
              <Links
                webLink="web-development"
                aiLink="ai-assistants"
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
            <div className="subtitle">
              <i>Our Pricing</i>
            </div>
            <div className={`${third ? "anim" : "none"}`}>
              <h2 className="price-title">OUR STARTING PRICES</h2>
              <PriceCard name="pricing" color="#fff" link="/discovery-form" />
            </div>
            <div className="text-box">
              <h2>Transparent Pricing</h2>
              <p>
                We believe in transparency and building strong relationships
                with our clients. We offer straightforward pricing and
                understand the importance of budgeting. Packages can be expanded
                as your business grows.
              </p>
            </div>
          </div>
        </section>
        <section className="forth-section">
          <div className="forth-inner">
            <div className="subtitle">
              <div>
                <i>Our Portfolio</i>
              </div>
            </div>
            <div className={`${forth ? "anim" : "none"}`}>
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
            <title>Services | Immutable Studio – Creative Web Design & AI Solutions</title>
            <link rel="canonical" href="https://immutable-studio.co.uk/services" />
            <meta
              name="description"
              content="Explore our range of web design, development, and AI solutions at Immutable Studio. We offer services tailored to help businesses grow in the digital space."
            />
            <meta
              name="keywords"
              content="Website design agency, Website Design, Website Development, Web design, AI Solutions, Chatbot, workflows, automated, Business, London, 
              Greenwich London, custom website design services in London, AI chatbot solutions for small businesses in Greenwich,
               web design agency in South East London, web design agency in London, web design agency in Greenwich,"
            />
            <meta property="og:title" content="Services | Immutable Studio – Creative Web Design & AI Solutions" />
            <meta property="og:description" content="Explore our range of web design, development, and AI solutions at Immutable Studio." />
            <meta property="og:image" content="https://immutable-studio.co.uk/1-removebg-preview.OTVxQdl4.webp" />
            <meta property="og:url" content="https://immutable-studio.co.uk/services" />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Services;
