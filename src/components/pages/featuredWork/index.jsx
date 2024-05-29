import morfbot from "../../../assets/images/morfbot.mp4";
import Client from "../../cards/ClientWork";
import Featured from "../../featured";
import "./index.scss";
import Button from "../../button";
import CubeSpinner from "../../Animations/cubespinner";
import CTA from "../../CTA";
import Helmet from "react-helmet";
import Loader from "react-loaders";

const FeaturedWork = () => {
  return (
    <>
      <div className="featured-work">
        <section className="hero">
          <div className="inner-hero">
            <div className="text-box">
              <h1>Featured Work</h1>
              <p>
                Signing off on a new website is always a moment of immense pride
                and satisfaction for us. With each project, we take great care
                to understand our clients' unique needs and deliver tailored
                solutions.
              </p>
              <p>
                As our client base continues to expand, we are excited to
                showcase the diverse and innovative work we do, particularly in
                creating cutting-edge websites and AI solutions. Each project
                featured on this page represents our commitment to excellence
                and our passion for helping businesses thrive in the digital
                age.
              </p>
              <div className="button-container">
                <Button
                  text="Book a Call"
                  link="https://calendly.com/immutable-studio/website-consultancy?month=2024-05"
                  noreferer
                />
                <Button text="Contact us" link="/contact" />
              </div>
            </div>
          </div>
          <div className="spinner">
            <CubeSpinner />
          </div>
        </section>
        <section className="clients">
          <div className="wireframe-container">
            <Client
              name="morfbot"
              p="An innovative AI automation agency approached us for a complete redesign of their website. 
                            They wanted to move from WordPress to a custom-built site developed with React. Our team ensured the site was fully mobile-optimized and SEO-friendly, 
                            complete with a comprehensive sitemap and an integrated chatbot."
              p2="Working with their colour palette, fonts, and images, we created a visually appealing and engaging user experience. 
                            We where provided with their company copy to maintain brand consistency and deliver clear messaging. The result is a modern, efficient, and user-friendly website that enhances MorfBot's digital presence."
              video={morfbot}
              link="https://morfbot.com/"
            />
          </div>
        </section>
        <section className="clients">
          <div className="wireframe-container"></div>
        </section>
        <section className="featured">
          <Featured />
        </section>
        <section className="cta">
          <CTA />
        </section>
      </div>
      <div>
        <Helmet>
          <title>
            Featured Work - Immutable Studio: Web Development, AI &amp;
            Automation Solutions Agency
          </title>
          <meta
            name="keywords"
            content="featured work, website, design, web development, AI solutions, chatbots, workflow automaion, automation, digital marketing, Immutable Studio"
          />
        </Helmet>
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  );
};

export default FeaturedWork;
