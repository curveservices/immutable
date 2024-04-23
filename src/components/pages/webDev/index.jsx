import img from "../../../assets/images/service-1.jpeg";
import gif from "../../../assets/images/webDev.gif";
import Singleservices from "../../SingleService/";

const WebDev = () => {
  return (
    <Singleservices
      HeroH1="Website Development"
      HeroP="For a competitive edge, business elevation, and broader audience
              reach, a compelling web presence is essential. We
              specialise in tailoring web development solutions, ensuring
              businesses achieve online success through custom
              solutions."
      HeroH2="We build custom responsive websites from just £595 + vat"
      src={gif}
      secondH1="Transform your online presence with expert solutions"
      secondP="Frustrated with an outdated website that lacks engagement and
              conversions? We excel in crafting visually
              appealing, functional websites, elevating your online presence. Our
              skilled web designers blend creativity and
              industry insight to deliver results aligned with your
              business goals."
      img={img}
      thirdH1="CUSTOM OR WORDPRESS WEBSITE"
      thirdP="We emphasise clear communication and robust client relationships.
              Our services include transparent, budget-friendly pricing with
              detailed breakdowns."
      name="webDev"
    />
  );
};

export default WebDev;
