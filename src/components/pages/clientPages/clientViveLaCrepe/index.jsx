import React from "react";
import Client from "../../../cards/ClientWork";
import video from "../../../../assets/images/vive.mp4";
import header from "../../../../assets/images/vive-header.webp";

const ViveLaCrepe = () => {
  return (
    <>
      <section className="client-page">
        <Client
          name="vive-la-crepe"
          src={header}
          titleP="Making a guilty pleasure innocent"
          p="Vive La Crepe contacted us to reresh their new website from Squarepace. 
            They wanted a fast, custom-built website developed with the latest front-end tech.
            We built their website to be fully optimised for mobile and tablet. We ensured this site was SEO-friendly, 
            complete with a comprehensive sitemap and google analytics."
          img1P="We worked with the company colour palette, fonts, and images to develop a visually appealing and engaging user experience."
          img1Break="We where provided with their company copy to maintain brand consistency and deliver clear messaging. 
            The result is a modern, simple, and user-friendly website to enhance their digital presence."
          url={video}
          link="https://vive-la-crepe.netlify.app/"
          img2P="To create the best website possible, our team began by working closely with the Vive La Crepe team to understand their mission: 
          to make it easy and appealing.
          "
          img2Break="We designed a clean, simple website with a user-friendly interface and simple navigation, using Figma to design and React.js framework. Show casing thier food products and events."
        />
      </section>
    </>
  );
};

export default ViveLaCrepe;
