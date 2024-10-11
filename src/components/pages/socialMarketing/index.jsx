import img from "../../../assets/images/social.jpeg";
import gif from "../../../assets/images/social-unscreen.gif";
import Singleservices from "../../SingleService/";

const DigitalMarketing = () => {
  return (
    <Singleservices
      title="Digital Marketing"
      keywords="web development, media content, social content, social media, social, AI solutions, chatbots, Digital marketing, Immutable Studio"
      HeroH1="Digital Marketing"
      HeroP="Our proficient media content team is available to assist in
              creating ad campaigns and social content, leveraging the latest
              trends and analytics to propel your social projects forward.
"
      HeroH2="We build digital media templates start from just £85"
      src={gif}
      secondH1="Elevate social presence with our professional template designs."
      secondP="In the competitive digital landscape, brand distinction is
              crucial. Our agency excels in creating unique social media
              templates. Leveraging design and branding expertise, we ensure
              lasting impact, meaningful connections, and ongoing online success
              for your business."
      img={img}
      thirdH1="DIGITAL MARKETING"
      thirdP="We prioritise transparent communication &amp; strong client bonds.
              Our services for digial marketing are based on a retainer model."
      name="SocialMedia"
    />
  );
};

export default DigitalMarketing;
