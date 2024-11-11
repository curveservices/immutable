import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import paper from "../../../assets/images/1746747.webp";
import morfbot from "../../../assets/images/morfbot.mp4";
import tutor from "../../../assets/images/telehill.mp4";
import garland from "../../../assets/images/garland.mp4";
import vive from "../../../assets/images/vive.mp4";
import Button from "../../button";
import CubeSpinner from "../../Animations/cubespinner";
import PriceCard from "../../cards/fullPrice";
import CTA from "../../CTA";
import vid from "../../../assets/images/working.mp4";
import working from "../../../assets/images/working.webp";
import LazyVideo from "../../LazyVideo";
import ReactPlayer from "react-player";
import SlideButton from "../../buttonSlide";
import "./index.scss";


const FeaturedWork = () => {
  const [firstScroll, setFirstScrolll] = useState(false);
  const [secondScroll, setSecondScroll] = useState(false);
  const [thirdScroll, setThirdScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollFirst = window.scrollY;
      const scrollSecond = window.scrollY;
      const scrollThird = window.scrollY;
      setFirstScrolll(scrollFirst > 250);
      setSecondScroll(scrollSecond > 850);
      setThirdScroll(scrollThird > 1300);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="featured-work">
        <section className="hero">
          <LazyVideo
            src={vid}
            type="video/mp4"
            fallback={working}
            className="video"
          />
          <div className="inner-hero">
            <div className="text-box">
              <h1 className="title">Featured Work</h1>
              <p>
                Signing off a new project is always a moment of pride and
                satisfaction for us.
              </p>
              <p>
                As our client base continues to expand, we are excited to
                showcase the work we do. Each project featured on this page
                represents our commitment for helping businesses thrive online.
              </p>
              <div className="btn-container">
                <Button
                  text="Book a Call"
                  link="https://calendly.com/immutable-studio/website-consultancy?month=2024-05"
                  noreferer
                />
                <Button text="Discovery form" link="/discovery-form" />
              </div>
            </div>
          </div>
          <div className="spinner">
            <CubeSpinner />
          </div>
        </section>
        <section
          className="clients"
          lazyloading="true"
          style={{
            backgroundImage: `url(${paper})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="main-text">
            <p className="client-header">OUR PORTFOLIO</p>
            <h1>Recent Projects</h1>
            <p>Here’s a selection of our recent projects across the digital landscape.</p>
          </div>
          <div className={`featured-container ${firstScroll ? "anim" : "none"}`}>
            <div className="text-box">
              <h2>Telegraph Hill Tutoring</h2>
              <h3>WEBSITE</h3>
              <p>We focused on creating a modern, playful, easy to understand and eye-catching website,
                developing a visual identity to evoke feelings of saftey, professionalism and, peace of mind.
              </p>
              <SlideButton text="Read case study" link="telegraph-hill-tutoring"/>
            </div>
            <div className={`player-wrapper ${firstScroll ? "anim" : "none"}`}>
              <ReactPlayer
                className="react-player"
                url={tutor}
                playing
                loop
              />
            </div>
          </div>
           <div className={`featured-container ${secondScroll ? "anim" : "none"}`}>
            <div className="text-box">
              <h2>MorfBot</h2>
              <h3>WEBSITE</h3>
              <p>We join forces with MorfBot to redesign their website. We created a professionl eye-catching site, built
                with React.js for scalability. Using their colour palette and images, evoking a serious tech feel.
              </p>
              <SlideButton text="Read case study" link="morfbot"/>
            </div>
            <div className={`player-wrapper ${secondScroll ? "anim" : "none"}`}>
              <ReactPlayer
                className="react-player"
                url={morfbot}
                playing
                loop
              />
            </div>
          </div>
          <div className={`featured-container ${thirdScroll ? "anim" : "none"}`}>
            <div className="text-box">
              <h2>Garland Surgical</h2>
              <h3>AI CHAT BOT</h3>
              <p>We created an AI chat assistant, fully trained on company details and the knowledge of Garlands website.
                Built on BotPress, the assistant is available 24/7, answering FAQ's to alleviate the Garland team.
              </p>
              <SlideButton text="Read case study" link="garland-surgical"/>
            </div>
            <div className={`player-wrapper ${thirdScroll ? "anim" : "none"}`}>
              <ReactPlayer
                className="react-player"
                url={garland}
                playing
                loop
              />
            </div>
          </div>
          <div className={`featured-container ${thirdScroll ? "anim" : "none"}`}>
            <div className="text-box">
              <h2>Vive La Crepe</h2>
              <h3>WEBSITE</h3>
              <p>We focused on creating a modern, playful, easy to understand and eye-catching website,
                developing a visual identity to evoke feelings of saftey, professionalism and, peace of mind.
              </p>
              <SlideButton text="Read case study" link="vive-la-crepe"/>
            </div>
            <div className={`player-wrapper ${thirdScroll ? "anim" : "none"}`}>
              <ReactPlayer
                className="react-player"
                url={vive}
                playing
                loop
              />
            </div>
          </div>
          <div className="container-footer">
            <p>The ultimate worksheet to help you collect all the information, ideas and prep work you need before starting your project with us.</p>
            <div className="btn-container">
              <Button text="client discovery form" link="/discovery-form" />
            </div>
            
          </div>
        </section>
        <section className="featured">
          <div className="text-box">
            <h2>Our Starting Prices</h2>
            <p>We believe in transparency and building strong relationships with our clients. We offer straightforward pricing and understand the importance of budgeting.
            Packages can be expanded as your business grows.</p>
          </div>
         
          <PriceCard name="pricing" color="#fff" />
        </section>
        <section className="cta">
          <CTA />
        </section>
      </div>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>Portfolio | Immutable Studio Web Development Agency</title>
            <meta
              name="description"
              content="Our featured work will help you understand what we do and who we work with. We build fast, responsive websites and create AI solutions."
            />
            <meta
              name="keywords"
              content="featured work, website design agency, web development, Immutable Studio, web design, website design, AI solutions, chatbots, workflow automaion, automation, digital agency"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default FeaturedWork;
