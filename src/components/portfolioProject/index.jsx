import { Link, NavLink } from 'react-router-dom';
import SlideButton from '../buttonSlide';
import tutor from "../../assets/images/telehill.mp4";
import morfbot from "../../assets/images/morfbot.mp4";
import garland from "../../assets/images/garland.mp4";
import vive from "../../assets/images/vive.mp4";
import hollows from "../../assets/images/hollows.mp4";
import learners from "../../assets/images/little-learners.mp4";

const PortfolioProject = ({ cardsData }) => {
  if (!cardsData || cardsData.length === 0) return <div className="error-message">No projects to show</div>
  const videoMap = {
    "learners": learners,
    "hollows": hollows,
    "tutor": tutor,
    "morfbot": morfbot,
    "garland": garland,
    "vive": vive,
  };
  
  return (
 <>
        {cardsData.map((data, index) => {
        const { title, description, category, categoryLink, caseStudyLink } = data;
        const video = videoMap[data.video]
        const direction = index % 2 === 0 ? "normal" : "reverse";
        return (
          <div
            key={data.id || index}
            className={`featured ${direction === "reverse" ? "reverse" : ""}`}
          >
            <div className="text-box">
              <NavLink to={caseStudyLink}>
                <h2>{title}</h2>
              </NavLink>
              <Link to={categoryLink}>
                <div className="link">{category?.toUpperCase()}</div>
              </Link>
              <p>{description}</p>
              <SlideButton
                text="Read case study"
                color="#fff"
                link={caseStudyLink}
              />
            </div>
            <video
              className="video-player"
              src={video}
              controls={false}
              autoPlay
              muted
              playsInline
              loop
              loading="lazy"
            />
          </div>
        );
      })}
    </>
  );
};

export default PortfolioProject;
