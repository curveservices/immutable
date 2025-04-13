import { useState, useEffect } from 'react';

const useScrollStates = () => {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setSecond(scrollY > 100);
        setThird(scrollY > 1500);
        setForth(scrollY > 2500);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { second, third, forth };
};

export default useScrollStates;