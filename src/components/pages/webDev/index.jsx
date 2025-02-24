import img from "../../../assets/images/service-1.webp";
import gif from "../../../assets/images/webDev.gif";
import Singleservices from "../../SingleService/";

const WebDev = () => {
  return (
    <Singleservices
      page="webdev"
      title="Website Development"
      canonicalUrl="https://immutable-studio.co.uk/services/web-development"
      keywords="web development, web design, website design, wordpress, woo-commerce, AI solutions, chatbots, workflow automation, Immutable Studio, greenwich, London"
      HeroH1="Website Development"
      HeroP="For a competitive edge, business elevation, and broader audience
              reach, a compelling web presence is essential. We
              specialise in tailoring web development solutions, ensuring
              businesses achieve online success through custom
              solutions."
      HeroH2="We build custom responsive websites from just £250 or £25 per month"
      src={gif}
      secondH1="Transform your online presence"
      secondP="Frustrated with an outdated website that lacks engagement and
              conversions? We excel in crafting visually
              appealing, functional websites, elevating your online presence."
      p="We offer a range of website solutions from Wordpress and Woo-commerce sites to custom built hard coded, scalable websites.
        We also offer help with maintence and hosting."
      img={img}
      alt="Custom web development and design in Greenwich London and South East London"
      thirdH1="WEBSITE"
      thirdP="We emphasise clear communication and robust client relationships.
              Our services are based on a retainer model which include maintence, full support and hosting."
      name="webDev"
    />
  );
};

export default WebDev;
