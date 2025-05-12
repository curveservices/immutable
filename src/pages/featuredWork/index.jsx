import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { Suspense, useEffect} from "react";
import Button from "../../components/button";
import PriceCard from "../../components/cards/fullPrice";
import CTA from "../../components/CTA";
import vid from "../../assets/images/working.mp4";
import working from "../../assets/images/working.webp";
import Socials from "../../components/socials";
import PortfolioProject from "../../components/portfolioProject";
import useFirestoreData from "../../components/useFirestoreData";
import LoadingSpinner from '../../components/loadingSpinner';
import GoogleReviews from "../../components/googleReviews";
import useScrollState from '../../components/scrollState/index';
const LazyVideo = React.lazy(() => import("../../components/LazyVideo"));

const FeaturedWork = () => {
  const { cardsData, loading, error } = useFirestoreData('portfolio');
  const {second } = useScrollState()
 
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
  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-messsage">Error: {error}</div>;
  return (
    <>
      <div className="featured-work">
        <section className="hero">
          <Suspense fallback={<LoadingSpinner />}>
            <LazyVideo
              src={vid}
              type="video/mp4"
              fallback={working}
              className="video"
              alt="Website design London"
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
                <Button
                  text="Discovery form"
                  link="/discovery-form"
                  background="var(--third-bg)"
                  color="var(--second)"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="clients">
          <div className={`main-text  ${second ? "anim" : "none"}`}>
            <i className="subtitle">Our Portfolio</i>
            <h2>Recent Projects</h2>
            <p>
              Here’s a selection of our recent projects across the digital
              landscape.
            </p>
          </div>
          <PortfolioProject cardsData={cardsData} />
          <div className="container-footer">
            <h2>Fill Out Our Client Discovery Form</h2>
            <p>
              The ultimate worksheet to help you collect all the information,
              ideas and prep work you need before starting your project with us.
            </p>
            <div className="btn-container">
              <Button
                text="client discovery form"
                link="/discovery-form"
                background="var(--third-bg)"
                color="var(--second)"
              />
            </div>
          </div>
        </section>
        <section className="third-section">
          <div className="text-box">
            <i className="subtitle">Transparent Pricing</i>
            <h2 className="main-title">our starting prices</h2>
            <p>
              Our pricing is straightforward, with no hidden fees—just honest,
              reliable services tailored to your goals. We understand the
              importance of budgeting, especially for growing businesses, so our
              packages are designed to scale with you as your needs evolve.
            </p>
          </div>
          <PriceCard name="pricing" color="#fff" link="/discovery-form" />
        </section>
        <div className={`forth-section`}>
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
        <CTA />
      </div>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>
              Portfolio | Immutable Studio – Creative Web Design & AI Solutions
            </title>
            <link
              rel="canonical"
              href="https://www.immutable-studio.co.uk/portfolio"
            />
            <meta
              name="description"
              content="Our featured work will help you understand what we do and who we work with. We build fast, responsive websites and create AI solutions."
            />
            <meta
              name="keywords"
              content="featured work, website design agency, web development, Immutable Studio, web design, website design, AI solutions, chatbots, workflow automation, automation, digital agency"
            />
            <meta
              property="og:title"
              content="Portfolio | Immutable Studio – Creative Web Design & AI Solutions"
            />
            <meta
              property="og:description"
              content="Check out our featured projects showcasing fast, responsive websites and AI solutions."
            />
            <meta
              property="og:image"
              content="https://immutable-studio.co.uk/1-removebg-preview.OTVxQdl4.webp"
            />
            <meta
              property="og:url"
              content="https://www.immutable-studio.co.uk/portfolio"
            />
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
                  "url": "https://www.immutable-studio.co.uk/portfolio",
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
