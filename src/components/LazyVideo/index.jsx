import React, { useRef, useEffect, useState } from 'react';

const LazyVideo = ({ src, type, fallback, ...props }) => {
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
        <video {...props} autoPlay muted loop>
            <source src={src} type={type} />
            <img src={fallback} alt="Fallback image" />
        </video>
      ) : (
        <img src={fallback} alt="Loading video..." /> // Placeholder image before loading
      )}
    </div>
  );
};

export default LazyVideo;
