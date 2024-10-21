import React, { useRef, useEffect, useState } from 'react';
import "./index.scss";

const LazyVideo = ({ src, type, fallback, ariaLabel, ...props }) => {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);  // Video is now in view
          observer.disconnect();
        }
      },
      { threshold: 0.25 } // Trigger when 25% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef}>
      {isIntersecting ? (
        <video  {...props} autoPlay muted loop controls={false} aria-label={ariaLabel} className='video'>
            <source src={src} type={type} />
            <img src={fallback} alt="Fallback image" />
        </video>
      ) : (
        <img className='fallback' src={fallback} alt="Loading video..." />
      )}
    </div>
  );
};

export default LazyVideo;
