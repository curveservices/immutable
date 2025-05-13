import { useState, useEffect } from 'react';

const useScrollStates = () => {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setForth] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setSecond(scrollY > 100);
        setThird(scrollY > 1500);
        setForth(scrollY > 3000);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { second, third, fourth };
};

export default useScrollStates;