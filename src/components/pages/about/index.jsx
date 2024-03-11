import { useLayoutEffect } from "react";
import Symbols from "../../Animations/symbols";
import Button from "../../button";
import Socials from "../../socials";
import paul from "../../../assets/images/paul (2)-UZaRP6S7.png"
import "./index.scss";

const About = () => {
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
    <div className="about-page">
      <section className="hero">
        <div className="inner-hero">
          <div className="text-box">
            <Symbols />
            <h1 className="title">
              Who are Immutable studio? And what do they do?
            </h1>
            <div className="btn-container">
              <Socials />
              <Button link="contact" text="Hire us" />
            </div>

            <div className="right-hero">
              <p>
                We are a proud south east London design studio specialising in
                web development, design, social media marketing, and AI chat
                bots. We apply the best of our skills to
                your challenges and ideas.
              </p>
              <p>
                We are passionate about tech, design, problem solving and
                business.
              </p>

              <p>
                Paul created the company in 2022 and has been delivering amazing
                websites and AI solutions ever since. His nephew Harvey specailises in social
                media marketing and strategies.
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
            <div className="team-card">
              <img src={paul} alt="" />
              <div className="text-box">
                <div className="name">Paul Rossiter</div>
                <div className="desc"></div>
              </div>
            </div>
            <img src="" alt="" />
            <div className="team-card">Harvey Connall</div>
            <div className="desc"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
