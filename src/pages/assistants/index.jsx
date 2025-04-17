import React, { useEffect } from "react";
import Button from "../../components/button";
import HowitWorks from "../../components/howItWorks";
import PriceCard from "../../components/cards/fullPrice";
import CallToAction from "../../components/CTA";
import webdev from "../../assets/images/layout.mp4";
import meeting from "../../assets/images/online-meeting.mp4";
import chatbot from "../../assets/images/chat-bot.mp4";
import design from "../../assets/images/prototype.mp4";
import { HelmetProvider } from "react-helmet-async";
import useScrollStates from "../../components/scrollState";

const SingleAssistant = (props) => {
  const { second, third } = useScrollStates();
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
  });
  return (
    <>
      <div className="assistant-page">
        <section className="hero">
          <img
            src={props.header}
            className="background-img"
            alt={`cartoon image of ${props.altName}`}
          />
          <div className="inner-hero">
            <img
              src={props.assistant}
              className="assistant"
              alt={`cartoon image of ${props.altName}`}
            />
            <div className="text-box">
              <h1>{props.heroTitle}</h1>
              <div className="btn-container">
                <Button text="Start Now" link="/discovery-form" />
                <Button text="Contact Us" link="/contact" />
              </div>
            </div>
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
            <div
              className={`top-container reverse ${second ? "anim" : "none"}`}
            >
              <div className="second-text reverse">
                <i className="subtitle">{props.altName}'s Commitments</i>
                <h2 className="main-title">What to expect.</h2>
                <p>{props.secondP}</p>
              </div>
              <div className="image-container">
                <div className="square-shape"></div>
                <img
                  src={props.img2}
                  alt="Ai Solutions London"
                  className="image"
                  style={{ marginBottom: "60px" }}
                />
                <img
                  src={props.thirdImg}
                  alt="Ai Chatbot London"
                  className="image"
                  style={{ marginTop: "60px" }}
                />
                <div className="circle-shape"></div>
              </div>
            </div>
            <i className="subtitle">How it works</i>
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
        <section className="third-section">
          <div className="subtitle" style={{ color: "#fff" }}>
            <i>How {props.altName} Works</i>
          </div>
          <div className="third-inner">
            <img
              src={props.thirdImg}
              className="assistant"
              alt={`cartoon image of ${props.altName}`}
            />
            <div className="text-box">
              <h2>{props.altName} Will </h2>
              <ul>
                <li>{props.li1}</li>
                <li>{props.li2}</li>
                <li>{props.li3}</li>
                <li>{props.li4}</li>
              </ul>
              <p>{props.thirdP}</p>
            </div>
          </div>
        </section>
        <section className="forth-section">
          <div className="forth-inner">
            <h2 style={{ color: "#fff" }}>OUR AI ASSISTANT PRICES</h2>
            <PriceCard
              name="ChatBots"
              link="/discovery-form"
            />
          </div>
        </section>
        <section className="cta">
          <CallToAction />
        </section>
      </div>
      <HelmetProvider></HelmetProvider>
    </>
  );
};

export default SingleAssistant;
