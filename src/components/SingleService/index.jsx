import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Button from "../button";
import PriceCard from "../cards/fullPrice";
import CallToAction from "../CTA";
import HowitWorks from "../howItWorks";
import webdev from "../../assets/images/layout.mp4";
import meeting from "../../assets/images/online-meeting.mp4";
import chatbot from "../../assets/images/chat-bot.mp4";
import design from "../../assets/images/prototype.mp4";
import SlideButton from "../buttonSlide";

const Singleservices = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [second, setSecond] = useState(false);
  const [aiSection, setAiSection] = useState(false);
  const [third, setThird] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPrice = window.scrollY;
      const scrollSecond = window.scrollY;
      const scrollAiAssistants = window.scrollY;
      const scrollThird = window.scrollY;
      setSecond(scrollSecond > 150);
      setIsScrolled(scrollPrice > 1700);
      setAiSection(scrollAiAssistants > 750);
      setThird(scrollThird > 1000);
    };
    window.addEventListener("scroll", handleScroll);
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
  const aiPage = props.page === "ai";
  const webdevPage = props.page === "webdev";
  const maintenancePage = props.page === "maintenance";
  const packagePage = props.page === "package";
  return (
    <>
      <div className="single-service">
        <section className="hero">
          <div className="inner-hero">
            <div className="text-box">
              <h1 className="title">{props.HeroH1}</h1>
              <p>{props.HeroP}</p>
              <p>{props.HeroH2}</p>
              <div className="btn-container">
                <Button text="Discovery Form" link="/discovery-form" />
                <Button
                  target="_blank"
                  text="book a call"
                  link="https://calendly.com/immutable-studio/website-consultancy"
                  background="var(--third-bg)"
                  color="var(--second)"
                />
              </div>
            </div>
            <img src={props.src} alt={`${props.HeroH1} Gif`} className="gif" />
          </div>
        </section>
        <section className="second-section">
          <div className="secondInner">
            <div className={`${second ? "anim-second" : "second-none"}`}>
              <h2>{props.secondH1}</h2>
              <p>{props.secondP}</p>
              <p>{props.p}</p>
            </div>
            <img
              src={props.img}
              alt={props.alt}
              className={`${second ? "anim-second-img" : "second-none"}`}
            />
          </div>
        </section>
        {aiPage && (
          <>
          <section className="ai-section">
            <div className="subtitle">
              <i>Your AI Helpers</i>
            </div>
            <div className={`ai-inner ${aiSection ? "anim" : "none"}`}>
              <h2 className="title">MEET OUR ASSISTANTS</h2>
              <div className="ai-container">
                <div className="ai-card launching">
                  <h2 className="ai-name launching">{props.assistant1}</h2>
                  <h3 className="ai-title launching">{props.title1}</h3>
                  <img
                    src={props.img1}
                    className="ai-img launching"
                    alt="a 3d cartoon of a girl in pink space suit"
                  />
                  {/* <SlideButton text={`more About ${props.assistant1}`} link="social-media"/> */}
                  <p>LAUNCHING SOON</p>
                </div>
                <div className="ai-card">
                  <h2 className="ai-name">{props.assistant2}</h2>
                  <h3 className="ai-title">{props.title2}</h3>
                  <img
                    src={props.img2}
                    className="ai-img"
                    alt="a 3d cartoon of a boy in a blue space suit"
                  />
                  <SlideButton text={`more About ${props.assistant2}`} link="customer-service" />
                </div>
                <div className="ai-card launching">
                  <h2 className="ai-name launching">{props.assistant3}</h2>
                  <h3 className="ai-title launching">{props.title3}</h3>
                  <img
                    src={props.img3}
                    className="ai-img launching"
                    alt="a 3d cartoon of a boy in a blue space suit"
                  />
                  {/* <SlideButton text={`more About ${props.assistant3}`} link="ecommerce"/> */}
                  <p>LAUNCHING SOON</p>
                </div>
              </div>
            </div>
          </section>
          <section className="howItWorks">
          <div className="subtitle">
            <i>Our Services</i>
          </div>
          <div className={`${third ? "anim-third" : "third-none"}`}>
            <HowitWorks
              title="How it works"
              mainP="We’re passionate about helping our clients brand stand out online. Customer service is more than a commitment, it shapes
                  every aspect of our business. From discovery to final delivery, we prioritise understanding your visions &amp; goals."
              card1Gif={meeting}
              card1Title="Discovery Call"
              card1P="Conducting a video call helps us to get to know each other. Discovery calls are important to help us understand
                      your projects needs."
              link1="https://calendly.com/immutable-studio/website-consultancy"
              text1="book a call"
              card2Gif={design}
              card2Title="Proposal and Build"
              card2P="Once we fully understand your needs a proposal is drawn up. We then start training your assistant on your specific needs."
              link2="portfolio"
              text2="Our clients"
              card3Gif={webdev}
              card3Title="Draft & Completion"
              card3P="As soon as the assistant is built and trained we will send for your approved. Once approved, your 
                    assistant is ready for launch."
              link3="contact"
              text3="contact us"
              card4Gif={chatbot}
              card4Title="Ongoing Support"
              card4P="We offer ongoing support with fine tuning, more training and tweeking. Our support gives you peace-of-mind, we'll be
              on hand to help."
              link4=""
              text4="Ai & Automation"
              text="Explore our Portfolio"
              link="/portfolio"
            />
          </div>
          </section>
          </>
        )}
        {(!aiPage && (webdevPage || maintenancePage || packagePage)) && (
        <section className="howItWorks">
          <div className="subtitle">
            <i>Our Services</i>
          </div>
          <div className={`${third ? "anim-third" : "third-none"}`}>
            <HowitWorks
              title="How it works"
              mainP="We’re passionate about helping our clients brand stand out online. Customer service is more than a commitment, it shapes
                    every aspect of our business. From discovery to final delivery, we prioritise understanding your visions &amp; goals."
              card1Gif={meeting}
              card1Title="Discovery Call"
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
          </div>
        </section>
        )}
        <section className="thirdSection">
          <div className="thirdInner">
            <div className="thirdTextBox">
              <h2>OUR {props.thirdH1} PRICES</h2>
              <p>{props.thirdP}</p>
            </div>
            <div className={`${isScrolled ? "contentAnim" : "none"}`}>
              <PriceCard
                name={props.name}
                color="#fff"
                link="/discovery-form"
              />
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
              {props.title} | Immutable Studio – Creative Web Design & AI Solutions
            </title>
            <link rel="canonical" href={props.canonicalUrl || window.location.href} />
            <meta name="description" content="Immutable Studio offers creative web design, fast, responsive websites, and AI solutions for businesses." />
            <meta name="keywords" content={props.keywords} />
            <meta http-equiv="content-language" content="en" />

            <meta property="og:title" content={props.title + " | Immutable Studio – Creative Web Design & AI Solutions"} />
            <meta property="og:description" content={props.description || "Immutable Studio offers creative web design, fast, responsive websites, and AI solutions for businesses."} />
            <meta property="og:url" content={props.canonicalUrl || window.location.href} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://immutable-studio.co.uk/1-removebg-preview.OTVxQdl4.webp" />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Singleservices;
