import { useEffect, useLayoutEffect, useState } from "react";
import Button from "../../button";
import CallToAction from "../../CTA";
import ChatBotCard from "../../cards/botCard";
import Symbols from "../../Animations/symbols";
import bot from '../../../assets/images/chatbot-image.jpeg';
import "./index.scss";


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
      <section className="hero">
        <div className="inner-hero">
          <div className="text-box">
            <h1>Website Chat bots</h1>
            <p>
              Seeking AI solutions for your business? Let us ease your challenges with an online chatbot.
              Our expertise enables automation and outsourcing of daily tasks using cutting-edge AI technology,
              streamlining your operations for increased efficiency.
            </p>
            <h2>We build tailored AI chatbots, starting at £275.</h2>
            <Button text='Speak to us today' link='contact'/>
          </div>
          <Symbols />
        </div>
      </section>
      <section className="second-section">
        <div className="second-inner">
          <div className={`${second ? "animSecond" : "second-none"}`}>
            <h1>
              Convert web traffic to sales using advanced AI solutions.
            </h1>
            <p>Tired of low website conversions?
              Immutable Studio excels in crafting inviting and functional chatbots integrated to your website.
              Our tech experts leverage cutting-edge AI, technical prowess, and industry insight to optimize sales conversion,
              ensuring exceptional results aligned with your business objectives.
            </p>
          </div>
          <img src={bot} alt="chat bot on comupter" className={`${second ? "animSecondimg" : "second-none"}`}/>
        </div>
      </section>
      <section className="third-section">
        <div className="third-inner">
          <div className="text-box">
            <h1>CHECK OUT OUR CUSTOM CHATBOT PACKAGES</h1>
            <p>
              We emphasize clear communication and robust client relationships.
              Our services include transparent, budget-friendly pricing with detailed breakdowns.
              With scalable packages, we guarantee your website chatbot adapts to evolving business needs,
              highlighting flexibility and alignment with your goals as you grow.
            </p>
          </div>
          <div
            className={`${isScrolled ? "contentAnim" : "none"}`}
            id="bot-price"
          >
            <ChatBotCard />
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
