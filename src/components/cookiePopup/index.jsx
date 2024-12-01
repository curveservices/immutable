import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Cookies from "js-cookie";
import cookieVideo from "../../assets/images/cookie.mp4";
import "./index.scss";

Modal.setAppElement("#root");

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
   useEffect(() => {
    const consent = Cookies.get("cookie-consent");
    if (!consent) {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);
  const handleAccept = () => {
    Cookies.set("cookie-consent", "accepted", { expires: 365 });
    setIsVisible(false);
  };
  const handleDecline = () => {
    Cookies.set("cookie-consent", "declined", { expires: 365 });
    setIsVisible(false);
  };
  return (
    <Modal
      isOpen={isVisible}
      onRequestClose={handleDecline}
      contentLabel="Cookie Consent"
      className="cookie-modal"
      overlayClassName="cookie-modal-overlay"
    >
      <div className="cookie-content">
        <video className="icon" src={cookieVideo} alt="Cookie" autoPlay loop muted playsInline controls={false} />
        <p>
          We use cookies to improve your experience on our site. By using our site,
          you consent to cookies. See our   
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
            </a>
        </p>
        <div className="cookie-buttons">
          <button onClick={handleAccept} className="accept-button">
            Accept Cookies
          </button>
          <button onClick={handleDecline} className="decline-button">
            Decline
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CookieConsent;

