import gif from "../../../assets/images/packages-unscreen.gif";
import img from "../../../assets/images/packages.webp";
import Singleservices from "../../SingleService/";

const Packages = () => {
  return (
    <Singleservices
      title="Packages"
      keywords="website design agency, business packages , web development, AI solutions, chatbots, workflow automation, digital agency, Immutable Studio, web design"
      HeroH1="Business Packages"
      HeroP="Are you seeking an all-in-one website solution? We build comprhensive
              website packages which include a fully custom built website with an AI chat assistant,
              free domain name registration, SEO audits and monthly maintenance. We also offer AI automation
              for you business workflows to help streamline your day to day tasks.
                "
      HeroH2="We build tailer made business packages starting from just £960 or £100 per month."
      src={gif}
      secondH1="Need full online &amp; AI solutions?"
      secondP=" Our custom packages integrate cutting-edge AI solutions, from
              chatbot integration to advanced AI workflows and platforms. Our
              goal is to alleviate your pain points, saving you time and money."
      p="Our full packages include site maintenance, hosting and unlimited AI usage  with GPT-4o and DALL·E."
      img={img}
      thirdH1="BUSINESS"
      thirdP="We prioritise transparent communication and strong client bonds.
              Our services are retainer based. Through scalable packages, we ensure your website, 
              SEO and AI chat assistant evolves alongside your business."
      name="Packages"
    />
  );
};

export default Packages;
