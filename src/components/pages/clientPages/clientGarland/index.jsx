import React from 'react';
import Client from '../../../cards/ClientWork';
import video from "../../../../assets/images/garland.mp4";
import header from "../../../../assets/images/garland-header.webp";
import "../../../cards/ClientWork";


const Garland = () => {
  return (
    <section className="client-page">
      <Client
        name="garland"
        src={header}
        titleP="Pioneering total hip replacement, a hip for life."
        p="A start-up medical device design, and development company based in Worcester approched us for an AI chat assistant, to answer FAQ's. 
            They wanted the chat bot to merge seamlessly with thier WordPress website. Our team ensured the chat bot was fully trained on
            the company and fully optimised for mobile use."
        img1P="Working with their colour palette, fonts, and logo, we designed and integrated an intelligent chatbot to answer any questions that visitors might have."
        img1Break="The result is a modern, efficient, and user-friendly chat assistant that enhances Garland Surgical's digital visitor experience."
        url={video}
        link="https://www.garlandsurgical.health/"
        img2P="The Garland team provided us with a company knowledge base, and we used the knowledge from their website pages to maintain brand consistency and deliver clear messaging."
        img2Break="We designed a helpful, modern AI chat bot with a simple user-friendly interface. This chat assistant also has room to be improved and upgraded to capture customer data
                , take bookings and much more."
      />
     </section>
  )
}

export default Garland
