import { NavLink } from "react-router-dom";
import webdev from "../../assets/images/layout.mp4";
import seo from "../../assets/images/keywords.mp4";
import ai from "../../assets/images/ai.mp4";
import packing from "../../assets/images/packing.mp4";
import "./index.scss";

const Links = (props) => {
  return (
    <div className="link-container">
      <div className="service-link">
        <NavLink to={props.dev}>
          <div className="link">
            <video
            src={webdev}
            className="icon"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >  
          </video>
          <div className="text">WEB DEVELOPMENT</div>
          </div>
        </NavLink>
      </div>
      <div className="service-link">
        <NavLink to={props.seo}>
          <div className="link">
            <video
            src={seo}
            className="icon"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            >  
            </video>
            <div className="text">SEO & MAINTENANCE</div>
          </div>
        </NavLink>
      </div>
      <div className="service-link">
        <NavLink to={props.ai}>
          <div className="link">
            <video
            src={ai}
            className="icon"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            >  
            </video>
            <div className="text">AI SOLUTIONS</div>
          </div>
        </NavLink>
      </div>
      <div className="service-link">
        <NavLink to={props.pack}>
          <div className="link">
            <video
            src={packing}
            className="icon"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            >  
            </video>
            <div className="text">PACKAGES</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Links;
