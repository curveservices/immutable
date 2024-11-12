import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Button from "../button";
import PriceCard from "../cards/fullPrice";
import CallToAction from "../CTA";
import HowitWorks from "../howItWorks";
import webdev from "../../assets/images/layout.gif";
import meeting from "../../assets/images/online-meeting.gif";
import chatbot from "../../assets/images/chat-bot.gif";
import design from "../../assets/images/prototype.gif";
import style from "./services.module.css";

const Singleservices = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPrice = window.scrollY;
      const scrollSecond = window.scrollY;
      setSecond(scrollSecond > 150);
      setIsScrolled(scrollPrice > 1000);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="single-service">
        <section className={style.hero}>
          <div className={style.innerHero}>
            <div className={style.textBox}>
              <h1 className={style.title}>{props.HeroH1}</h1>
              <p>{props.HeroP}</p>
              <p>{props.HeroH2}</p>
              <div className={style.btnContainer}>
                <Button text="Discovery Form" link="/discovery-form" />
                <Button
                  target="_blank"
                  text="book a call"
                  link="https://calendly.com/immutable-studio/website-consultancy"
                />
              </div>
            </div>
            <img src={props.src} alt="gif" className={style.gif} />
          </div>
        </section>
        <section className={style.secondSection}>
          <div className={style.secondInner}>
            <div className={`${second ? style.animSecond : style.secondNone}`}>
              <h2>{props.secondH1}</h2>
              <p>{props.secondP}</p>
              <p>{props.p}</p>
            </div>
            <img
              src={props.img}
              alt="title image"
              className={`${second ? style.animSecondimg : style.secondNone}`}
            />
          </div>
        </section>
        <section className={style.howItWorks}>
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
        </section>
        <section className={style.thirdSection}>
          <div className={style.thirdInner}>
            <div className={style.thirdTextBox}>
              <h2>OUR {props.thirdH1} PRICES</h2>
              <p>{props.thirdP}</p>
            </div>
            <div className={`${isScrolled ? style.contentAnim : style.none}`}>
              <PriceCard name={props.name} color="#fff" />
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
              {props.title} | Immutable Studio Web Development Agency
            </title>
            <meta name="keywords" content={props.keywords} />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Singleservices;
