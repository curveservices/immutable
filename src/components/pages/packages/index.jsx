import { useEffect, useLayoutEffect, useState } from "react";
import Button from "../../button";
import img from '../../../assets/images/package.gif'
import "./index.scss";

const Packages = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPrice = window.scrollY;
      const scrollSecond = window.scrollY;
      setSecond(scrollSecond > 250)
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
    <div className="package-page">
      <section className="hero">
        <div className="inner-hero">
          <div className="text-box">
            <h1>Business Packages</h1>
            <p>
              bcdslkvlsvbfoheoefbhvo uefrghvhvoihvoiehioerhvoeirhvieorhveriov
            </p>
            <h2>We build tailer made business packagees starting from just £999</h2>
            <Button text='Speak to us today' link='/contact' />
          </div>
          <img src="" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Packages;
