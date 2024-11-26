import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TypewriterComponent from "typewriter-effect";
import MarqueeComp from "../../marquee";
import Button from "../../button/index";
import CallToAction from "../../CTA";
import LazyVideo from "../../LazyVideo";
import WorkCard from "../../cards/work";
import vid from "../../../assets/images/greenwich.mp4";
import fallback from "../../../assets/images/greenwich.webp";
import ExitIntentPopup from "../../exitIntentPopUp";
import webdev from "../../../assets/images/layout.mp4";
import seo from "../../../assets/images/keywords.mp4";
import ai from "../../../assets/images/ai.mp4";
import mobile from "../../../assets/images/mobile.mp4"
import client from "../../../assets/images/client.mp4";
import packing from "../../../assets/images/packing.mp4";
import HowitWorks from "../../howItWorks";
import GoogleReviews from "../../googleReviews";
import Socials from "../../socials";

const Home = () => {
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
      setSecond(scrollSecond > 250);
      setThird(scrollThird > 1500);
      setForth(scrollForth > 2500);
      setFith(scrollFith > 3300);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    import('./index.scss')
      .catch((error) => {
        console.error('error loading css',error);
      });
    return () => {
      const styleSheets = Array.from(document.styleSheets);
      const homeStyleSheet = styleSheets.find(
        (sheet) => sheet.href && sheet.href.includes('index.scss')
      );
      if (homeStyleSheet) {
        document.head.removeChild(homeStyleSheet.ownerNode)
      }
    };
  }, []);
  return (
    <>
      <div className="home-page">
        <ExitIntentPopup/>
        <section className="hero">
          <LazyVideo
            ariaLabel="Footage of the Royal College of Greenwich"
            src={vid}
            type="video/mp4"
            className="video"
            fallback={fallback}
          />
          <div className="text-box">
            <h1 className="main-title">Empowering Business with</h1>
            <span className="mobile-view">Online Solutions.</span>
            <div className="typewriter">
              <TypewriterComponent
                options={{
                  strings: [
                    "Website Design.",
                    "Maintenance & SEO.",
                    "AI Chat Assistants.",
                    "Website Development.",
                    "AI Solutions.",
                  ],
                  wrapperClassName: "Typewriter__wrapper",
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 40,
                }}
              />
            </div>
            <div className="text">
              <h2>
                Web design &amp; development that will
                transform your online presence.
              </h2>
              <div className="btn-container">
                <Button
                  link="https://calendly.com/immutable-studio/website-consultancy"
                  text="book a call"
                  target="_blank"
                />
                <Button link="discovery-form" text="discovery form" />
              </div>
            </div>
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
          <div className="subtitle"><i>Our Services</i></div>
            <div className={`text-content ${second ? "anim" : "none"}`}>
              <HowitWorks
                title="what we do"
                mainP="We’re passionate about helping your brand stand out online. Whether it’s building custom websites, 
                developing AI assistants, SEO &amp; maintenance and other tech services. We’re here to bring your digital 
                ideas to life and make a real impact for your business. Let’s work together to create something amazing!"
              card1Gif={webdev}
              card1Title="Website Development"
              card1P=" We build responsive websites that look and feel amazing on all devices
                    – desktops, laptops and mobiles. Let us help you create the perfect website."
              link1="/services/web-development"
              text1="Find out more"  
              card2Gif={seo}
              card2Title="SEO & Maintenance"
              card2P="We offer a range of maintenace plans, starting with a free SEO, performance and
                    facebook business page audit. We can manage your site with ease so you don't have to."
              link2="services/seo-website-maintenance"
              text2="find out more"
              card3Gif={ai}
              card3Title="AI Solutions"
              card3P="Our AI assistants are trained on your business and website pages. Answering FAQ's, taking bookings and more.
                    All seamlessly intergrated to your website and systems."
              link3="services/chat-bots"
              text3="find out more"
              card4Gif={packing}
              card4Title="Packages"
              card4P="Wrap all of our services up into convienent business packages.
                    We offer a range of website development, AI solutions, analytics and workflow automation."
              link4="services/packages"
              text4="find out more"
              text="See all our services"
              link="services"
            />
            </div>
            <div className={`home-marquee ${second ? "anim" : "none"}`}>
              <MarqueeComp />
            </div>
          </div>
        </section>
        <section className="third-section">
          <div className="third-inner">
            <div className="subtitle" style={{color: '#fff',}}><i>Our Commitments</i></div>
            <div className={`text-content ${third ? "anim" : "none"}`}>
              <HowitWorks
              title="why choose us"
                mainP=" We offer a full range of website design, SEO &amp; maintenance,
                AI chat assistants, and workflow automation services with
                flexible pricing. We also package up all of these services as a
                convenient business pack."
              card1Gif={client}
              card1Title="Excellent Client Service"
              card1P=" Customer service is a commitment and it shapes
                      every aspect of our business. From discovery to final
                      delivery, we prioritise understanding your visions &amp;
                      goals."
              link1="/portfolio"
              text1="Our Clients"  
              card2Gif={ai}
              card2Title="Automated AI Solutions"
              card2P="Every business is unique. We create custom automated
                      workflows &amp; AI solutions, tailored to your business
                      saving you time &amp; money with repetitive tasks powered
                      by AI."
              link2="services/chat-bots"
              text2="AI Solutions"
              card3Gif={webdev}
              card3Title="Seamless User Experience"
              card3P=" User experience is vital. We design user journeys focusing
                      on simplicity &amp; ease of use. By providing seamless
                      browsing, we engage visitors &amp; inspire them to take
                      action."
              link3="services"
              text3="Our Services"
              card4Gif={mobile}
              card4Title="A Mobile-First Approach"
              card4P="It's a mobile-driven world &amp; a responsive website is
                      essential. Our designs are optimised for all devices,
                      ensuring a flawless experience on phones, tablets &amp;
                      desktops."
              link4="services/web-development"
              text4="web development"
              text="find out about us"
              link="about"
            />
            </div>
          </div>
        </section>
        <section className="forth-section">
          <div className="forth-inner">
            <div className="text-box">
              <div className="subtitle"><i>Our Portfolio</i></div>
            </div>
            <div className={`${forth ? "anim" : "none"}`}>
                <WorkCard />
            </div>
          </div>
        </section>
        <section className="fith-section">
          <div className="fith-inner">
            <div className="subtitle"><i>Client Reviews</i></div>
            <div className={`${fith ? "anim" : "none"}`}>
              <GoogleReviews />
              <div className="subtitle"><i>Stay Up To Date And Follow Us!</i></div>
              <Socials
                fblink="https://www.facebook.com/profile.php?id=61557552873479"
                lilink="https://www.linkedin.com/company/21439623"
                instalink="https://www.instagram.com/immutable_studio/"
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
              Web Design Agency | Web Design London | Immutable Studio
            </title>
            <meta
              name="description"
              content="Immutable Studio is a leading website development and website design agency. We build fast and responsive websites and create AI solutions for businesses."
            />
            <meta
              name="keywords"
              content="Website, Website Design, Website Development, Web design, AI Solutions, Chatbot, workflows, London, Greenwich"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Home;
