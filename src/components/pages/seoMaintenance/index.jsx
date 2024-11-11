import img from "../../../assets/images/maintenance.webp";
import gif from "../../../assets/images/webDev.gif";
import ExitIntentPopup from "../../exitIntentPopUp";
import Singleservices from "../../SingleService";

const SeoMaintenance = () => {
  return (
    <>
    <ExitIntentPopup/>
    <Singleservices
      title="Website Maintenance and SEO"
      keywords="website design, website maintenance, SEO, search engine optimization, hosting, website maintenance services, digital maintenance, Greenwich, London,Immutable Studio"
      HeroH1="Website Maintenance & SEO"
      HeroP="We can look after your website for you, everything from content to SEO, and we do it all in-house. If you're looking
      for a friendly, UK-based website maintenance agency to look after your website you can book a call, contact us directly or fill out our client discovery form."
      HeroH2="Our SiteCare plans start from just £40 per month."
      src={gif}
      secondH1="What do we maintain?"
      secondP="Many content management systems and website builders work in similar ways, 
      so we’ve got the experience to help you with whatever system you use. 
      From a WordPress site to a custom-built site, we can help support and improve your website."
      p="We build SEO sitemaps and ensure your webite is up to date with best SEO practices, on and off page"
      img={img}
      thirdH1="MAINTENANCE"
      thirdP="We prioritise transparent communication &amp; strong client bonds.
              Our services for SEO and website maintenance are based on a retainer model."
      name="maintenance"
      />
      </>
  );
};

export default SeoMaintenance;
