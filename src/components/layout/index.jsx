import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 550) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <main className="app">
        <Outlet />
      </main>
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
      <Footer />
    </>
  );
};

export default Layout;
