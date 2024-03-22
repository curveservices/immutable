import { useLayoutEffect } from "react";
import Button from "../../button";
import Socials from "../../socials";
import "./index.scss";
import Loader from "react-loaders";
import TeamCard from "../../cards/teamCard";
import CallToAction from "../../CTA";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <div className="about-page">
        <section className="hero">
          <Loader type="ball-spin-fade-loader" />
        <div className="inner-hero">
          <div className="text-box">
              <div className="left-hero">
                <h1 className="title">
                  Who's behind Immutable studio? And what do they do?
                </h1>
                <div className="btn-container">
                  <Socials />
                  <Button link="contact" text="Hire us" />
                </div>
              </div>
            <div className="right-hero">
              <p>
                We are a proud south east London design studio specialising in
                  web development, design, social media marketing, and AI solutions.
                  We apply the best of our skills to your challenges and ideas.
              </p>
              <p>
                We are passionate about tech, AI, problem solving and
                business.
              </p>

              <p>
                Immutable Studio was created in 2022 and has been delivering amazing
                websites and AI solutions ever since. Our Digital team
                specailise in social media marketing and strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="second-inner">
          <div className="text-box">
            <h1>MEET THE TEAM</h1>
          </div>
          <div className="team-container">
            <TeamCard />
          </div>
        </div>
        </section>
        <section className="cta">
          <CallToAction />
        </section>
    </div>
    
    </>
  );
};

export default About;
