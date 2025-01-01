import React, { useEffect, useState } from 'react';
const Slider = React.lazy(() => import("react-slick"));
import LoadingSpinner from '../loadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import google from '../../assets/images/google.webp';
import googleIcon from '../../assets/images/google-icon.webp';
import yell from '../../assets/images/yell-com.webp';
import yellIcon from '../../assets/images/yell.webp'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';
import ReactModal from 'react-modal';
import placeholder from "../../assets/images/image-holder.webp";
import "./index.scss"

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [averageRating, setAverageRating] = useState(0);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sheetId = "1pnBd4ufi44HjbL-gDKLUflemMzI9X11jkrpDLa1jV5M";
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const range = "Sheet1!A:H";

  const fetchReviews = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.values && data.values.length > 1) {
        const reviewsData = data.values.slice(1); // Skip header row
        setReviews(reviewsData);

        // Calculate average rating
        const ratings = reviewsData.map((review) => parseFloat(review[2])); // Column C: Rating
        const totalRatings = ratings.reduce((sum, rating) => sum + rating, 0);
        const avgRating = (totalRatings / ratings.length).toFixed(1);
        setAverageRating(avgRating);
      } else {
        setError("No reviews found.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Error fetching reviews.");
    } finally {
      setLoading(false);
    }
  };
   const openModal = (review) => {
    setModalContent(review);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  useEffect(() => {
    fetchReviews()
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={`full-${i}`} icon={faStar} className="star full-star" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="star half-star" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="star empty-star" />
        ))}
      </>
    );
  };
  // Slider settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div>{error}</div>;
  return (
    <>
      <h2 className='reviews-title'>What Our Clients Say</h2>
      <div className="google-reviews">
        <div className="header">
          <div className="header-img">
            <img src={google} alt="google icon" className='google-icon' />
            <img src={yell} alt="yell icon" className='yell-icon'/>
          </div>
          <div className="star-rating">
            <h3>{averageRating }</h3>
            <h3>
              {renderStars(averageRating)} 
            </h3>
            <div className='total'>From ({reviews.length })</div>
          </div>
          <Button
            text="Write a review"
            link="https://www.google.com/search?hl=en-GB&gl=uk&q=Immutable+Studio,+13+Westerdale+Rd,+London+SE10+0LW&ludocid=11280482460380483345&lsig=AB86z5VH8Q02r_EzWpOFhC9Fc1wg#lrd=0x47d8a928abed5323:0x9c8c5307fa00cf11,3"
            background="var(--third-bg)"
            target="_blank"
          />
        </div>
          <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <div className="profile">
                {review[4] && (
                <img
                  src={review[4] || placeholder}
                  alt={`${review[0]}'s profile`}
                  className="profile-pic"
                  onError={(e) => (e.target.src = placeholder)}
                />
                )}
                <img
                  src={review[7] === "yell" ? yellIcon : googleIcon}
                  alt={`${review[7]} icon`} className='review-icon' />
                <h3 className='profile-name'>
                  <a
                    href={`${review[6] || "/"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {review[0]}
                  </a>
                </h3>
              </div>
              <div className="review-text">
                <div className="date">{review[3]}</div>
                <div className="rating">{renderStars(parseFloat(review[2]))}</div>
                <p className='profile-review'>{review[1].slice(0, 100)}...</p>
                <button onClick={() => openModal(review)} className='read-more-btn'>
                  Read more
                </button>
              </div>
            </div>
          ))}
        </Slider>
        {modalContent && (
          <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Review Modal"
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            <div className="modal">
              <button onClick={closeModal} className="close-modal">x</button>
              <div className="profile">
                <img
                  src={modalContent[4] || placeholder}
                  alt={`${modalContent[0]}'s profile image`}
                  onError={(e) => (e.target.src = placeholder)}
                  className="profile-pic" />
                <h3>{modalContent[0]}</h3>
              </div>
              <div className="modal-review">
                <div className="date">{modalContent[3]}</div>
                <div className="rating">{renderStars(parseFloat(modalContent[2]))}</div>
                <p>{modalContent[1]}</p>
              </div>
            </div>
          </ReactModal>
        )}
      </div>
    </>
    
  )
}

export default GoogleReviews;

