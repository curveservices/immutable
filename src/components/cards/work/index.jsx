import { useEffect, useState } from "react";
import { db } from "../../../firbase.config";
import { getDocs, collection } from "firebase/firestore";
import Button from "../../button";
import { NavLink } from "react-router-dom";
import "./index.scss";

const WorkCard = () => {
  const [card, setCard] = useState([]);

  const fetchData = async () => {
    try {
      const workData = [];
      const snapshot = await getDocs(collection(db, "work"));
      snapshot.forEach((element) => {
        const data = element.data();
        workData.push({
          id: element.id,
          name: data.name,
          img: data.img,
          back: data.back,
          desc: data.desc,
          live: data.live,
          product: data.product,
          productLink: data.productLink,
          color: data.color,
          textColor: data.textColor,
        });
      });
      setCard(workData);
    } catch (err) {
      alert("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="text-container">
        <h2 className="title">EXPLORE OUR PORTFOLIO</h2>
        <div className="textBox">
          <p>
            Signing off on a new website is always a moment of pride and
            satisfaction for us. With each project, we take great care to
            understand our clients' unique needs and deliver tailored solutions.
            Here are some of our featured projects.
          </p>
        </div>
      </div>
      <div className="card-container">
        {card.map((item) => {
          return (
            <div className="flip-card" key={item.id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={item.img}
                    alt={`${item.name} featured images`}
                    className="card-image"
                    loading="lazy"
                    style={{ width: "300px", height: "300px" }}
                  />
                  <div className="front-title">
                    <h4 className="name">{item.name}</h4>
                  </div>
                </div>
                <div
                  className="flip-card-back"
                  style={{ background: item.color }}
                >
                  <img
                    src={item.back}
                    alt={`${item.name} Home page`}
                    className="card-back-image"
                    loading="lazy"
                    style={{ width: "300px", height: "300px" }}
                  />
                  <h1 className="name">{item.name}</h1>
                  <NavLink to={`/services/${item.productLink}`}>
                    <h2 className="product">{item.product}</h2>
                  </NavLink>
                  <p className="desc">{item.desc}</p>
                  <div className="btn-container">
                    <Button
                      text="View"
                      link={`/portfolio${item.live}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-container">
        <div className="textBox">
          <p>
            As our client base continues to expand, we are excited to showcase
            the diverse and innovative work we do. Each project that we complete
            represents a commitment to excellence and our passion for helping
            businesses thrive online.
          </p>
        </div>
        <div className="btn-container">
          <Button text="Our Portfolio" link="/portfolio" />
          <Button text="Discovery Form" link="/discovery-form" />
        </div>
      </div>
    </>
  );
};

export default WorkCard;
