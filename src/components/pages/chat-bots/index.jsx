import { useEffect, useLayoutEffect, useState } from "react";
import "./index.scss";

const ChatBots = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPrice = window.scrollY;
      const scrollSecond = window.scrollY;
      setSecond(scrollSecond > 150)
      setIsScrolled(scrollPrice > 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="chatbot-page">
      <section className="hero">
        <div className="inner-hero">
          <div className="text-box">
            <h1>Website Chat bots</h1>
            <p></p>
          </div>
          </div>
      </section>
    </div>
  )
};

export default ChatBots;
