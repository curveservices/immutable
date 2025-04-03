import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import morfbot from "../../assets/images/morfbot.mp4";
import tutor from "../../assets/images/telehill.mp4";
import garland from "../../assets/images/garland.mp4";
import vive from "../../assets/images/vive.mp4";
import Button from "../../components/button";
import CubeSpinner from "../../components/Animations/cubespinner";
import PriceCard from "../../components/cards/fullPrice";
import CTA from "../../components/CTA";
import vid from "../../assets/images/working.mp4";
import working from "../../assets/images/working.webp";
import LazyVideo from "../../components/LazyVideo";
import ReactPlayer from "react-player";
import SlideButton from "../../components/buttonSlide";
import { Link } from "react-router-dom";

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
  useEffect(() => {
    import("./index.scss").catch((error) => {
      console.error("error loading css", error);
    });
    return () => {
      const styleSheets = Array.from(document.styleSheets);
      const homeStyleSheet = styleSheets.find(
        (sheet) => sheet.href && sheet.href.includes("index.scss"),
      );
      if (homeStyleSheet) {
        document.head.removeChild(homeStyleSheet.ownerNode);
      }
    };
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
        <section className="clients">
          <div className="subtitle">
            <i>Our Portfolio</i>
          </div>
          <div className="main-text">
            <h2>Recent Projects</h2>
            <p>
              Here’s a selection of our recent projects across the digital
              landscape.
            </p>
          </div>
          <div
            className={`featured-container ${firstScroll ? "anim" : "none"}`}
          >
            <div className="text-box">
              <h2>Telegraph Hill Tutoring</h2>
              <Link to="/services/web-development">
                <h3 className="link">WEBSITE DEVELOPMENT</h3>
              </Link>
              <p>
                We focused on creating a modern, playful, easy to understand and
                eye-catching website, developing a visual identity to evoke
                feelings of saftey, professionalism and, peace of mind.
              </p>
              <SlideButton
                text="Read case study"
                link="telegraph-hill-tutoring"
              />
            </div>
            <div className={`player-wrapper ${firstScroll ? "anim" : "none"}`}>
              <ReactPlayer
                className="react-player"
                url={tutor}
                playing
                loop
                playsinline
              />
            </div>
          </div>
          <div
            className={`featured-container oposite ${secondScroll ? "anim" : "none"}`}
          >
            <div className="text-box">
              <h2>MorfBot</h2>
              <Link to="/services/web-development">
                <h3 className="link">WEBSITE DEVELOPMENT</h3>
              </Link>
              <p>
                We join forces with MorfBot to redesign their website. We
                created a professionl eye-catching site, built with React.js for
                scalability. Using their colour palette and images, evoking a
                serious tech feel.
              </p>
              <SlideButton text="Read case study" link="morfbot" />
            </div>
            <div className={`player-wrapper oposite-video ${secondScroll ? "anim" : "none"}`}>
              <ReactPlayer
                className="react-player "
                url={morfbot}
                playing
                loop
                playsinline
              />
            </div>
          </div>
          <div
            className={`featured-container ${thirdScroll ? "anim" : "none"}`}
          >
            <div className="text-box">
              <h2>Garland Surgical</h2>
              <Link to="/services/ai-assistants">
                <h3 className="link">AI ASSISTANT</h3>
              </Link>
              <p>
                We created an AI chat assistant, fully trained on company
                details and the knowledge of Garlands website. Built on
                BotPress, the assistant is available 24/7, answering FAQ's to
                alleviate the Garland team.
              </p>
              <SlideButton text="Read case study" link="garland-surgical" />
            </div>
            <div className={`player-wrapper ${thirdScroll ? "anim" : "none"}`}>
              <ReactPlayer
                className="react-player"
                url={garland}
                playing
                loop
                playsinline
              />
            </div>
          </div>
          <div
            className={`featured-container oposite ${thirdScroll ? "anim" : "none"}`}
          >
            <div className="text-box">
              <h2>Vive La Crepe</h2>
              <Link to="/services/web-development">
                <h3 className="link">WEBSITE DEVELOPMENT</h3>
              </Link>
              <p>
                We focused on creating a modern, playful, easy to understand and
                eye-catching website, developing a visual identity to evoke
                feelings of saftey, professionalism and, peace of mind.
              </p>
              <SlideButton text="Read case study" link="vive-la-crepe" />
            </div>
            <div className={`player-wrapper ${thirdScroll ? "anim" : "none"}`}>
              <ReactPlayer
                className="react-player"
                url={vive}
                playing
                loop
                playsinline
              />
            </div>
          </div>
          <div className="container-footer">
            <h2>Fill Out Our Client Discovery Form</h2>
            <p>
              The ultimate worksheet to help you collect all the information,
              ideas and prep work you need before starting your project with us.
            </p>
            <div className="btn-container">
              <Button text="client discovery form" link="/discovery-form" />
            </div>
          </div>
        </section>
        <section className="featured">
          <div className="text-box">
            <h2>Our Starting Prices</h2>
            <p>
              We believe in transparency and building strong relationships with
              our clients. We offer straightforward pricing and understand the
              importance of budgeting. Packages can be expanded as your business
              grows.
            </p>
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
            <title>Portfolio | Immutable Studio – Creative Web Design & AI Solutions</title>
            <link rel="canonical" href="https://immutable-studio.co.uk/portfolio" />
            <meta
              name="description"
              content="Our featured work will help you understand what we do and who we work with. We build fast, responsive websites and create AI solutions."
            />
            <meta
              name="keywords"
              content="featured work, website design agency, web development, Immutable Studio, web design, website design, AI solutions, chatbots, workflow automation, automation, digital agency"
            />
            <meta property="og:title" content="Portfolio | Immutable Studio – Creative Web Design & AI Solutions" />
            <meta property="og:description" content="Check out our featured projects showcasing fast, responsive websites and AI solutions." />
            <meta property="og:image" content="https://immutable-studio.co.uk/1-removebg-preview.OTVxQdl4.webp" />
            <meta property="og:url" content="https://immutable-studio.co.uk/portfolio" />
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "CreativeWork",
                  "name": "Portfolio",
                  "author": {
                    "@type": "Organization",
                    "name": "Immutable Studio"
                  },
                  "url": "https://immutable-studio.co.uk/portfolio",
                  "description": "A showcase of our featured work that includes website design and AI solutions."
                }
              `}
            </script>
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default FeaturedWork;
