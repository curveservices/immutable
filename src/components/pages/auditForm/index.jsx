import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import audit from '../../../assets/images/audit.webp';
import logo from "../../../assets/images/logo-desktop.png";
import "./index.scss";
import { Link, redirect } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet';

const AuditFormPage = () => {
    const refForm = useRef();
    const handleSubmit = (e) => {
    const formEle = document.querySelector("form");
    e.preventDefault();
    const formInput = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxL1-3z29sTTGeNWu7Zat8MPwC4isAZuIzV4toRse6bHdq3wTG7Z6zfWUFq28pUSo6l/exec",
      {
        method: "POST",
        body: formInput,
      },
    )
    .catch((error) => console.error("Error sending data to Google Sheets:", error));
    emailjs.sendForm(
        "p.rossiter83@gmail.com",
        "contact_form",
        refForm.current,
        "w1ULsXxchzrjhuclR",
    ).then(
            () => {
                toast.success("Message successfully sent!");
                refForm.current.reset();
                redirect('/')
            },
            () => {
                toast.error(" Failed to send your message, pleease try again");
            },
        )
    };
    return (
    <>
    <section className='audit-hero'>
        <div className="hero-text">
            <Link to='/'> <img className='logo' src={logo} alt="immutable studio logo" /></Link>
            <h1 className="title">Claim Your Free Performance Audit</h1>
            <p></p>
        </div>
        <div className="audit-container">
            <img src={ audit } className='audit-img' alt='image of scrabble cubes displaying seo audit'/>
            <div className="text-box">
                <h1>Free SEO & Performance Audit</h1>
                <p>Get your <b>FREE</b> SEO, performance &amp; business Facebook page audit. Find opportunities for improvement!</p>
                <form ref={refForm} onSubmit={handleSubmit} className='popup-form'>
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
                            name='subject'
                            placeholder='https://your-webite.com'
                            required
                        />
                    </div>
                        <div className="form-group">
                            <label htmlFor="facebook">Facebook URL</label>
                            <input
                                type="text"
                                name="facebook"
                                placeholder='https://www.facebook.com/your-profile-id'
                                required
                            />   
                    </div>
                    <textarea
                        name="message"
                        value="Free SEO & Performance Audit"
                        readOnly
                        className='subject'
                    ></textarea>
                    <input className='audit-button' type="submit" value="Claim Your Free Audit" />
                </form>
            </div>
        </div>
        </section>
            <ToastContainer position='bottom-center' autoClose={2000} theme='colored' closeOnClick pauseOnHover />
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
  )
}

export default AuditFormPage
