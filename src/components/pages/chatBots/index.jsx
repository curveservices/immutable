import gif from "../../../assets/images/chatbot-unscreen.gif";
import img from "../../../assets/images/chatbot-image.jpeg";
import Singleservices from "../../SingleService/";

const ChatBots = () => {
  return (
    <Singleservices
      title="AI Solutions"
      keywords="AI, AI Solutions, Chatbots, Automation, Website Development, workflow automation, digital marketing, Immutable Studio, greenwich London, London, web design, web development"
      HeroH1="AI &amp; Automation Solutions"
      HeroP="Seeking AI solutions for your business? Let us ease your
              challenges with AI solutions. Our expertise enables
              automation and outsourcing of daily tasks using cutting-edge AI
              technology, streamlining your operations for increased efficiency."
      HeroH2="We build tailored AI chatbots, starting from just £270, or £25 per month"
      src={gif}
      secondH1="Convert web traffic to sales using AI solutions."
      secondP="Tired of low website conversions? We excel in
              creating functional AI solutions integrated to your
              website. Our tech experts leverage cutting-edge AI &amp; 
              industry insight to optimise amazing customer service around the clock.
              "
      p="We offer custom GPT's for WhatsApp, Messenger, Instagram &amp; more"
      img={img}
      thirdH1="CHATBOT"
      thirdP="We emphasise clear communication and robust client relationships.
              Our business model is retainer based for AI &amp; automation services. Solutions are hosted from our platforms, monthly audits and maintence are included 
              in the monthly fee. Packages can be expanded as your
              business grows."
      name="ChatBots"
    />
  );
};

export default ChatBots;
