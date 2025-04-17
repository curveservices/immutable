import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { db } from "../../../firbase.config";
import Button from "../../button";
import CallToAction from "../../CTA";
import PriceCard from "../basicPrice";
import LazyVideo from "../../LazyVideo";
import Socials from "../../socials";
import useScrollStates from "../../scrollState";

const Client = (props) => {
  const [client, setClient] = useState([]);
  const { second, third } = useScrollStates();
  const fetchData = async () => {
    try {
      const clientData = [];
      const snapshot = await getDocs(collection(db, props.name));
      snapshot.forEach((element) => {
        const data = element.data();
        clientData.push({
          id: element.id,
          name: data.name,
          client: data.client,
          product: data.product,
          img1: data.img1,
          img2: data.img2,
          logo: data.logo,
          link: data.link,
          color: data.color,
        });
      });
      setClient(clientData);
    } catch (err) {
      alert("Error fetching data", err);
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    import("./index.scss")
      .then(() => {
        console.log("css loaded");
      })
      .catch((error) => {
        console.error("error loading css", error);
      });
    return () => {
      const styleSheets = Array.from(document.styleSheets);
      const homeStyleSheet = styleSheets.find(
        (sheet) => sheet.href && sheet.href.includes("index.scss"),
      );
      if (homeStyleSheet) {
        document.head.removeChild(homeStyleSheet.ownerNode);
      }
    };
  }, []);
  return (
    <>
      <div className="client-page">
        {client.map((item) => {
          return (
            <div key={item.id}>
              <section className="hero">
                <LazyVideo src={props.url} type="video/mp4" className="video" />
                <div className="socials">
                  <Socials
                    fblink="https://www.facebook.com/profile.php?id=61557552873479"
                    lilink="https://www.linkedin.com/company/21439623"
                    instalink="https://www.instagram.com/immutable_studio/"
                  />
                </div>
                <div className="hero-inner">
                  <div className="text-box">
                    <h1 className="main-title">{item.client}</h1>
                    <p>{props.titleP}</p>
                    <div className="btn-container">
                      <Button
                        text="View Site"
                        link={props.link}
                        target="_blank"
                        noreferer
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="second-section">
                <div className="second-inner">
                  <i className="subtitle">Designs and development</i>
                  <h2 className="main-title">
                    {item.product} for {item.client}
                  </h2>
                  <p>{props.p}</p>
                </div>

                <div className="top-container"></div>
                <div className="work-container">
                  <img
                    className="client-img"
                    src={item.img1}
                    alt={`${item.client} homepage`}
                  />
                  <div className="text-box">
                    <h2 style={{ color: item.color }}>The Design</h2>
                    <p>{props.img1P}</p>
                    <p>{props.img1Break}</p>
                  </div>
                </div>
                <div className="work-container container2">
                  <div className="text-box">
                    <h2 style={{ color: item.color }}>Our Approach</h2>
                    <p>{props.img2P}</p>
                    <p>{props.img2Break}</p>
                  </div>
                  <img
                    className="client-img"
                    src={item.img2}
                    alt={`${item.client} mobile view`}
                  />
                </div>
              </section>
              <section className="third-section">
                <div className="text-box">
                  <h2>Transparent Pricing</h2>
                  <p>
                    We believe in transparency and building strong relationships
                    with our clients. We offer straightforward pricing and
                    understand the importance of budgeting. Packages can be
                    expanded as your business grows.
                  </p>
                  <h2 className="price-title">Our Starting Prices</h2>
                </div>
                <PriceCard name="pricing" />
              </section>
              <div className="cta">
                <CallToAction />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Client;
