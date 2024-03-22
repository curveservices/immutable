import React, { useEffect, useLayoutEffect, useState, lazy } from "react";
import Button from "../../button";
import CallToAction from "../../CTA";
import bot from '../../../assets/images/chatbot-image.jpeg';
import chatbot from '../../../assets/images/chatbot-unscreen.gif';
import PriceCard from "../../cards/fullPrice";
import style from "../services.module.css";
import Loader from "react-loaders";


const ChatBots = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPrice = window.scrollY;
      const scrollSecond = window.scrollY;
      setSecond(scrollSecond > 150)
      setIsScrolled(scrollPrice > 1000);
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
    <div className="chatbot-page">
      <section className={style.hero}>
        <Loader type="ball-spin-fade-loader" />
        <div className={style.innerHero}>
          <div className={style.textBox}>
            <h1>Website Chat bots</h1>
            <p>
              Seeking AI solutions for your business? Let us ease your challenges with an online chatbot.
              Our expertise enables automation and outsourcing of daily tasks using cutting-edge AI technology,
              streamlining your operations for increased efficiency.
            </p>
            <h2>We build tailored AI chatbots, starting at £795 + vat. </h2>
            <div className={style.btnContainer}>
              <Button text="Speak with us" link='/contact' />
              <Button
                target='_blank'
                text="book a call"
                link="https://calendly.com/event_types/168391476/edit?return_to=%2Fevent_types%2Fuser%2Fme"
              />
            </div>
          </div>
          <div className={style.gifContainer}>
            <img src={chatbot} alt="chatbot immi" className={style.gif} />
          </div>
        </div>
      </section>
      <section className={style.secondSection}>
        <div className={style.secondInner}>
          <div className={`${second ? style.animSecond : style.secondNone}`}>
            <h1>
              Convert web traffic to sales using AI solutions.
            </h1>
            <p>Tired of low website conversions?
              Immutable Studio excels in crafting inviting and functional chatbots integrated to your website.
              Our tech experts leverage cutting-edge AI, technical prowess, and industry insight to optimize sales conversion,
              ensuring exceptional results aligned with your business objectives.
            </p>
          </div>
          <img src={bot} alt="chat bot on comupter" className={`${second ? style.animSecondimg : style.secondNone}`}/>
        </div>
      </section>
      <section className={style.thirdSection}>
        <div className={style.thirdInner}>
          <div className={style.thirdTextBox}>
            <h1>CHECK OUT OUR CUSTOM CHATBOT PACKAGES</h1>
            <p>
              We emphasize clear communication and robust client relationships.
              Our services include transparent, budget-friendly pricing with detailed breakdowns.
              With scalable packages, we guarantee your website chatbot adapts to evolving business needs,
              highlighting flexibility and alignment with your goals as you grow.
            </p>
          </div>
          <div
            className={`${isScrolled ? style.contentAnim : style.none }`} id="bot-price">
              <PriceCard name='ChatBots' />
          </div>
        </div>
      </section>
      <section className="cta">
        <CallToAction />
      </section>
    </div>
  )
};

export default ChatBots;
