import React from 'react';
import SlideButton from '../buttonSlide';
import Button from "../button";

import './index.scss';

const HowitWorks = (props) => {
  return (
      <section className='what-we-do'>
          <div className="text-box">
            <h2 className=''>{props.title}</h2>
            <p className='main-text'>{props.mainP}</p>
          </div>
          
        <div className="steps-container">
            <div className="steps-card ">
                <div className="img-outer">
                    <img className="icon" src={props.card1Gif} alt={`${props.card1Title} Gif`} />
                </div>
                  <h3>{props.card1Title}</h3>
                <p>{props.card1P}</p>
                <SlideButton text="Find out more" link="services/web-development"/>
            </div>
            <div className="steps-card">
                <div className="img-outer">
                   <img className="icon" src={props.card2Gif} alt={`${props.card2Title} Gif`} />
                </div>
                <h3>{props.card2Title}</h3>
                <p>{ props.card2P}</p>
                <SlideButton text="Find out more"link="services/seo-website-maintenance"/>
            </div>
            <div className="steps-card">
                <div className="img-outer">
                    <img className="icon" src={props.card3Gif} alt={`${props.card3Title} Gif`} />
                </div>
                <h3>{ props.card3Title}</h3>
                  <p>{props.card3P}</p>
                <SlideButton text="Find out more" link="service/chat-bots"/>
              </div>
              <div className="steps-card">
                <div className="img-outer">
                    <img className="icon" src={props.card4Gif} alt={`${props.card4Title} Gif`} />
                </div>
                  <h3>{props.card4Title}</h3>
                  <p>{props.card4P}</p>
                <SlideButton text="Find out more" link="services/packages"/>
            </div>
          </div>
          <div className="btn-container">
              <Button text={props.text} link={props.link} />
          </div>
          
    </section>
  )
}

export default HowitWorks
