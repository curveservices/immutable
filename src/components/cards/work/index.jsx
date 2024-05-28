import { useEffect, useState } from "react";
import { db } from "../../../firbase";
import { getDocs, collection } from "firebase/firestore";
import "./index.scss";
import Button from "../../button";

const Card = () => {
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
          desc: data.desc,
          live: data.live,
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
    <div className="card-container">
      {card.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.img} alt="feature image" className="card-image" />
            <div className="content">
              <div className="name">{item.name}</div>
              <p className="desc">{item.desc}</p>
              <div className="btn-container">
                <Button
                  text="Featured work"
                  background="var(--services-link)"
                  link="featured"
                />
                <button
                  className="btn"
                  text="VIEW SITE"
                  background="var(--services-link)"
                  onClick={() => window.open(item.live)}>
                  VIEW SITE
                  </button>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
