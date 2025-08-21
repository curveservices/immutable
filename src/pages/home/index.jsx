import React, { Suspense, useEffect} from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MarqueeComp from "../../components/marquee";
import Button from "../../components/button/index";
import CallToAction from "../../components/CTA";
import WorkCard from "../../components/cards/work";
import vid from "../../assets/images/bg.mp4";
import ExitIntentPopup from "../../components/exitIntentPopup";
import webdev from "../../assets/images/layout.mp4";
import seo from "../../assets/images/keywords.mp4";
import ai from "../../assets/images/ai.mp4";
import packing from "../../assets/images/packing.mp4";
import paul from "../../assets/images/paul.webp";
import code from "../../assets/images/code.webp";
import HowitWorks from "../../components/howItWorks";
import GoogleReviews from "../../components/googleReviews";
import Socials from "../../components/socials";
import useScrollStates from "../../components/scrollState";
import LoadingSpinner from "../../components/loadingSpinner";
const LazyVideo = React.lazy(() => import("../../components/LazyVideo"));
const Typewriter = React.lazy(() => import("../../components/customTypewriter"));

const Home = () => {
  const {second, third, fourth} = useScrollStates();

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
      <div className="home-page">
        <ExitIntentPopup />
        <section className="hero">
          <Suspense fallback={<LoadingSpinner />}>
            <LazyVideo
              alt="Website design in Greenwich south east London, London"
              src={vid}
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
          <div className="text-box">
            <h1 className="main-title">London Web Design Services</h1>
            <div className="typewriter">
              <Suspense fallback={<LoadingSpinner />}>
                <Typewriter
                  strings={[
                    "Website Development.",
                    "Maintenance & SEO.",
                    "AI Chat Assistants.",
                    "Website Design.",
                    "AI Solutions.",
                  ]}
                  typingSpeed={75}
                  deletingSpeed={40}
                  pauseTime={1500}
                  loop
                />
              </Suspense>
            </div>
            <div className="text">
              <p>
                We are a website design agency based in Greenwich, London. We
                Specialise in a range of digital products from webite
                maintenance &amp; SEO to re-design &amp; AI assistants that will
                transform your online presence.
              </p>
              <div className="btn-container">
                <Button
                  link="https://calendly.com/immutable-studio/website-consultancy"
                  text="call us"
                  target="_blank"
                  color="#000"
                />
                <Button
                  link="discovery-form"
                  text="get started"
                  background="var(--third-bg)"
                  color="#fff"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="second-section">
          <div className="second-inner">
            <div className={`top-container ${second ? "anim" : "none"}`}>
              <div className="second-text">
                <i className="subtitle">Our Services</i>
                <h2 className="main-title">What We Do for you</h2>
                <p style={{ paddingBottom: "2rem" }}>
                  From custom websites to AI assistants and SEO, we bring your
                  digital ideas to life—built to elevate your business online.
                  We focus on smart, effective solutions that deliver real
                  results.
                </p>
                <i className="subtitle">Web design is an art</i>
                <p>
                  At Immutable Studio in London we are the artists. We use the
                  power of technology to design bespoke websites on all major
                  CMS and frameworks.
                </p>
              </div>
              <div className="image-container">
                <div className="square-shape"></div>
                <img
                  src={code}
                  alt="London website design"
                  className="image"
                  style={{ marginBottom: "60px" }}
                  loading="lazy"
                />
                <img
                  src={paul}
                  alt="London Web Designers"
                  className="image"
                  style={{ marginTop: "60px" }}
                  loading="lazy"
                />
                <div className="circle-shape"></div>
              </div>
            </div>
            <div className={`${second ? "anim" : "none"}`}>
              <HowitWorks
                card1Gif={webdev}
                card1Title="Website Design"
                card1P="We build responsive websites that look and feel amazing on all devices
                    – desktops, laptops and mobiles. Let us help you create the perfect website."
                link1="/services/web-development"
                text1="Find out more"
                card2Gif={seo}
                card2Title="SEO & Maintenance"
                card2P="We offer a range of maintenace plans, starting with a free SEO &amp; performance
                     audit. We'll manage your site with ease so you don't have to."
                link2="/services/seo-website-maintenance"
                text2="find out more"
                card3Gif={ai}
                card3Title="AI Solutions"
                card3P="Our AI assistants are trained on your business and website. Answering FAQ's, taking bookings and more.
                    All seamlessly intergrated to your website and systems."
                link3="services/ai-assistants"
                text3="find out more"
                card4Gif={packing}
                card4Title="Packages"
                card4P="Wrap all of our services up into convienent business packages.
                    We offer a range of website development, AI solutions, analytics and workflow automation."
                link4="/services/packages"
                text4="find out more"
                text="See all our services"
                link="services"
              />
            </div>
            <div className={`home-marquee ${second ? "anim" : "none"}`}>
              <MarqueeComp />
            </div>
          </div>
        </section>
        <section className="third-section">
          <div className="third-inner">
            <div className={`${third ? "anim" : "none"}`}>
              <WorkCard />
            </div>
          </div>
        </section>
        <section className="forth-section">
          <div className="forth-inner">
            <div className={`${fourth ? "anim" : "none"}`}>
              <GoogleReviews />
              <div
                className="subtitle"
                style={{ textAlign: "center", paddingBottom: "2rem" }}
              >
                <i>Stay Up To Date And Follow Us!</i>
              </div>
              <Socials
                fblink="https://www.facebook.com/profile.php?id=61557552873479"
                lilink="https://www.linkedin.com/company/21439623"
                instalink="https://www.instagram.com/immutable_studio/"
              />
            </div>
          </div>
        </section>
        <CallToAction />
      </div>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>
              Web Design Agency in London | Immutable Studio – Creative Web
              Design & AI Solutions
            </title>
            <link rel="canonical" href="https://www.immutable-studio.co.uk" />
            <meta
              name="description"
              content="Immutable Studio is a leading web design agency in London, offering website development, responsive design, and AI solutions to help your business grow."
            />
            <meta
              name="keywords"
              content="Website, Website Design, Website Development, Web design, AI Solutions, website management services, creative web design london,
               Chatbot, web design greenwich, web design London, web design in Greenwich, london web studio, 
               custom website design services in London, AI chatbot solutions for small businesses in Greenwich,
               web design agency in South East London, web design agency in London, web design agency in Greenwich,"
            />
            <meta
              property="og:title"
              content="Web Design Agency in London | Immutable Studio"
            />
            <meta
              property="og:description"
              content="Explore Immutable Studio for innovative website design, development, and AI solutions tailored to your business needs."
            />
            <meta
              property="og:image"
              content="https://immutable-studio.co.uk/1-removebg-preview.OTVxQdl4.webp"
            />
            <meta
              property="og:url"
              content="https://www.immutable-studio.co.uk"
            />
            <meta property="og:type" content="website" />
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

export default Home;
