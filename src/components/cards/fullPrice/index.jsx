import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firbase.config";
import Button from "../../button";
import style from "../basicPrice/index.module.css";

const PriceCard = (props) => {
  const [priceCard, setPriceCard] = useState([]);

  const fetchData = async () => {
    try {
      const priceData = [];
      const snapshot = await getDocs(collection(db, props.name));
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
          li7: data.li7,
          li8: data.li8,
        });
      });
      setPriceCard(priceData);
    } catch (err) {
      alert("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.name]);

  return (
    <div className={style.cardContainer}>
      {priceCard.map((item) => {
        return (
          <div className={style.priceCard} key={item.id}>
            <div className={style.heroContainer}>
              <h3 className={style.priceTitle}>{item.title}</h3>
              <h3 className={style.price}>{item.price}</h3>
            </div>
            <img src={item.img} className={style.cardImg} alt="price image" />

            <ul>
              <div className={style.listLeft}>
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} /> {item.li1}
                </li>
                <hr />
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} /> {item.li2}
                </li>
                <hr />
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} /> {item.li3}
                </li>
                <hr />
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} /> {item.li4}
                </li>
                <hr />
              </div>
              <div className={style.listRight}>
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} /> {item.li5}
                </li>
                <hr />
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} /> {item.li6}
                </li>
                <hr />
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} /> {item.li7}
                </li>
                <hr />
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} /> {item.li8}
                </li>
                <hr />
              </div>
            </ul>
            <div className={style.btnContainer}>
              <Button link="/contact" text="Start now" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PriceCard;
