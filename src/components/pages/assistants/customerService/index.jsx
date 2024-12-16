import React from 'react';
import SingleAssistant from '..';
import asst from '../../../../assets/images/immie.webp';
import header from '../../../../assets/images/immie-header.webp';
import asst2 from '../../../../assets/images/immie2.webp';

const CustomerService = () => {
  return (
    <SingleAssistant
        header={header}
        assistant={asst}
        altName="Immie"
        heroTitle="Your Customer Service Manager"
      secondP="Meet Immie your customer service manager that never sleeps. He is fully trained on all things customer based, 
        from sending initail contact emails to chatting live on your website.
        He is on hand 24/7 to assist your customers when ever they need him."
        img2={asst2}
        li1="Reply to all customers that contact you from your website."
        li2="Imediatly reply to Facebook and Instagram DM's."
        li3="Be availble 24/7 on your website to answer FAQ's, take bookings and recommend products or services."
        li4="Populate all potential customer data in one neat place."
        thirdP="Immmie will be fully trained on your business, and will take
        care of all initail contact and store data with ease."
        thirdImg={asst}
    />
  )
}

export default CustomerService
