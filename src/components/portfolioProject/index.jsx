import React from 'react';
import { Link } from 'react-router-dom';
import SlideButton from '../buttonSlide';
import ReactPlayer from 'react-player';
import tutor from "../../assets/images/telehill.mp4";
import morfbot from "../../assets/images/morfbot.mp4";
import garland from "../../assets/images/garland.mp4";
import vive from "../../assets/images/vive.mp4";

const PortfolioProject = ({ cardsData }) => {
  if (!cardsData || cardsData.length === 0) return <div className="error-message">No projects to show</div>
     const videoMap = {
        "tutor": tutor,
        "morfbot": morfbot,
        "garland": garland,
        "vive": vive,
      }
  return (
 <>
        {cardsData.map((data, index) => {
        const { title, description, category, categoryLink, caseStudyLink } = data;
        const video = videoMap[data.video]
        const direction = index % 2 === 0 ? "normal" : "reverse";

        return (
          <div key={data.id} className={`featured-container ${direction === "reverse" ? "oposite" : ""}`}>
            <div className="text-box">
              <h2>{title}</h2>
              <Link to={categoryLink}>
                <h3 className="link">{category?.toUpperCase()}</h3>
              </Link>
              <p>{description}</p>
              <SlideButton text="Read case study" link={caseStudyLink} />
            </div>
            <div className={`player-wrapper ${direction === "reverse" ? "oposite-video" : ""}`}>
              <ReactPlayer
                className="react-player"
                url={video}
                playing
                loop
                playsinline
                muted
                controls={false}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PortfolioProject;
