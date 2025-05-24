import React, { Suspense, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "../../components/button";
import PriceCard from "../../components/cards/basicPrice";
import CallToAction from "../../components/CTA";
import vid from "../../assets/images/london.mp4";
import fallback from "../../assets/images/london.webp";
import WorkCard from "../../components/cards/work";
import HowitWorks from "../../components/howItWorks";
import webdev from "../../assets/images/layout.mp4";
import client from "../../assets/images/client.mp4";
import mobile from "../../assets/images/mobile.mp4";
import ai from "../../assets/images/ai.mp4";
import code from "../../assets/images/service-1.webp";
import paul from "../../assets/images/packages.webp";
import Links from "../../components/links";
import useScrollStates from "../../components/scrollState";
import LoadingSpinner from "../../components/loadingSpinner";

const LazyVideo = React.lazy(() => import("../../components/LazyVideo"));

const Services = () => {
  const { second, third, fourth } = useScrollStates();
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
      <div className="serivces-page">
        <section className="hero">
          <Suspense fallback={<LoadingSpinner />}>
            <LazyVideo
              src={vid}
              type="video/mp4"
              className="video"
              fallback={fallback}
              alt="Web design in greenwich south east London, London UK"
            />
          </Suspense>
          <div className="hero-inner">
            <div className="text-box">
              <h1 className="title">Our Services</h1>
              <p>
                The services we provide will turn your ideas into amazing
                solutions. We offer a full range of website development, website
                maintenance, hosting and, AI solutions services with flexible
                pricing.
              </p>
              <div className="btn-container">
                <Button text="Get Started" link="/discovery-form" color='#000' />
                <Button
                  text="book a call"
                  link="https://calendly.com/immutable-studio/website-consultancy"
                  target="_blank"
                  background="var(--third-bg)"
                  color="var(--second)"
                />
              </div>
            </div>
            <Links
              dev="web-development"
              seo="seo-website-maintenance"
              ai="ai-assistants"
              pack="packages"
            />
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
            <div className={`${second ? "anim" : "none"}`}>
              <i className="subtitle">Our commitments</i>
              <h2 className="main-title">Why Choose Us</h2>
              <p className="text-box">
                We design modern websites, build AI chat assistants, streamline
                business workflows, and offer reliable SEO and maintenance
                services. Whether you need one service or a full package, our
                solutions are flexible, scalable, and tailored to your goals.
              </p>
              <HowitWorks
                card1Gif={client}
                card1Title="Client Service"
                card1P=" Customer service is a commitment and it shapes
                      every aspect of our business. From discovery to final
                      delivery."
                link1="/portfolio"
                text1="Our Clients"
                card2Gif={ai}
                card2Title="AI Solutions"
                card2P="We create custom automated
                      workflows &amp; AI solutions, tailored to your business
                      saving you time &amp; money with repetitive tasks."
                link2="ai-assistants"
                text2="AI Solutions"
                card3Gif={webdev}
                card3Title="User Experience"
                card3P="We design user journeys focusing
                      on simplicity &amp; ease of use. By providing seamless
                      browsing, we engage visitors &amp; inspire them to take
                      action."
                link3="/contact"
                text3="get in touch"
                card4Gif={mobile}
                card4Title="Mobile-First"
                card4P="It's a mobile-driven world! Our designs are optimised for all devices,
                      ensuring a flawless experience on phones, tablets &amp;
                      desktops."
                link4="web-development"
                text4="web development"
                text="find out about us"
                link="/about-us"
              />
            </div>
            <div
              className={`top-container reverse ${second ? "anim" : "none"}`}
            >
              <div className="second-text reverse">
                <h2 className="main-title">What Drives Us</h2>
                <p style={{ paddingBottom: "2rem" }}>
                  We're here to make your life easier. From first concept to
                  final launch, we collaborate closely with you to deliver
                  results that are beautiful, functional, and impactful. Expect
                  clear communication, transparent pricing, and ongoing support.
                </p>
                <i className="subtitle">Its about you</i>
                <p>
                  Whether you are a small business or a large corporation, we
                  can help you achieve your goals. Our team of experts will work
                  with you to create a custom solution that meets your needs. We
                  are committed to providing you with the best possible service
                  and support.
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
          </div>
        </section>
        <section className="third-section">
          <div className="third-inner">
            <div className={`${third ? "anim" : "none"}`}>
              <div className="text-box">
                <i className="subtitle">Transparent Pricing</i>
                <h2 className="main-title">our starting prices</h2>
                <p>
                  At the heart of what we do is a commitment to transparency and
                  building strong, lasting relationships with our clients. We
                  believe clear communication and trust are key to successful
                  partnerships, and we're here to support you every step of the
                  way.
                </p>
                <p>
                  Our pricing is straightforward, with no hidden fees—just
                  honest, reliable services tailored to your goals. We
                  understand the importance of budgeting, especially for growing
                  businesses, so our packages are designed to scale with you as
                  your needs evolve.
                </p>
              </div>
              <PriceCard name="pricing" link="/discovery-form" />
              <CallToAction />
            </div>
          </div>
        </section>
        <section className="forth-section">
          <div className="forth-inner">
            <div className={`${fourth ? "anim" : "none"}`}>
              <WorkCard background="var(--second-section)" />
            </div>
          </div>
        </section>
      </div>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>
              Services | Immutable Studio – Creative Web Design & AI Solutions
            </title>
            <link
              rel="canonical"
              href="https://www.immutable-studio.co.uk/services"
            />
            <meta
              name="description"
              content="Explore our range of web design, development, and AI solutions at Immutable Studio. We offer services tailored to help businesses grow in the digital space."
            />
            <meta
              name="keywords"
              content="Website design agency, Website Design, Website Development, Web design, AI Solutions, Chatbot, workflows, automated, Business, London, 
              Greenwich London, custom website design services in London, AI chatbot solutions for small businesses in Greenwich,
               web design agency in South East London, web design agency in London, web design agency in Greenwich,"
            />
            <meta
              property="og:title"
              content="Services | Immutable Studio – Creative Web Design & AI Solutions"
            />
            <meta
              property="og:description"
              content="Explore our range of web design, development, and AI solutions at Immutable Studio."
            />
            <meta
              property="og:image"
              content="https://immutable-studio.co.uk/1-removebg-preview.OTVxQdl4.webp"
            />
            <meta
              property="og:url"
              content="https://www.immutable-studio.co.uk/services"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Services;
