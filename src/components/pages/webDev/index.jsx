import StaticCubes from "../../Animations/staticCubes";
import Symbols from "../../Animations/symbols";
import CallToAction from "../../CTA";
import "./index.scss";
import { useEffect, useLayoutEffect, useState } from "react";
import WebDevPrice from "../../cards/webDevelopment";

const WebDev = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 200);
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
      <section className="hero">
        <div className="inner-hero">
          <div className="text-box">
            <h1>Web Development</h1>
            <p>If you want to stand out in a competitive niche, get your business to the next level,
              and reach a larger audience, you will need a great web presence for your business.
              Immutable Studio is a web development agency that delivers custom web development solutions for businesses.
            </p>
          </div>
          <StaticCubes/>
          <Symbols />
        </div>
      </section>
      <section className="second-section">
        <div className="second-inner">
          <h1></h1>
          <div className={`${isScrolled ? "contentAnim" : "none"}`}>
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
