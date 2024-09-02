import { HelmetProvider } from "react-helmet-async";
import CallToAction from "../../CTA";
import Button from "../../button";
import PriceCard from "../../cards/fullPrice";
import Links from "../../links";
import "./index.scss";
import { Helmet } from "react-helmet";

const Pricing = () => {
  return (
    <>
      <section className="pricing-page">
        <section className="hero">
          <div className="inner-hero">
            <div className="text-box">
              <h1 className="title">Our Pricing</h1>
              <p className="fadeInUp">
                We believe in transparency and building strong relationships
                with our clients. We offer straightforward pricing & understand
                the importance of budgeting. Packages can be expanded as your
                business grows.
              </p>
              <p className="fadeInUp">
                Customer service is more than a commitment, it shapes every
                aspect of our business. From discovery to final delivery, we
                prioritise understanding your visions &amp; goals. We also offer
                custom built packages with custom pricing.
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
            <Links
              webLink="#web-development"
              aiLink="#ai-solutions"
              digitalLink="#digital-marketing"
              packagesLink="#packages"
            />
          </div>
        </section>
        <section className="light-section">
          <div className="light-inner">
            <div className="text-box" id="web-development">
              <h2>Website Development</h2>
              <p>
                For a competitive edge, business elevation, and broader audience
                reach, a compelling web presence is essential. We specialise in
                tailoring web development solutions, ensuring businesses achieve
                online success through custom solutions.
              </p>
              <p>
                We build custom responsive websites from just £559 or £49 per
                month
              </p>
            </div>
            <div>
              <PriceCard name="webDev" color="#000" />
            </div>
          </div>
        </section>
        <section className="dark-section">
          <div className="dark-inner">
            <div className="text-box" id="ai-solutions">
              <h2>AI SOLUTIONS</h2>
              <p>
                Seeking AI solutions for your business? Let us ease your
                challenges with AI solutions. Our expertise enables automation
                and outsourcing of daily tasks using cutting-edge AI technology,
                streamlining your operations for increased efficiency.
              </p>
              <p>
                We build tailored AI chatbots, starting from just £289, or £59
                per month.
              </p>
            </div>
            <div>
              <PriceCard name="ChatBots" color="#fff" />
            </div>
          </div>
        </section>
        <section className="light-section">
          <div className="light-inner">
            <div className="text-box" id="digital-marketing">
              <h2>DIGITAL MARKETING</h2>
              <p>
                Our proficient media content team is available to assist in
                creating ad campaigns and social content, leveraging the latest
                trends and analytics to propel your social projects forward.
              </p>
              <p>We build digital media templates start from just £85</p>
            </div>
            <div>
              <PriceCard name="SocialMedia" color="#000" />
            </div>
          </div>
        </section>
        <section className="dark-section">
          <div className="dark-inner">
            <div className="text-box" id="packages">
              <h2>PACKAGES</h2>
              <p>
                Seeking AI solutions for your business? Let us ease your
                challenges with an online chatbot. Our expertise enables
                automation and outsourcing of daily tasks using cutting-edge AI
                technology, streamlining your operations for increased
                efficiency.
              </p>
              <p>
                We build tailer made business packages starting from just £849
                or £99 per month.
              </p>
            </div>
            <div>
              <PriceCard name="Packages" color="#fff" />
            </div>
          </div>
        </section>
        <section className="cta">
          <CallToAction />
        </section>
      </section>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>Pricing | Immutable Studio Web Development Agency</title>
            <meta
              name="keywords"
              content="Website, Website Design, Website Development, Web design, AI Solutions, Chatbot, Empowering, workflows, automated, Business, London, Greenwich London"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Pricing;
