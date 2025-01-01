import React from "react";
import SingleAssistant from "..";
import header from "../../../../assets/images/chipo-header.webp";
import asst from "../../../../assets/images/chipo.webp";
import asst2 from "../../../../assets/images/chipo2.webp";
import asst3 from "../../../../assets/images/chipo3.webp";

const EccomerceAssistant = () => {
  return (
    <SingleAssistant
      header={header}
      assistant={asst}
      altName="Chipo"
      heroTitle="Your Online Warehouse Manager"
      secondP="Chipo is your ultimate online store manager. She is fully trained on best performing eCommerce stores, helping with high conveting product
        descriptions to raising invoices. Chipo ensures your eCommerce business thrives no matter what product niche you're in."
      img2={asst2}
      li1="Raise orders and create invoices from online sales to your accounting software."
      li2="Create high performing product descriptions."
      li3="Automate your Shopify or Woo-Commerce inventory."
      li4="Log abandond carts for analysis."
      thirdP="Chipo will be fully trained on your business, and will take
        care of orders, invoices and email cnfirmations automatically and with ease."
      thirdImg={asst3}
    />
  );
};

export default EccomerceAssistant;
