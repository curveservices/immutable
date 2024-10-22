import React from 'react'
import Marquee from 'react-fast-marquee';

import wordpress from '../../assets/images/wordpress.svg';
import woo from "../../assets/images/woocommerce.svg";
import square from "../../assets/images/squarespace.svg";
import shop from "../../assets/images/shopify.svg";
import wix from "../../assets/images/wix.svg";
import daddy from "../../assets/images/godaddy.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import react from "../../assets/images/react.svg";
import "./index.scss";
import { Link } from 'react-router-dom';

const MarqueeComp = () => {
    return (
      <div className='marquee'>
        <div className="marquee-title">Web design is an art. At our Web Design Agency in London we are the artists.</div>
        <p className='marquee-p'>We use the power of technology and make bespoke websites on all major CMS and framworks.</p>
        <Marquee pauseOnHover='true' className="marquee">
          <Link to="https://wordpress.com/" noreferer target='_blank'>
            <img src={wordpress} alt="wordpress icon" className="icon"/>
          </Link>
          <div className="divider">|</div>
          <Link to="https://www.squarespace.com/" noreferer target='_blank'>
            <img src={square} alt="squarespace icon" className="icon" />
          </Link>
          <div className="divider">|</div>
          <Link to="https://woocommerce.com/" noreferer target='_blank'>
            <img src={woo} alt="woo-commerce" className="icon"/>    
          </Link>
          <div className="divider">|</div>
          <Link to="https://www.shopify.com/uk" noreferer target='_blank'>
            <img src={shop} alt="shopify icon" className="icon" />
          </Link>
          <div className="divider">|</div>
          <Link to="https://www.wix.com/" noreferer target='_blank'>
            <img src={wix} alt="wix icon" className="icon" />
          </Link>
          <div className="divider">|</div>
          <Link to="https://react.dev/" noreferer target='_blank'>
            <img src={react} alt="react icon" className='icon'/>
          </Link>
          <div className="divider">|</div>
          <Link to="https://www.godaddy.com/en-uk" noreferer target='_blank'>
            <img src={daddy} alt="godaddy icon" className="icon" />
          </Link>
          <div className="divider">|</div>
        </Marquee>
      </div>
  )
}

export default MarqueeComp
