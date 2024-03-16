import { useEffect, useLayoutEffect, useState } from "react";
import Button from "../../button";
import img from '../../../assets/images/packages-unscreen.gif'
import packageImg from '../../../assets/images/packages.jpeg';
import CallToAction from "../../CTA";
import ChatBotCard from "../../cards/botCard";
import style from '../index.module.css'

const Packages = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPrice = window.scrollY;
      const scrollSecond = window.scrollY;
      setSecond(scrollSecond > 250)
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
    <div className="package-page">
      <section className={style.hero}>
        <div className={style.innerHero}>
          <div className={style.textBox}>
            <h1>Business Packages</h1>
            <p>
              Seeking AI solutions for your business? Let us ease your challenges with an online chatbot.
              Our expertise enables automation and outsourcing of daily tasks using cutting-edge AI technology,
              streamlining your operations for increased efficiency.
            </p>
            <h2>We build tailer made business packagees starting from just £999</h2>
            <Button text='Speak to us today' link='/contact' />
          </div>
          <img src={img} alt="package image" className={style.gif}/>
        </div>
      </section>
      <section className={style.secondSection}>
        <div className={style.secondInner}>
          <div className={`${second ? style.animSecond : style.secondNone}`}>
            <h1>Are you in need of full a full online web solutions?</h1>
            <p>
             CHANGE COPY!!!!!!!!!!!!!?
              Immutable Studio excels in crafting inviting and functional chatbots integrated to your website.
              Our tech experts leverage cutting-edge AI, technical prowess, and industry insight to optimize sales conversion,
              ensuring exceptional results aligned with your business objectives.
            </p>
          </div>
          <img src={packageImg} alt="packagge image" className={`${second ? style.animSecondimg : style.secondNone }`}/>
        </div>
      </section>
      <section className={style.thirdSection}>
        <div className={style.thirdInner}>
          <div className={style.thirdTextBox}>
            <h1>CHECK OUT OUR CUSTOM BUSINESS PACKAGES</h1>
            <p>
              We prioritize transparent communication and strong client bonds.
              Our services offer clear, budget-friendly pricing with detailed breakdowns.
              Through scalable packages, we ensure your website chatbot evolves alongside your business,
              emphasizing adaptability and alignment with your goals as you expand.
            </p>
          </div>
          <div
            className={`${isScrolled ? style.contentAnim : style.none }`} id="package-price">
            <ChatBotCard/>
            </div>
        </div>
      </section>
      <section className="cta">
        <CallToAction />
      </section>
    </div>
  );
};

export default Packages;
