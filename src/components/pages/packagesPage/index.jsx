import { useEffect, useLayoutEffect, useState } from "react";
import Button from "../../button";
import img from '../../../assets/images/packages-unscreen.gif'
import packageImg from '../../../assets/images/packages.jpeg';
import CallToAction from "../../CTA";
import style from '../index.module.css'
import Loader from "react-loaders";
import PriceCard from "../../cards/fullPrice";

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
        <Loader type="ball-spin-fade-loader" />
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
          <div className={style.gifContainer}>
            <img src={img} alt="package image" className={style.gif} />
          </div>
          
        </div>
      </section>
      <section className={style.secondSection}>
        <div className={style.secondInner}>
          <div className={`${second ? style.animSecond : style.secondNone}`}>
            <h1>Are you in need of full online website and AI solutions?</h1>
            <p>
              Our custom packages integrate cutting-edge AI solutions,
              from chatbot integration to advanced AI workflows and platforms.
              Our goal is to alleviate your pain points, saving you time and money.
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
            <PriceCard name='Packages'/>
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
