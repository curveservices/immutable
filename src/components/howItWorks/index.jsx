import React from "react";
import SlideButton from "../buttonSlide";
import Button from "../button";

import "./index.scss";

const HowitWorks = (props) => {
  return (
    <div className="what-we-do">
      <div className="steps-container">
        <div className="steps-card ">
          <div className="img-outer">
            <video
              className="icon"
              src={props.card1Gif}
              alt={`${props.card1Title} Gif`}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            ></video>
            <img
              src={props.card1Img}
              alt={`${props.card1Title}`}
              className="mobile-icon"
            />
          </div>
          <h3>{props.card1Title}</h3>
          <p>{props.card1P}</p>
          <SlideButton text={props.text1} link={props.link1} />
        </div>
        <div className="steps-card">
          <div className="img-outer">
            <video
              className="icon"
              src={props.card2Gif}
              alt={`${props.card2Title} Gif`}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            ></video>
            <img
              src={props.card2Img}
              alt={`${props.card2Title}`}
              className="mobile-icon"
            />
          </div>
          <h3>{props.card2Title}</h3>
          <p>{props.card2P}</p>
          <SlideButton text={props.text2} link={props.link2} />
        </div>
        <div className="steps-card">
          <div className="img-outer">
            <video
              className="icon"
              src={props.card3Gif}
              alt={`${props.card3Title} Gif`}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            ></video>
            <img
              src={props.card3Img}
              alt={`${props.card3Title}`}
              className="mobile-icon"
            />
          </div>
          <h3>{props.card3Title}</h3>
          <p>{props.card3P}</p>
          <SlideButton text={props.text3} link={props.link3} />
        </div>
        <div className="steps-card">
          <div className="img-outer">
            <video
              className="icon"
              src={props.card4Gif}
              alt={`${props.card4Title} Gif`}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            ></video>
            <img
              src={props.card4Img}
              alt={`${props.card4Title}`}
              className="mobile-icon"
            />
          </div>
          <h3>{props.card4Title}</h3>
          <p>{props.card4P}</p>
          <SlideButton text={props.text4} link={props.link4} />
        </div>
      </div>
      <div className="btn-container">
        <Button
          text={props.text}
          link={props.link}
          background="var(--third-bg)"
          color="#fff"
        />
      </div>
    </div>
  );
};

export default HowitWorks;
