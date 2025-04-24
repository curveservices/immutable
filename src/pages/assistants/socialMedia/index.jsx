import SingleAssistant from "..";
import header from "../../../assets/images/nyx-header.webp";
import asst1 from "../../../assets/images/nyx1.webp";
import asst from "../../../assets/images/nyx.webp";
import asst2 from "../../../assets/images/nyx2.webp";
const SocialMedia = () => {
  return (
    <SingleAssistant
      header={header}
      assistant={asst}
      altName="Nyx"
      heroTitle="Your Social Media Agent"
      secondP="Meet Nyx a social media genius, trained in all things social. Nyx will create and execute social media posts accross all platforms she also creates content
      calendars. Pick your preferred platforms and Nyx will post everything for you."
      img2={asst1}
      li1="Create an indepth 8 week content calendar for you to implement into your current system."
      li2="Create content and send it for your approval."
      li3="Create and add an image, or you can create your own image or video."
      li4="Post accross your social platforms."
      thirdP="Nyx will be fully trained on your business, and will take
      care of your socials automatically and with ease."
      thirdImg={asst2}
    />
  );
};

export default SocialMedia;
