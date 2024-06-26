import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./index.scss";

const Socials = (props) => {
  return (
    <>
      <ul className="iconList">
        <li className="icons">
          <Link to={props.fblink} target="_blank">
            <FontAwesomeIcon icon={faFacebookF} alt="facebook" />
          </Link>
        </li>
        <li className="icons">
          <Link to={props.lilink} target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} alt="LinkedIn" />
          </Link>
        </li>
        <li className="icons">
          <Link to={props.xlink} target="_blank">
            <FontAwesomeIcon icon={faInstagram} alt="X formally twitter" />
          </Link>
        </li>
        <li className="icons">
          <Link to="https://github.com/curveservices" target="_blank">
            <FontAwesomeIcon icon={faGithub} alt="Git hub" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Socials;
