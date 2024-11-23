import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Button from "../button";
import PriceCard from "../cards/fullPrice";
import CallToAction from "../CTA";
import HowitWorks from "../howItWorks";
import webdev from "../../assets/images/layout.mp4";
import meeting from "../../assets/images/online-meeting.mp4";
import chatbot from "../../assets/images/chat-bot.mp4";
import design from "../../assets/images/prototype.mp4";

const Singleservices = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPrice = window.scrollY;
      const scrollSecond = window.scrollY;
      const scrollThird = window.scrollY;
      setSecond(scrollSecond > 150);
      setIsScrolled(scrollPrice > 1700);
      setThird(scrollThird > 1000);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
    useEffect(() => {
    import('./index.scss')
      .then(() => {
        console.log('css loaded');
      })
      .catch((error) => {
        console.error('error loading css',error);
      });
    return () => {
      const styleSheets = Array.from(document.styleSheets);
      const homeStyleSheet = styleSheets.find(
        (sheet) => sheet.href && sheet.href.includes('index.scss')
      );
      if (homeStyleSheet) {
        document.head.removeChild(homeStyleSheet.ownerNode)
      }
    };
  }, []);
  return (

    <>
      <div className="single-service">
        <section className='hero'>
          <div className='inner-hero'>
            <div className='text-box'>
              <h1 className='title'>{props.HeroH1}</h1>
              <p>{props.HeroP}</p>
              <p>{props.HeroH2}</p>
              <div className='btn-container'>
                <Button text="Discovery Form" link="/discovery-form" />
                <Button
                  target="_blank"
                  text="book a call"
                  link="https://calendly.com/immutable-studio/website-consultancy"
                />
              </div>
            </div>
            <img src={props.src} alt="gif" className='gif'/>
          </div>
        </section>
        <section className='second-section'>
          <div className='secondInner'>
            <div className={`${second ? 'anim-second' : 'second-none'}`}>
              <h2>{props.secondH1}</h2>
              <p>{props.secondP}</p>
              <p>{props.p}</p>
            </div>
            <img
              src={props.img}
              alt="title image"
              className={`${second ? 'anim-second-img' : 'second-none' }`}
            />
          </div>
        </section>
        <section className="howItWorks">
          <h3 className="subtitle"><i>Our Services</i></h3>
          <div className={`${third ? "anim-third" : "third-none"}`}>
            <HowitWorks
            title="How it works"
            mainP="We’re passionate about helping our clients brand stand out online. Customer service is more than a commitment, it shapes
                  every aspect of our business. From discovery to final delivery, we prioritise understanding your visions &amp; goals."
            card1Gif={meeting}
            card1Title="Discovery Call"
            card1P="Conducting a video call helps us to get to know each other. Discovery calls are important to help us understand
                      your projects needs."
            link1="https://calendly.com/immutable-studio/website-consultancy"
            text1="book a call"
            card2Gif={design}
            card2Title="Proposal and Design"
            card2P="Once we fully understand your project a proposal is drawn up. We then start on design, we will create wireframe UI/UX designs
                      for approval."
            link2="portfolio"
            text2="Our clients"
            card3Gif={webdev}
            card3Title="Draft & Completion"
            card3P="As soon as the design is approved development begins. A draft will hosted for you to approve. Once approved your 
                    project is ready for completion."
            link3="contact"
            text3="contact us"
            card4Gif={chatbot}
            card4Title="Ongoing Support"
              card4P="We offer ongoing support with hosting, website maintenance and SEO development. Our support gives you peace-of-mind, we'll be
              on hand to help."
            link4="services/seo-website-maintenance"
            text4="maintenance & seo"
            text="Explore our Portfolio"
            link="/portfolio"
          />
          </div>
        </section>
        <section className='thirdSection'>
          <div className='thirdInner'>
            <div className='thirdTextBox'>
              <h2>OUR {props.thirdH1} PRICES</h2>
              <p>{props.thirdP}</p>
            </div>
            <div className={`${isScrolled ? 'contentAnim' : 'none' }`}>
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
