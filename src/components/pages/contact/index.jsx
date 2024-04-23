import "./index.scss";
import emailjs from "@emailjs/browser";
import { useLayoutEffect, useRef } from "react";
import Socials from "../../socials";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "p.rossiter83@gmail.com",
        "contact_form",
        refForm.current,
        "w1ULsXxchzrjhuclR",
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert(" Failed to send your message, pleease try again");
        },
      );
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="contact-page">
        <section className="text-box">
          <h1>Contact Us</h1>
          <p>
            Ready to get your project started? wheather it's a large project,
            personal portfolio, landing page or AI solutions, We are able to
            help.
          </p>
          <p>
            However, don't hesitate to contact us with other requests or
            questions using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="send" />
                </li>
                <li>
                  <Link
                    className="call-button"
                    target="_blank"
                    noreferer
                    to="https://calendly.com/immutable-studio/website-consultancy"
                  >
                    <FontAwesomeIcon icon={faCalendarWeek} /> Book a call
                  </Link>
                </li>
              </ul>
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
          <Socials />
          <span><a href="mailto:hello@immutable-studio.com" >hello@immutable-studio.com</a></span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[51.5, 0.0192269]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.4852, 0.0175]}>
              <Popup>We are here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  );
};

export default Contact;
