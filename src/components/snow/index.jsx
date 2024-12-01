import React, { useEffect, useState } from "react";
import "./index.scss";

const Snow = () => {
  const [snowflakes, setSnowflakes] = useState([]);
  const getSnowflakeCount = () => {
  if (window.innerWidth > 1024) return 80; 
  if (window.innerWidth > 768) return 50; 
  return 30;
};
  useEffect(() => {
    const snowflakeCount = getSnowflakeCount();
    const newSnowflakes = Array.from({ length: snowflakeCount }).map(() => ({
      id: Math.random(),
      size: Math.random() * 3 + 1, // Random size between 1px and 4px
      left: Math.random() * 100, // Random horizontal position as percentage
      fallDuration: Math.random() * 5 + 2, // Random fall duration (2-7 seconds)
      delay: Math.random() * 4 // Random delay before fall
    }));
    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            left: `${flake.left}%`,
            animationDuration: `${flake.fallDuration}s`,
            animationDelay: `${flake.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default Snow;
