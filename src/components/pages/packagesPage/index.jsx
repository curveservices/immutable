import gif from "../../../assets/images/packages-unscreen.gif";
import img from "../../../assets/images/packages.jpeg";
import Singleservices from "../../SingleService/singleService";


const Packages = () => {
  
  return (
    <Singleservices
      HeroH1="Business Packages"
      HeroP="Seeking AI solutions for your business? Let us ease your
              challenges with an online chatbot. Our expertise enables
              automation and outsourcing of daily tasks using cutting-edge AI
              technology, streamlining your operations for increased efficiency.
"
      HeroH2="We build tailer made business packages starting from just £995 +
              vat"
      src={gif}
      secondH1="In need of full online website and AI solutions?"
      secondP=" Our custom packages integrate cutting-edge AI solutions, from
              chatbot integration to advanced AI workflows and platforms. Our
              goal is to alleviate your pain points, saving you time and money.
"
      img={img}
      thirdH1="BUSINESS"
      thirdP="We prioritise transparent communication and strong client bonds.
              Our services offer clear, budget-friendly pricing with detailed
              breakdowns. Through scalable packages, we ensure your website
              chatbot evolves alongside your business, emphasising adaptability
              and alignment with your goals as you expand."
      name="Packages"
    />
  );
};

export default Packages;
