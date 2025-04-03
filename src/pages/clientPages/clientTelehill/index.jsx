import React from "react";
import Client from "../../../components/cards/ClientWork";
import video from "../../../assets/images/telehill.mp4";
import header from "../../../assets/images/telehill-head.webp";

const TelehillClient = () => {
  return (
    <>
      <section className="client-page">
        <Client
          name="telegraph-tutoring"
          src={header}
          titleP="Telegraph Hill Tutoring are dedicated to nuturing young learners in South East London"
          p="Telegraph Hill tutoring contacted us for a brand new website. 
            They wanted a fast, custom-built website developed with the latest front-end tech, using a database for learning resources to be accessed by parents.
            We built their website to be fully optimised for mobile and tablet. We ensured this site was SEO-friendly, 
            complete with a comprehensive sitemap and google analytics."
          img1P="We worked with Telegraph Hill Tutoring to create colour palette, fonts, and images to develop a visually appealing and engaging user experience."
          img1Break="We where provided with their company copy to maintain brand consistency and deliver clear messaging. 
            The result is a modern, playful, efficient, and user-friendly website to enhance their digital presence."
          url={video}
          link="https://telegraphhilltutoring.netlify.app/"
          img2P="To create the best website possible, our team began by working closely with Telegraph Hill Tutoring to understand their mission: 
          to make it easy, cost-effective and viable for every young person to learn.
          "
          img2Break="We designed a clean, playful website with a user-friendly interface and simple navigation, using Figma to design and React.js framework. The site frequently uses a database of exam answers for parents to access via a paywall."
        />
      </section>
    </>
  );
};

export default TelehillClient;
