import { useEffect, useLayoutEffect, useState } from "react";
import WebDevPrice from "../../cards/webDevelopment";
import img1 from '../../../assets/images/service-1.jpeg'
import Button from "../../button";
import CallToAction from "../../CTA";
import webDev from '../../../assets/images/webDev2-unscreen.gif';
import style from '../index.module.css';

const WebDev = () => {
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
    <div className="webdev-page">
      <section className={style.hero}>
        <div className={style.innerHero}>
          <div className={style.textBox}>
            <h1>Web Development</h1>
            <p>
              For a competitive edge, business elevation, and broader audience reach,
              a compelling web presence is essential. Immutable Studio specializes in tailoring web development solutions,
              ensuring businesses achieve distinctive online success through custom solutions.
            </p>
            <h2>We build custom responsive websites from just £495</h2>
            <Button text="Speak to us today" link='/contact'/>
          </div>
          <img src={webDev} alt="laptop gif" className={style.gif} />
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
            <h1>CHECK OUT OUR RANGE OF CUSTOM OR WORDPRESS WEBSITE PACKAGES</h1>
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
            <WebDevPrice />
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
