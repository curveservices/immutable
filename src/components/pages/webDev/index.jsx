import img from "../../../assets/images/service-1.jpeg";
import gif from "../../../assets/images/webDev.gif";
import Singleservices from "../../SingleService/";

const WebDev = () => {
  return (
    <Singleservices
      title="Website Development"
      keywords="web development, business, online, custom, react, wordpress, woo-commerce, AI solutions, chatbots, workflow automation, Immutable Studio"
      HeroH1="Website Development"
      HeroP="For a competitive edge, business elevation, and broader audience
              reach, a compelling web presence is essential. We
              specialise in tailoring web development solutions, ensuring
              businesses achieve online success through custom
              solutions."
      HeroH2="We build custom responsive websites from just £595 + vat"
      src={gif}
      secondH1="Transform your online presence"
      secondP="Frustrated with an outdated website that lacks engagement and
              conversions? We excel in crafting visually
              appealing, functional websites, elevating your online presence."
      p="We offer a range of website solutions from Wordpress and Woo-commerce sites to custom built hard coded, scalable websites.
        We also offer help with maintence and hosting."
      img={img}
      thirdH1="CUSTOM OR WORDPRESS WEBSITE"
      thirdP="We emphasise clear communication and robust client relationships.
              Our services are based on a retainer model which inclused maintence, full support and hosting."
      name="webDev"
    />
  );
};

export default WebDev;
