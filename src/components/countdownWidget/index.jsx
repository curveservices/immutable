import React, { useEffect, useState } from 'react';
import Modal from "react-modal";
import Button from '../button';

const CountdownWidget = () => {
  const [timeLeft, setTimeLeft] = useState( 5 * 60);
  const [isOpen, setIsOpen] = useState(true);
  
  const calculateTimeUnits = (time) => {
    const days = Math.floor(time / (60 * 60 * 24));
    const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prevTime) => {
      if (prevTime <= 1) {
        clearInterval(timer); // Stop the timer
        handleClose(); // Close the modal when time ends
        return 0;
      }
      return prevTime - 1;
    });
    import('./index.scss')
    .catch((error) => {
        console.error('error loading css', error);
    });
  }, 1000);

  return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [handleClose]);
  const timeUnits = calculateTimeUnits(timeLeft);
  
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        className="christmas-banner-modal"
        overlayClassName="christmas-banner-overlay"
        alt="Christmas offer banner"
    >
        <div className='christmas-banner-content'>
            <p className="banner-text">
            🎄✨ <b>CHRISTMAS OFFER - FREE Website Performance Audit  </b>✨🎄
            </p>
        <div className="countdown-timer">
          <div className="time-unit">
            <span className="time-value">{timeUnits.days}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-unit">
            <span className="time-value">{timeUnits.hours}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-unit">
            <span className="time-value">{timeUnits.minutes}</span>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time-unit">
            <span className="time-value">{timeUnits.seconds}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
        <Button
          text="Claim Offer"
          link="/performance-audit-form"
          background="#fff708"
          color="#000"
        />
        <button className='close-button' onClick={handleClose}>
          x
        </button>
        </div>
    </Modal>
    
  )
}

export default CountdownWidget
