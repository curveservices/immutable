import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import audit from "../../../assets/images/audit.webp";
import logo from "../../../assets/images/logo-desktop.webp";
import "./index.scss";
import { Link, redirect } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

const AuditFormPage = () => {
  const refForm = useRef();
  const handleSubmit = (e) => {
    const formEle = document.querySelector("form");
    e.preventDefault();
    const formInput = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxVg1oVObctzvJgCP2Q-qBRoSAcibD12qvqDSbKfxbV6hHVtvK6LSBhmTronGRMXuOG/exec",
      {
        method: "POST",
        body: formInput,
      },
    ).catch((error) =>
      console.error("Error sending data to Google Sheets:", error),
    );
    emailjs
      .sendForm(
        "p.rossiter83@gmail.com",
        "contact_form",
        refForm.current,
        "w1ULsXxchzrjhuclR",
      )
      .then(
        () => {
          toast.success("Message successfully sent!");
          refForm.current.reset();
          redirect("/");
        },
        () => {
          toast.error(" Failed to send your message, pleease try again");
        },
      );
  };
  return (
    <>
      <section className="audit-hero">
        <div className="hero-text">
          <Link to="https://immutable-studio.co.uk/">
            {" "}
            <img className="logo" src={logo} alt="immutable studio logo" />
          </Link>
          <h1 className="title">Claim Your Free Performance Audit</h1>
          <p></p>
        </div>
        <div className="audit-container">
          <img
            src={audit}
            className="audit-img"
            alt="image of scrabble cubes displaying seo audit"
          />
          <div className="text-box">
            <h1>Free SEO & Performance Audit</h1>
            <p>
              Get your <b>FREE</b> SEO, performance &amp; Accessibility audit.
              Find opportunities for improvement!
            </p>
            <form ref={refForm} onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Website URL</label>
                <input
                  type="url"
                  name="subject"
                  placeholder="https://your-webite.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="source" id="source" name="source" required>
                  Where Did You Find Us
                </label>
                <select name="source" id="source">
                  <option value="Google">Google Search</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <label>
                <input
                  type="checkbox"
                  name="gdpr"
                  className="checkbox"
                  required
                />
                I consent to having this website store my submitted information.
              </label>
              <textarea
                name="message"
                value="Free SEO & Performance Audit"
                readOnly
                className="subject"
              ></textarea>
              <input
                className="audit-button"
                type="submit"
                value="Claim Your Free Audit"
              />
            </form>
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        theme="colored"
        closeOnClick
        pauseOnHover
      />
      <div>
        <HelmetProvider>
          <Helmet>
            <title>
              Free Performance Audit | Web Design London | Immutable Studio
            </title>
            <meta
              name="description"
              content="Immutable Studio is a leading website development and website design agency. We build fast and responsive websites and create AI solutions for businesses."
            />
            <meta
              name="keywords"
              content="Website, Website Design, Website Development, Web design, SEO, Website maintenance, AI Solutions, Chatbot, London, Greenwich"
            />
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default AuditFormPage;
