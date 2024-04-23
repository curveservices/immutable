import gif from '../../../assets/images/chatbot-unscreen.gif';
import img from '../../../assets/images/chatbot-image.jpeg'
import Singleservices from '../../SingleService/';

const ChatBots = () => {
  return (
    <Singleservices
      HeroH1="Website Chat Bots"
      HeroP="Seeking AI solutions for your business? Let us ease your
              challenges with AI solutions. Our expertise enables
              automation and outsourcing of daily tasks using cutting-edge AI
              technology, streamlining your operations for increased efficiency."
      HeroH2="We build tailored AI chatbots, starting from just £795 + vat."
      src={gif}
      secondH1="Convert web traffic to sales using AI solutions."
      secondP="Tired of low website conversions? We excel in
              creating functional AI solutions integrated to your
              website. Our tech experts leverage cutting-edge AI &amp; 
              industry insight to optimise amazing cuustomer service around the clock."
      img={img}
      thirdH1="CHATBOT"
      thirdP="We emphasise clear communication and robust client relationships.
              Our services include transparent, budget-friendly pricing with
              detailed breakdowns. Packages can be expanded as your
              business grows."
      name="ChatBots"
    />
  );
};

export default ChatBots;
