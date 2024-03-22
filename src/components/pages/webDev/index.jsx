import { useEffect, useLayoutEffect, useState } from "react";
import img1 from '../../../assets/images/service-1.jpeg'
import Button from "../../button";
import CallToAction from "../../CTA";
import webDev from '../../../assets/images/webDev2-unscreen.gif';
import style from "../services.module.css";
import Loader from "react-loaders";
import PriceCard from "../../cards/fullPrice";

const WebDev = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPrice = window.scrollY;
      const scrollSecond = window.scrollY;
      setSecond(scrollSecond > 350)
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
    <div className="webdev-page">
      <section className={style.hero}>
        <Loader type="ball-spin-fade-loader" />
        <div className={style.innerHero}>
          <div className={style.textBox}>
            <h1>Web Development</h1>
            <p>
              For a competitive edge, business elevation, and broader audience reach,
              a compelling web presence is essential. Immutable Studio specializes in tailoring web development solutions,
              ensuring businesses achieve distinctive online success through custom solutions.
            </p>
            <h2>We build custom responsive websites from just £595 + vat</h2>
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
            <img src={webDev} alt="laptop gif" className={style.gif} />
          </div>
        </div>
      </section>
      <section className={style.secondSection}>
        <div className={style.secondInner}>
          <div className={`${second ? style.animSecond : style.secondNone}`}>
              <h1>
                Transform your online presence with expert design solutions
              </h1>
              <p>
              Frustrated with an outdated website that lacks engagement and conversions?
              Immutable Studio excels in crafting visually stunning, functional websites,
              elevating your online presence. Our skilled web designers blend creativity, technical know-how,
              and industry insight to deliver exceptional results aligned with your business objectives.
              </p>
            </div>
            <img src={img1} alt="computer screen" className={`${second ? style.animSecondimg : style.secondNone}`} />
        </div>
      </section>
      <section className={style.thirdSection}>
        <div className={style.thirdInner}>
          <div className={style.thirdTextBox}>
            <h1>CHECK OUT OUR CUSTOM OR WORDPRESS WEBSITE PACKAGES</h1>
            <p>
              We prioritize transparent communication and strong client relationships.
              Our services feature clear, budget-friendly pricing with detailed breakdowns.
              As your business grows, our scalable packages ensure your website consistently meets evolving needs,
              emphasizing flexibility and alignment with your goals.
            </p>
          </div>
          <div
            className={`${isScrolled ? style.contentAnim : style.none}`}
            id="web-price"
          >
            <PriceCard name="webDev"  />
          </div>
        </div>
      </section>
      <section className="cta">
        <CallToAction />
      </section>
    
    </div>
  );
};

export default WebDev;
