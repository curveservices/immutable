import img from "../../../assets/images/service-1.jpeg";
import gif from "../../../assets/images/webDev.gif";
import Singleservices from "../../SingleService/";

const WebDev = () => {
  return (
    <Singleservices
      HeroH1="Website Development"
      HeroP="For a competitive edge, business elevation, and broader audience
              reach, a compelling web presence is essential. Immutable Studio
              specialises in tailoring web development solutions, ensuring
              businesses achieve distinctive online success through custom
              solutions."
      HeroH2="We build custom responsive websites from just £595 + vat"
      src={gif}
      secondH1="Transform your online presence with expert design solutions"
      secondP="Frustrated with an outdated website that lacks engagement and
              conversions? Immutable Studio excels in crafting visually
              stunning, functional websites, elevating your online presence. Our
              skilled web designers blend creativity, technical know-how, and
              industry insight to deliver exceptional results aligned with your
              business objectives."
      img={img}
      thirdH1="CUSTOM OR WORDPRESS WEBSITE"
      thirdP="We emphasise clear communication and robust client relationships.
              Our services include transparent, budget-friendly pricing with
              detailed breakdowns. With scalable packages, we guarantee your
              website chatbot adapts to evolving business needs, highlighting
              flexibility and alignment with your goals as you grow."
      name="webDev"
    />
  );
};

export default WebDev;
