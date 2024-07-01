import gif from "../../../assets/images/packages-unscreen.gif";
import img from "../../../assets/images/packages.jpeg";
import Singleservices from "../../SingleService/";

const Packages = () => {
  return (
    <Singleservices
      title="Packages"
      keywords="Business, business packages ,web development, AI solutions, chatbots, workflow automation, digital marketing, Immutable Studio, web design"
      HeroH1="Business Packages"
      HeroP="Seeking AI solutions for your business? Let us ease your
                        challenges with an online chatbot. Our expertise enables
                        automation and outsourcing of daily tasks using cutting-edge AI
                        technology, streamlining your operations for increased efficiency.
                "
      HeroH2="We build tailer made business packages starting from just £849 +
              vat or £99 + vat per month."
      src={gif}
      secondH1="Need full online &amp; AI solutions?"
      secondP=" Our custom packages integrate cutting-edge AI solutions, from
              chatbot integration to advanced AI workflows and platforms. Our
              goal is to alleviate your pain points, saving you time and money."
      p="Our full packages include site maintenance, hosting and unlimited AI usage  with GPT-4o and DALL·E."
      img={img}
      thirdH1="BUSINESS"
      thirdP="We prioritise transparent communication and strong client bonds.
              Our services are retainer based. Through scalable packages, we ensure your website &amp;
              GPT evolves alongside your business."
      name="Packages"
    />
  );
};

export default Packages;
