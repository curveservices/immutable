import React from 'react'
import "./index.scss"

const Snow = () => {
     const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        const size = Math.random() * 3 + 1; // random size between 5 and 10
        const left = Math.random() * window.innerWidth // random horizontal position
        const fallDuration = Math.random() * 5 + 2; // fall duration between 2 and 5 seconds

        snowflake.className = 'snowflake';
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${left}px`;
        snowflake.style.animationDuration = `${fallDuration}s`; // random fall duration
        snowflake.style.animationDelay = `${Math.random() * 5}s` // random delay before falling

        document.body.appendChild(snowflake);
    }
  return (
    <div>
      
    </div>
  )
}

export default Snow
