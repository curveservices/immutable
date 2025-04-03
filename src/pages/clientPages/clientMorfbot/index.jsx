import React from "react";
import Client from "../../../components/cards/ClientWork";
import video from "../../../assets/images/morfbot.mp4";
import header from "../../../assets/images/morfbot-head.webp";

const Morbot = () => {
  return (
    <>
      <section className="client-page">
        <Client
          name="morfbot"
          src={header}
          titleP="Supercharging business using the power of AI"
          p="An innovative AI automation agency approached us for a complete redesign of their website. 
            They wanted to move from WordPress to a custom-built site developed with React. Our team ensured the site was fully mobile-optimised and SEO-friendly, 
            complete with a comprehensive sitemap and an integrated chatbot."
          img1P="Working with their colour palette, fonts, and images, we created a visually appealing and engaging user experience."
          img1Break="We where provided with MorfBot's company copy to maintain brand consistency and deliver clear messaging. 
            The result is a modern, efficient, and user-friendly website that enhances MorfBot's digital presence."
          url={video}
          link="https://morfbot.netlify.app/"
          img2P="To create the best website possible, our team began by working closely with the Morfbot team to understand their mission: 
          to make it professional, trustworthy and accessable to small to medium sized business."
          img2Break="We designed a clean, modern website with a user-friendly interface and simple navigation. The site has embeded stipe payment links for consultations."
        />
      </section>
    </>
  );
};

export default Morbot;
