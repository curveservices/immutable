import gif from "../../assets/images/chatbot-unscreen.gif";
import img from "../../assets/images/assistants.webp";
import nyx from "../../assets/images/nyx.webp";
import immie from "../../assets/images/immie.webp";
import chipo from "../../assets/images/chipo.webp";
import Singleservices from "../../components/SingleService";

const ChatBots = () => {
  return (
    <Singleservices
      page="ai"
      title="AI Assistants"
      canonicalUrl="https://immutable-studio.co.uk/services/ai-assistants"
      keywords="AI, AI Solutions, Chatbots, ai website development in london, Website Development, immutable ai, ai web agency london, london ai agency, Immutable Studio, greenwich London, London, web design, website design, web development"
      HeroH1="AI Automated Assistants"
      HeroP="Seeking AI solutions for your business? We can ease your
              daily work load with our latest & greatest assistants. Our expert assistants
              will complete daily tasks using cutting-edge AI
              technology, streamlining your operations has never been easier."
      HeroH2="Our tailor built AI asistants start from just £420, or £50 per month"
      src={gif}
      secondH1="Want to alleviate your work load?"
      secondP="From social media to e-commerce our AI assistants are trained on your business. 
              These helpful little workers will complete daily tasks, providing their services around the clock."
      p="Our range of assitants help in your day to day work helping to relieve pain points within your busness"
      img={img}
      alt="AI assistants, ai web agency london, ai website development in london, Greenwich London and South East London, UK"
      thirdH1="ASSISTANT"
      thirdP="We emphasise clear communication and robust client relationships.
              Our business model is retainer based for AI &amp; automation services. 
              Solutions are hosted from our platforms, monthly audits and maintence are included 
              in the monthly fee. Packages can be expanded as your
              business grows."
      img1={nyx}
      assistant1="Nyx"
      title1="Social Media Agent"
      img2={immie}
      assistant2="Immie"
      title2="Customer Service"
      img3={chipo}
      assistant3="Chipo"
      title3="Warehouse Manager"
      name="ChatBots"
    />
  );
};

export default ChatBots;
