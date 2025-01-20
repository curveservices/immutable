import React from "react";
import SlideButton from "../buttonSlide";
import "./index.scss";
import Button from "../button";

const Discount = () => {
  return (
    <div className="discount-container">
      <div className="offer">
        <h2 className="percent">20% OFF</h2>
        <div className="desktop">
          <SlideButton text="web development" link="services/web-development" />
        </div>
        <Button
          color="#fff"
          text="web design"
          link="services/web-development"
        />
      </div>
      <div className="offer">
        <h2 className="percent">20% OFF</h2>
        <div className="desktop">
          <SlideButton
            text="SEO & Maintenance"
            link="/services/seo-website-maintenance"
          />
        </div>
        <Button
          color="#fff"
          text="Maintenance"
          link="/services/seo-website-maintenance"
        />
      </div>
      <div className="offer">
        <h2 className="percent">20% OFF</h2>
        <div className="desktop">
          <SlideButton text="ai assistants" link="services/ai-assistants" />
        </div>
        <Button
          color="#fff"
          text="ai assistants"
          link="services/ai-assistants"
        />
      </div>
    </div>
  );
};

export default Discount;
