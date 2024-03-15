import { useEffect, useLayoutEffect, useState } from "react";
import Button from "../../button";
import imgSocial from '../../../assets/images/social.jpeg';
import CallToAction from "../../CTA";
import SocialCard from "../../cards/socialCard";
import social from '../../../assets/images/social-unscreen.gif';
import "./index.scss";

const SocialMarketing = () => {
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
    <div className="social-page">
      <section className="hero">
        <div className="inner-hero">
          <div className="text-box">
            <h1>Social Media Marketing</h1>
            <p>
              Our proficient media content team is available to assist in creating ad campaigns
              and social content, leveraging the latest trends and analytics to propel your social projects forward.
            </p>
            <h2>Social media templates start from just £80</h2>
            <Button text="Speak with us today" />
          </div>
          <img src={social} alt="social icons gif" className="media-img"/>
        </div>
      </section>
      <section className="second-section">
        <div className="second-inner">
          <div className={`${second ? "animSecond" : "second-none"}`}>
            <h1>Elevate social presence with our professional template designs.</h1>
            <p>
              In the competitive digital landscape, brand distinction is crucial.
              Our design agency excels in creating unique social media templates.
              Leveraging design and branding expertise, we ensure lasting impact,
              meaningful connections, and ongoing online success for your business.
            </p>
          </div>
          <img src={imgSocial} alt="social media" className={`${second ? "animSecondimg" : "second-none"}`} />
        </div>
      </section>
      <section className="third-section">
        <div className="third-inner">
          <div className="text-box">
            <h1> CHECK OUT OUR RANGE OF SOCIAL MEDIA PACKAGES</h1>
            <p>
              We prioritize transparent communication and robust client relationships.
              Our services offer clear, budget-friendly pricing with detailed breakdowns.
              With our scalable packages, your website adapts to evolving needs,
              emphasizing flexibility and alignment with your goals as your business expands.
            </p>
          </div>
          <div
            className={`${isScrolled ? "contentAnim" : "none"}`}
            id="social-price"
          >
            <SocialCard />
          </div>
        </div>
      </section>
      <section className="cta">
        <CallToAction />
      </section>
    </div>
  );
};

export default SocialMarketing;
