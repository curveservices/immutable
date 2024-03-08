import {
  faCss3Alt,
  faFigma,
  faGit,
  faGitAlt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSquarespace,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const StaticCubes = () => {
  return (
    <div className="cube-container">
      <div className="cube1">
        <div className="side top">
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className="left side">
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div className="front side">
          <FontAwesomeIcon icon={faJs} />
        </div>
      </div>
      <div className="cube2">
        <div className="top side">
          <FontAwesomeIcon icon={faNodeJs} />
        </div>
        <div className="left side">
          <FontAwesomeIcon icon={faSquarespace} />
        </div>
        <div className="front side">
          <FontAwesomeIcon icon={faCss3Alt} />
        </div>
      </div>
      <div className="cube3">
        <div className="top side">
          <FontAwesomeIcon icon={faFigma} />
        </div>
        <div className="left side">
          <FontAwesomeIcon icon={faGitAlt} />
        </div>
        <div className="front side">
          <FontAwesomeIcon icon={faWordpress} />
        </div>
      </div>
    </div>
  );
};

export default StaticCubes;
