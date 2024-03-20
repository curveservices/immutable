import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firbase";
import Button from "../../button";
import style from "../card.module.css";

const PriceCard = () => {
  const [priceCard, setPriceCard] = useState([]);

  const fetchData = async () => {
    try {
      const priceData = [];
      const snapshot = await getDocs(collection(db, "pricing"));
      snapshot.forEach((element) => {
        const data = element.data();
        priceData.push({
          id: element.id,
          img: data.img,
          title: data.title,
          price: data.price,
          link: data.link,
          li1: data.li1,
          li2: data.li2,
          li3: data.li3,
          li4: data.li4,
          li5: data.li5,
          li6: data.li6,
          li7: data.li7
        });
      });
      setPriceCard(priceData);
    } catch (err) {
      alert("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.cardContainer}>
      {priceCard.map((item) => {
        return (
          <div className={style.priceCard} key={item.id}>
            <img src={item.img} alt="price image" />
            <h2 className={style.priceTitle}>{item.title}</h2>
            <h3 className={style.price}>{item.price}</h3>
            <ul>
              <li>{item.li1}</li>
              <hr />
              <li>{item.li2}</li>
              <hr />
              <li>{item.li3}</li>
              <hr />
              <li>{item.li4}</li>
              <hr />
              <li>{item.li5}</li>
              <hr />
              <li>{item.li6}</li>
              <hr />
              <li>{item.li7}</li>
            </ul>
            <div className={style.btnContainer}>
              <Button
                link={`${item.link}`}
                text="Show more"
                background="var(--primary)"
              />
              <Button link="/contact" text="Start now" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PriceCard;
