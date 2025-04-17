import React from 'react';
import { Link } from 'react-router-dom';
import SlideButton from '../buttonSlide';
import ReactPlayer from 'react-player';
import tutor from "../../assets/images/telehill.mp4";
import morfbot from "../../assets/images/morfbot.mp4";
import garland from "../../assets/images/garland.mp4";
import vive from "../../assets/images/vive.mp4";
import hollows from "../../assets/images/hollows.mp4";

const PortfolioProject = ({ cardsData }) => {
  if (!cardsData || cardsData.length === 0) return <div className="error-message">No projects to show</div>
  const videoMap = {
       "hollows": hollows,
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
          <div key={data.id} className={`featured ${direction === "reverse" ? "reverse" : ""}`}>
            <div className="text-box">
              <h2>{title}</h2>
              <Link to={categoryLink}>
                <div className="link">{category?.toUpperCase()}</div>
              </Link>
              <p>{description}</p>
              <SlideButton text="Read case study" color="#fff" link={caseStudyLink} />
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
