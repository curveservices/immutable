import { useEffect } from "react";
import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import CookieConsent from "../cookiePopup";
import "./index.scss";

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
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
        <CookieConsent/>
        <Outlet />
      </main>
      {showButton && (
        <button className="back-to-top" name="back to top" aria-label="arrow button back to top of page" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
