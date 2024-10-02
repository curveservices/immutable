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
          <Link
            to={props.fblink}
            target="_blank"
            alt="facebook"
            aria-label="follow us on facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} alt="facebook" />
          </Link>
        </li>
        <li className="icons">
          <Link
            to={props.lilink}
            target="_blank"
            alt="LinkedIn"
            aria-label="link with us on LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} alt="LinkedIn" />
          </Link>
        </li>
        <li className="icons">
          <Link
            to={props.instalink}
            target="_blank"
            alt="Instagram"
            aria-label="follow instagram"
          >
            <FontAwesomeIcon icon={faInstagram} alt="Instagram Link" />
          </Link>
        </li>
        <li className="icons">
          <Link
            to="https://github.com/curveservices"
            target="_blank"
            alt="Git hub"
            aria-label="see more about our work on github"
          >
            <FontAwesomeIcon icon={faGithub} alt="Git hub" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Socials;
