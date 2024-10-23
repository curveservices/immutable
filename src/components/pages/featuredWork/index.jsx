import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

import morfbot from "../../../assets/images/morfbot.mp4";
import tutor from "../../../assets/images/telehill.mp4";
import Client from "../../cards/ClientWork";
import Button from "../../button";
import CubeSpinner from "../../Animations/cubespinner";
import PriceCard from "../../cards/fullPrice";
import CTA from "../../CTA";
import vid from "../../../assets/images/working.mp4";
import working from "../../../assets/images/working.png";
import paper from "../../../assets/images/1746747.webp";
import LazyVideo from "../../LazyVideo";
import "./index.scss";

const FeaturedWork = () => {
  const [firstScroll, setFirstScrolll] = useState(false);
  const [secondScroll, setSecondScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollFirst = window.scrollY;
      const scrollSecond = window.scrollY;
      setFirstScrolll(scrollFirst > 150);
      setSecondScroll(scrollSecond > 1500);
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
          <div
            className={`wireframe-container ${firstScroll ? "anim" : "none"}`}
          >
            <Client
              name="telegraph-tutoring"
              p="A local tutoring company contacted us for a brand new website. 
                They wanted a fast, custom-built website developed with the latest front-end tech, using a database for learning resources to be accessed by parents.
                We built their website to be fully optimised for mobile and tablet. We ensured this site was SEO-friendly, 
                complete with a comprehensive sitemap and google analytics"
              p2="We worked with them to get the colour palette, fonts, and images to create a visually appealing and engaging user experience. 
                  We where provided with their company copy to maintain brand consistency and deliver clear messaging. 
                  The result is a modern, efficient, and user-friendly website to enhance their digital presence."
              video={tutor}
              link="https://telegraphhilltutoring.netlify.app/"
              p3=""
            />
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
          <div
            className={`wireframe-container ${secondScroll ? "anim" : "none"}`}
          >
            <Client
              name="morfbot"
              p="An innovative AI automation agency approached us for a complete redesign of their website. 
                  They wanted to move from WordPress to a custom-built site developed with React. Our team ensured the site was fully mobile-optimised and SEO-friendly, 
                  complete with a comprehensive sitemap and an integrated chatbot."
              p2="Working with their colour palette, fonts, and images, we created a visually appealing and engaging user experience. 
                  We where provided with MorfBot's company copy to maintain brand consistency and deliver clear messaging. 
                  The result is a modern, efficient, and user-friendly website that enhances MorfBot's digital presence."
              video={morfbot}
              link="https://morfbot.netlify.app/"
              p3=""
            />
          </div>
        </section>
        <section className="featured">
          <h2>WEBSITE DEVELOPMENT PRICES</h2>
          <PriceCard name="webDev" color="#fff" />
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
