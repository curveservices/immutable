import { useEffect } from "react";
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
import useScrollStates from "../scrollState";
import WorkCard from "../cards/work";

const Singleservices = (props) => {
  const { second, third, forth } = useScrollStates();

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
  const aiPage = props.page === "ai";
  const webdevPage = props.page === "webdev";
  const maintenancePage = props.page === "maintenance";
  const packagePage = props.page === "packages";
  return (
    <>
      <div className="single-service">
        <section className="hero">
          <div className="hero-inner">
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
            <img
              src={props.src}
              alt={`${props.HeroH1} Gif`}
              className="gif"
              loading="lazy"
            />
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
            <div className={`top-container ${second ? "anim" : "none"}`}>
              <div className="second-text">
                <i className="subtitle">What we do for you</i>
                <h2 className="mian-title">{props.secondH1}</h2>
                <p>{props.secondP}</p>
                <p>{props.p}</p>
              </div>
              <div className="image-container">
                <div className="square-shape"></div>
                <img
                  src={props.img}
                  alt={props.alt}
                  className="image"
                  style={{ marginBottom: "60px" }}
                />
                <img
                  src={props.img2}
                  alt={props.alt}
                  className="image"
                  style={{ marginTop: "60px" }}
                />
                <div className="circle-shape"></div>
              </div>
            </div>
            {(webdevPage || packagePage) && (
              <div className="howItWorks">
                <i className="subtitle">how it works</i>
                <div className={`${second ? "anim" : "none"}`}>
                  <HowitWorks
                    mainP="We’re passionate about helping our clients brand stand out online. Customer service is more than a commitment, it shapes
                    every aspect of our business. From discovery to final delivery, we prioritise understanding your visions &amp; goals."
                    card1Gif={meeting}
                    card1Title="Discovery Call"
                    card1P="We start with a relaxed video call to get to know you and your goals. It’s all about understanding your project needs."
                    link1="https://calendly.com/immutable-studio/website-consultancy"
                    text1="book a call"
                    card2Gif={design}
                    card2Title="Proposal & Design"
                    card2P="After the call, you’ll receive a custom proposal and access to your client portal. Then we begin designing for your feedback and approval."
                    link2="/portfolio"
                    text2="our clients"
                    card3Gif={webdev}
                    card3Title="Draft & Completion"
                    card3P="Once designs are signed off, development begins. You’ll get a live draft to review — we refine it together, then launch!"
                    link3="/contact"
                    text3="contact us"
                    card4Gif={chatbot}
                    card4Title="Ongoing Support"
                    card4P="From hosting and maintenance to SEO, we’re here for the long haul — ensuring your site stays fast, secure, and up to date."
                    link4="/services/seo-website-maintenance"
                    text4="site maintenance"
                    text="Explore our Portfolio"
                    link="/portfolio"
                  />
                </div>
              </div>
            )}
            {maintenancePage && (
              <div className="howItWorks">
                <i className="subtitle">how your maintenance package works</i>
                <p>
                  We’re passionate about helping our clients brand stand out
                  online. Customer service is more than a commitment, it shapes
                  every aspect of our business. From discovery to final
                  delivery, we prioritise understanding your visions &amp;
                  goals.
                </p>
                <div className={`${second ? "anim" : "none"}`}>
                  <HowitWorks
                    title="How it works"
                    mainP=""
                    card1Gif={meeting}
                    card1Title="Discovery Call"
                    card1P="A video call helps us to get to know each other. We will discuss your website maintenance and SEO development needs."
                    link1="https://calendly.com/immutable-studio/website-consultancy"
                    text1="book a call"
                    card2Gif={design}
                    card2Title="Maintenance Plan"
                    card2P="Once we understand your monthly needs, a proposal is drawn up and your client portal will be available. We will then run an audit on your site."
                    link2="/portfolio"
                    text2="our clients"
                    card3Gif={webdev}
                    card3Title="The Work"
                    card3P="Monthly maintenance will commence. Your content, security and SEO will be updated and regular back ups will start"
                    link3="/contact"
                    text3="contact us"
                    card4Gif={chatbot}
                    card4Title="Ongoing Support"
                    card4P="Ongoing support with SEO and maintenance development. Our support gives you peace-of-mind."
                    link4="/services/seo-website-maintenance"
                    text4="maintenance & SEO"
                    text="Explore our Portfolio"
                    link="/portfolio"
                  />
                </div>
              </div>
            )}
            {aiPage && (
              <div className="howItWorks">
                <i className="subtitle">how our ai assistants work</i>
                <div className={`${second ? "anim" : "none"}`}>
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
                    card2P="Once we understand your needs a proposal is drawn up and you client portal will be available. We then start training your assistant on your specific needs."
                    link2="/portfolio"
                    text2="Our clients"
                    card3Gif={webdev}
                    card3Title="Draft & Completion"
                    card3P="As soon as the assistant is built and trained we will send for your approved. Once approved, your 
                      assistant is ready to launch."
                    link3="/contact"
                    text3="contact us"
                    card4Gif={chatbot}
                    card4Title="Ongoing Support"
                    card4P="We offer ongoing support with fine tuning, more training and tweeking. Our support gives you peace-of-mind, we'll be
                on hand to help."
                    link4="/services"
                    text4="mainenance"
                    text="Explore our Portfolio"
                    link="/portfolio"
                  />
                </div>
                <div className="ai-section">
                  <div className="subtitle">
                    <i>Your AI Helpers</i>
                  </div>
                  <div className={`ai-inner ${second ? "anim" : "none"}`}>
                    <h2 className="main-title">Meet your Assistants</h2>
                    <div className="ai-container">
                      <div className="ai-card launching">
                        <h2 className="ai-name launching">
                          {props.assistant1}
                        </h2>
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
                        <SlideButton
                          text={`more About ${props.assistant2}`}
                          link="customer-service"
                        />
                      </div>
                      <div className="ai-card launching">
                        <h2 className="ai-name launching">
                          {props.assistant3}
                        </h2>
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
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="third-section">
          <div className={`third-inner ${third ? "anim" : "none"}`}>
            <div className="text-box">
              <i className="subtitle">Transparent pricing</i>
              <h2 className="titie ">Our {props.thirdH1} Prices</h2>
              <p>{props.thirdP}</p>
            </div>
            <PriceCard name={props.name} link="/discovery-form" />
          </div>
        </section>
        <div className="portfolio-section">
          <WorkCard background="var(--second-section)" />
        </div>
        <CallToAction />
      </div>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>
              {props.title} | Immutable Studio – Creative Web Design & AI
              Solutions
            </title>
            <link
              rel="canonical"
              href={props.canonicalUrl || window.location.href}
            />
            <meta
              name="description"
              content="Immutable Studio offers creative web design, fast, responsive websites, and AI solutions for businesses."
            />
            <meta name="keywords" content={props.keywords} />
            <meta http-equiv="content-language" content="en" />

            <meta
              property="og:title"
              content={
                props.title +
                " | Immutable Studio – Creative Web Design & AI Solutions"
              }
            />
            <meta
              property="og:description"
              content={
                props.description ||
                "Immutable Studio offers creative web design, fast, responsive websites, and AI solutions for businesses."
              }
            />
            <meta
              property="og:url"
              content={props.canonicalUrl || window.location.href}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://immutable-studio.co.uk/1-removebg-preview.OTVxQdl4.webp"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Singleservices;
