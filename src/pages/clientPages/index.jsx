import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../../firbase.config";
import LoadingSpinner from '../../components/loadingSpinner';
import tutor from "../../assets/images/telehill.mp4";
import morfbot from "../../assets/images/morfbot.mp4";
import garland from "../../assets/images/garland.mp4";
import vive from "../../assets/images/vive.mp4";
import hollows from "../../assets/images/hollows.mp4";
import LazyVideo from '../../components/LazyVideo';
import Socials from '../../components/socials';
import Button from '../../components/button';
import PriceCard from '../../components/cards/basicPrice';
import CallToAction from '../../components/CTA';
import './index.scss';
import useScrollStates from '../../components/scrollState';
const videoMap = {
  hollows: hollows,
  tutor: tutor,
  morfbot: morfbot,
  garland: garland,
  vive: vive,
};

const ClientPage = () => {
  const { second, third } = useScrollStates();
    const { clientId } = useParams();
    const [clientData, setClientData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
     
    useEffect(() => {
      const fetchClientData = async () => {
        setLoading(true);
        setError(false);
      try {
        const docRef = doc(db, "clients", clientId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setClientData(docSnap.data());
        } else {
          console.log("No such client!");
        }
      } catch (error) {
        console.error("Error fetching client data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchClientData();
  }, [clientId]);
  
    if (loading) return <div><LoadingSpinner /></div>
    if (error || !clientData) return <div className="error-message">Project Not Found!</div>
  return (
    <div className="client-page">
      <section className="hero">
        <LazyVideo
          src={videoMap[clientData.video]}
          type="video/mp4"
          className="video"
        />
        <div className="socials">
          <Socials
            fblink="https://www.facebook.com/profile.php?id=61557552873479"
            lilink="https://www.linkedin.com/company/21439623"
            instalink="https://www.instagram.com/immutable_studio/"
          />
        </div>
        <div className="hero-inner">
          <div className="text-box">
            <h1 className="main-title">{clientData.client}</h1>
            <p>{clientData.titleP}</p>
            <div className="btn-container">
              <Button
                text="View Site"
                link={clientData.link}
                target="_blank"
                noreferer
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`second-section ${second ? "anim" : "none"}`}>
        <div className="second-inner">
          <i className="subtitle">Designs and development</i>
          <h2 className="main-title">
            {clientData.product} for {clientData.client}
          </h2>
          <p>{clientData.p1}</p>

          <div className="top-container">
            <div className="second-text">
              <i className="subtitle">The Design</i>
              <p>{clientData.p2}</p>
              <p>{clientData.p3}</p>
              <p>{clientData.p6}</p>
            </div>
            <div className="image-container scrolling-mobiles">
              <div className="square-shape" />
              {[clientData.img4, clientData.img5, clientData.img6].map(
                (img, i) => (
                  <div
                    key={i}
                    className="mobile-frame"
                    onMouseEnter={(e) => {
                      const imgEl = e.currentTarget.querySelector("img");
                      const frameHeight = e.currentTarget.offsetHeight;
                      const imgHeight = imgEl.scrollHeight;
                      const maxScroll = imgHeight - frameHeight;

                      imgEl.style.transform = `translateY(-${maxScroll}px)`;
                      imgEl.style.transition = "transform 10s ease";
                    }}
                    onMouseLeave={(e) => {
                      const imgEl = e.currentTarget.querySelector("img");
                      imgEl.style.transform = `translateY(0)`;
                      imgEl.style.transition = "transform 0.5s ease";
                    }}
                  >
                    <div className="iphone-notch" />
                    <img
                      src={img}
                      alt="Website design in London"
                      className="scroll-mobile"
                    />
                  </div>
                ),
              )}
            </div>
            <div className="cirlce-shape" />
          </div>

          <div className="">
            <div className="">
              <i className="subtitle">Our Approach</i>
              <p>{clientData.p4}</p>
              <p>{clientData.p5}</p>
            </div>
            <div className="img-container scrolling-imgs">
              {[clientData.img1, clientData.img2, clientData.img3].map(
                (img, i) => (
                  <div
                    key={i}
                    className="scroll-frame"
                    onMouseEnter={(e) => {
                      const imgEl = e.currentTarget.querySelector("img");
                      const frameHeight = e.currentTarget.offsetHeight;
                      const imgHeight = imgEl.scrollHeight;
                      const maxScroll = imgHeight - frameHeight;

                      imgEl.style.transform = `translateY(-${maxScroll}px)`;
                      imgEl.style.transition = "transform 6s ease";
                    }}
                    onMouseLeave={(e) => {
                      const imgEl = e.currentTarget.querySelector("img");
                      imgEl.style.transform = `translateY(0)`;
                      imgEl.style.transition = "transform 0.5s ease";
                    }}
                  >
                    <div className="mac-top-bar">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <img
                      src={img}
                      alt="Website design in London"
                      className="scroll-img"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={`third-section  ${third ? "anim" : "none"}`}>
        <div className="text-box">
          <i className="subtitle">Transparent Pricing</i>
          <h2 className="price-title">Our Starting Prices</h2>
          <p>
            We believe in transparency and building strong relationships with
            our clients. We offer straightforward pricing and understand the
            importance of budgeting. Packages can be expanded as your business
            grows.
          </p>
        </div>
        <PriceCard name="pricing" />
      </section>
      <CallToAction />
    </div>
  );
}

export default ClientPage
