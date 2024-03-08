import { useEffect, useState } from "react";
import { db } from "../../../firbase";
import { getDocs, collection } from "firebase/firestore";
import "./index.scss";

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
              <h3 className="name">{item.name}</h3>
              <p className="desc">{item.desc}</p>
              <div className="btn-container">
                <button className="btn" onClick={() => window.open(item.live)}>
                  VIEW
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
