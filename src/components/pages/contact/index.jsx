import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Socials from "../../socials";
import LeafletMap from "../../leafletMap";
import "./index.scss";

const Contact = () => {
  const refForm = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formInput = new FormData(formEle);
    try {
      const googleSheetResponse = await fetch(
        "https://script.google.com/macros/s/AKfycbxFNGbucNhUYJs3g6ivjAOk23L5EtZvtVOQ46uZTK4Qt2hCOkk0UfUY9YUq3HSWQ599/exec",
        {
          method: "POST",
          body: formInput,
        },
      );
      if (!googleSheetResponse.ok) {
        throw new Error("Failed to send data to Google sheets");
      }
      const makeWebhookResponse = await fetch(
        "https://hook.eu2.make.com/qkrmo1e96kq93ns7kov3kwwyw8gj8chx",
        {
          method: "POST",
          body: formInput,
        },
      );
      if (!makeWebhookResponse.ok) {
        throw new Error("Failed to send data to Make.com webhook");
      }
      await emailjs.sendForm(
        "p.rossiter83@gmail.com",
        "contact_form",
        refForm.current,
        "w1ULsXxchzrjhuclR",
      );
      toast.success("Message successfully sent!");
      formEle.reset();
    } catch (error) {
      console.error("Error", error);
      toast.error("Failed to send your message, plaes try again");
    }
  };
  return (
    <>
      <div className="contact-page">
        <section className="text-box">
          <h1 className="title">Contact Us</h1>
          <p className="fadeInUp">
            Ready to get your project started? wheather it's a large project,
            personal portfolio, landing page or AI solutions, We are able to
            help.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" id="name">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" id="email">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your-email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" id="subject">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="source" id="source">
                  Where Did You Find Us
                </label>
                <select
                  name="source"
                  id="source"
                  placeholder="select from options"
                >
                  <option value="Google">Google Search</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <div className="btn-container">
                <input className="submit-button" type="submit" value="Submit" />
                <Link
                  className="submit-button"
                  target="_blank"
                  to="https://calendly.com/immutable-studio/website-consultancy"
                >
                  <FontAwesomeIcon icon={faCalendarWeek} /> Book a call
                </Link>
              </div>
            </form>
          </div>
        </section>
        <div className="info-map">
          Immutable Studio
          <br />
          London, SE10
          <br />
          United Kingdom
          <br />
          <Socials
            fblink="https://www.facebook.com/profile.php?id=61557552873479"
            lilink="https://www.linkedin.com/company/21439623"
            instalink="https://www.instagram.com/immutable_studio/"
          />
          <span>
            <a href="mailto:hello@immutable-studio.com">
              hello@immutable-studio.co.uk
            </a>
          </span>
        </div>
        <div className="map-wrap">
          <LeafletMap/>
        </div>
      </div>
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
            <title>Contact Us | Immutable Studio – Creative Web Design & AI Solutions</title>
            <link rel="canonical" href="https://immutable-studio.co.uk/contact" />
            <meta
              name="description"
              content="Get expert website design, maintenance & AI solutions from Immutable Studio. Contact us today and bring your ideas to life!"
            />
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "ContactPage",
                  "mainEntity": {
                    "@type": "Organization",
                    "name": "Immutable Studio",
                    "url": "https://immutable-studio.co.uk",
                    "logo": "https://immutable-studio.co.uk/1-removebg-preview.OTVxQdl4.webp",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+447980383484",
                      "email": "hello@immutable-studio.co.uk",
                      "contactType": "Customer Service",
                      "areaServed": "GB",
                      "availableLanguage": ["English"]
                    }
                  },
                  "url": "https://immutable-studio.co.uk/contact"
                }
              `}
            </script>
          </Helmet>
        </HelmetProvider>
      </div>
    </>
  );
};

export default Contact;
