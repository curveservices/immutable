import { useLayoutEffect, useState } from "react";
import Button from "../../button";
import Socials from "../../socials";
import "./index.scss";
import Loader from "react-loaders";
import TeamCard from "../../cards/teamCard";
import CallToAction from "../../CTA";
import StaticCubes from "../../Animations/staticCubes";
import { useEffect } from "react";

const About = () => {
  const [second, setSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollCard = window.scrollY;
      setSecond(scrollCard > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-page">
      <Loader type="ball-spin-fade-loader" />
      <section className="hero">
        <div className="inner-hero">
          <StaticCubes />
          <div className="text-box">
            <div className="left-hero">
              <h1 className="title">
                Who's behind Immutable studio? And what do they do?
              </h1>
              <div className="btn-container">
                <Socials
                  fblink="https://www.facebook.com/profile.php?id=61557552873479"
                  lilink="https://www.linkedin.com/company/21439623"
                  xlink="https://twitter.com/immutable_LDN"
                />
                <Button link="contact" text="Hire us" />
                <Button link="https://calendly.com/immutable-studio/website-consultancy" noreferer text="Book a call" target='_blank' />
              </div>
            </div>

            <div className="right-hero">
              <p>
                We are a proud south east London design studio specialising in
                web development, AI solutions &amp; social media marketing. We all
                of our skills to your challenges and ideas.
              </p>
              <p>
                Created in 2022, we have been delivering amazing websites and AI
                solutions ever since. Our Digital team deliver social media
                marketing and strategies. We are passionate about tech, AI and
                problem solving
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="second-inner">
          <div className="title">
            <h1>MEET THE TEAM</h1>
          </div>
          <div className={`${second ? "contentAnim" : "none"}`}>
            <TeamCard />
          </div>
        </div>
      </section>
      <section className="cta">
        <CallToAction />
      </section>
    </div>
  );
};

export default About;
