import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";

import Button from "../../button";
import Socials from "../../socials";
import TeamCard from "../../cards/teamCard";
import CallToAction from "../../CTA";
import StaticCubes from "../../Animations/staticCubes";
import vid from "../../../assets/images/about.mp4";
import about from "../../../assets/images/about.webp";
import LazyVideo from "../../LazyVideo";

const About = () => {
  const [second, setSecond] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => {
      const scrollCard = window.scrollY;
      setSecond(scrollCard > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="about-page">
        <section className="hero">
          <LazyVideo
            src={vid}
            fallback={about}
            type="video/mp4"
            className="video"
          />
          <div className="inner-hero">
            <StaticCubes />
            <div className="text-box">
              <h1 className="title">About Us</h1>
              <p>
                We are a proud south east London design studio specialising in
                web development, AI solutions &amp; social media marketing. We
                apply all of our skills to your challenges and ideas.
              </p>
              <p>
                Created in 2022, we have been delivering amazing websites and AI
                solutions ever since. Our Digital team deliver social media
                marketing and strategies. We are passionate about tech, AI and
                problem solving
              </p>
              <div className="social-container">
                <Socials
                  fblink="https://www.facebook.com/profile.php?id=61557552873479"
                  lilink="https://www.linkedin.com/company/21439623"
                  instalink="https://www.instagram.com/immutable_studio/"
                />
              </div>
              <div className="btn-container">
                <Button link="/contact" text="Contact us" />
                <Button
                  link="https://calendly.com/immutable-studio/website-consultancy"
                  noreferer
                  text="Book a call"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
            <h2 className="title">MEET THE TEAM</h2>
            <div className={`${second ? "contentAnim" : "none"}`}>
              <TeamCard />
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
            <title>About Us | Immutable Studio Web Development Agency</title>
            <meta
              name="description"
              content="Our team of developers, desingers and digital content creators will help your brands online presence."
            />
            <meta
              name="keywords"
              content="Immutable studio, Greenwich London, London, Web design, website design, website development, website design agency, AI Solutions"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default About;
