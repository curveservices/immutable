import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";

import Button from "../../components/button";
import Socials from "../../components/socials";
import TeamCard from "../../components/cards/teamCard";
import CallToAction from "../../components/CTA";
import StaticCubes from "../../components/Animations/staticCubes";
import vid from "../../assets/images/about.mp4";
import about from "../../assets/images/about.webp";
import LazyVideo from "../../components/LazyVideo";

const About = () => {
  const [second, setSecond] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => {
      const scrollCard = window.scrollY;
      setSecond(scrollCard > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="about-page">
        <section className="hero">
          <LazyVideo
            src={vid}
            fallback={about}
            type="video/mp4"
            className="video"
          />
          <div className="socials">
                <Socials
                  fblink="https://www.facebook.com/profile.php?id=61557552873479"
                  lilink="https://www.linkedin.com/company/21439623"
                  instalink="https://www.instagram.com/immutable_studio/"
                />
              </div>
          <div className="hero-inner">
            <div className="text-box">
              <h1 className="title">About Us</h1>
              <p>
                We are a proud south east London design studio specialising in
                web development, AI solutions &amp; social media marketing. We
                apply all of our skills to your challenges and ideas.
              </p>
              <p>
                Created in 2022, we have been delivering amazing websites and AI
                solutions ever since. Our Digital team deliver social media
                marketing and strategies. We are passionate about tech, AI and
                problem solving
              </p>
              <div className="btn-container">
                <Button link="/contact" text="Contact us" />
                <Button
                  link="https://calendly.com/immutable-studio/website-consultancy"
                  noreferer
                  text="Book a call"
                  target="_blank"
                  background="var(--third-bg)"
                  color="var(--second)"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
            <div className="subtitle"><i>About us</i></div>
            <h2 className="title">MEET THE TEAM</h2>
            <div className={`${second ? "contentAnim" : "none"}`}>
              <TeamCard />
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
          <title>About Us | Immutable Studio – Creative Web Design & AI Solutions</title>
          <link rel="canonical" href="https://www.immutable-studio.co.uk/about-us" />
          <meta
            name="description"
            content="Our team of developers and designers is dedicated to helping your brand improve its online presence with expert web design and AI solutions."
          />
          <meta
            name="keywords"
            content="Immutable studio, Greenwich London, London, Web design, website design, website development, website design agency, AI Solutions"
          />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Immutable Studio",
                "url": "https://www.immutable-studio.co.uk",
                "logo": "https://immutable-studio.co.uk/1-removebg-preview.OTVxQdl4.webp",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+447980383484",
                  "email": "hello@immutable-studio.co.uk",
                  "contactType": "Customer Service",
                  "areaServed": "GB",
                  "availableLanguage": ["English"]
                },
                "sameAs": [
                  "https://www.linkedin.com/company/immutable-studio",
                  "https://www.facebook.com/profile.php?id=61557552873479",
                  "https://www.instagram.com/immutable_studio/"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Greenwich, London",
                  "addressLocality": "London",
                  "postalCode": "SE10 0LW",
                  "addressCountry": "GB"
                }
              }
            `}
          </script>
        </Helmet>
      </HelmetProvider>
      </div>
    </>
  );
};

export default About;
