import React, { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Button from "../../components/button";
import Socials from "../../components/socials";
import TeamCard from "../../components/cards/teamCard";
import CallToAction from "../../components/CTA";
import vid from "../../assets/images/about.mp4";
import about from "../../assets/images/about.webp";
import useScrollStates from "../../components/scrollState";
import LoadingSpinner from "../../components/loadingSpinner";
import HowitWorks from "../../components/howItWorks";
import webdev from "../../assets/images/layout.mp4";
import meeting from "../../assets/images/online-meeting.mp4";
import chatbot from "../../assets/images/chat-bot.mp4";
import design from "../../assets/images/prototype.mp4";
import code from "../../assets/images/code.webp";
import paul from "../../assets/images/servicesImg.webp";

const LazyVideo = React.lazy(() => import("../../components/LazyVideo"));

const About = () => {
  const { second, third } = useScrollStates();
  return (
    <>
      <div className="about-page">
        <section className="hero">
          <Suspense fallback={<LoadingSpinner />}>
            <LazyVideo
              src={vid}
              fallback={about}
              type="video/mp4"
              className="video"
            />
          </Suspense>
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
                website design, development, and AI solutions.
              </p>
              <p>
                Created in 2022, we have been delivering amazing websites and AI
                solutions ever since.
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
            <div className={`top-container ${second ? "anim" : "none"}`}>
              <div className="second-text">
                <i className="subtitle">Our commitments</i>
                <h2 className="main-title">Why Work With Us</h2>
                <p style={{ paddingBottom: "2rem" }}>
                  We design and develop modern websites, build AI chat
                  assistants, and offer reliable SEO development and website
                  maintenance services. Whether you need one service or a full
                  package, our solutions are flexible, scalable, and tailored to
                  your goals.
                </p>
                <i className="subtitle">Its about you</i>
                <p>
                  We're here to make your life easier. We collaborate closely
                  with you to deliver results that are functional and impactful.
                  Expect clear communication, transparent pricing, and ongoing
                  support. Every business is different, that's why we listen
                  first and build second.
                </p>
              </div>
              <div className="image-container">
                <div className="square-shape"></div>
                <img
                  src={code}
                  alt="London website design"
                  className="image"
                  style={{ marginBottom: "60px" }}
                />
                <div className="circle-shape"></div>
                <img
                  src={paul}
                  alt="London Web Designers"
                  className="image"
                  style={{ marginTop: "60px" }}
                />
              </div>
            </div>
            <div className={`${second ? "anim" : "none"}`}>
              <div className="subtitle">website Design Built Around You</div>
              <h2 className="main-title">Our Client Focused Approach</h2>
              <div className="divider" />

              <HowitWorks
                card1Gif={meeting}
                card1Title="Discovery Call"
                card1P="Conducting a video call helps us to get to know each other. Discovery calls are important to help us understand
                  your projects needs."
                link1="https://calendly.com/immutable-studio/website-consultancy"
                text1="book a call"
                card2Gif={design}
                card2Title="Proposal and Design"
                card2P="A proposal is drawn up and you will be invited to your client portal for you to track progress. We will then create designs for your approval."
                link2="/portfolio"
                text2="our clients"
                card3Gif={webdev}
                card3Title="Draft & Completion"
                card3P="When the design is approved development begins. A draft will be hosted for approval. Once approved your 
                site is ready to complete"
                link3="/contact"
                text3="contact us"
                card4Gif={chatbot}
                card4Title="Ongoing Support"
                card4P="We offer ongoing support with hosting, website maintenance and SEO. Our support gives you peace-of-mind, we'll be
                      on hand to help."
                link4="/services/seo-website-maintenance"
                text4="maintenance"
                text="Explore our Portfolio"
                link="/portfolio"
              />
            </div>
          </div>
        </section>
        <section className={`third-section ${third ? "anim" : ""}`}>
          <div className="third-inner">
            <div className={`${third ? "anim" : "none"}`}>
              <TeamCard />
            </div>
          </div>
          <CallToAction />
        </section>
      </div>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>
              About Us | Immutable Studio – Creative Web Design & AI Solutions
            </title>
            <link
              rel="canonical"
              href="https://www.immutable-studio.co.uk/about-us"
            />
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
