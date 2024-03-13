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
            <p>
              For a competitive edge, business elevation, and broader audience reach,
              a compelling web presence is essential. Immutable Studio specializes in tailoring web development solutions,
              ensuring businesses achieve distinctive online success through custom solutions.
            </p>
          </div>
          <StaticCubes/>
          <Symbols />
        </div>
      </section>
      <section className="second-section">
        <div className="second-inner">
          <div className="text-box">
            <h1>CHECK OUT OUR RANGE OF CUSTOM OR WORDPRESS WEBSITE PACKAGES</h1>
            <p>
              We prioritize transparent communication and strong client relationships.
              Our services feature clear, budget-friendly pricing with detailed breakdowns.
              As your business grows, our scalable packages ensure your website consistently meets evolving needs,
              emphasizing flexibility and alignment with your goals.
            </p>
          </div>
          <div className={`${isScrolled ? "contentAnim" : "none"}`}>
            <h1></h1>
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
