import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firbase.config";
import Button from "../../button";
import style from "./index.module.css";

const PriceCard = (props) => {
  const [priceCard, setPriceCard] = useState([]);
  const [isToggled, setIsToggled] = useState();

  const fetchData = async () => {
    try {
      const priceData = [];
      const snapshot = await getDocs(collection(db, props.name));
      snapshot.forEach((element) => {
        const data = element.data();
        priceData.push({
          id: element.id,
          title: data.title,
          price: data.price,
          month: data.month,
          link: data.link,
          li0: data.li0,
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

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className={style.toggle}>
        <label name="checkbox">Annually</label>
        <div className={style.toggleButton}>
          <input
            type="checkbox"
            id="checkbox"
            className={style.checkbox}
            onClick={handleToggle}
          />
          <label htmlFor="checkbox" id="sub" className={style.sub}>
            <div className={style.circle}></div>
          </label>
        </div>
        <label htmlFor="checkbox">Monthly</label>
      </div>
      <div className={style.cardContainer}>
        {priceCard.map((item, index) => {
          const cardClass =
            index === 1
              ? `${style.priceCard} ${style.active}`
              : style.priceCard;
          return (
            <div className={cardClass} key={item.id}>
              <ul>
                <li className={style.priceTitle}>{item.title}</li>
                <li className={style.price}>
                  {isToggled ? item.month : item.price}
                </li>
                <li className={style.discount}>{ !isToggled && item.li0}</li>
                <li className={style.bottomBar}>{item.li1}</li>
                <li className={style.bottomBar}>{item.li2}</li>
                <li className={style.bottomBar}>{item.li3}</li>
                <li className={style.bottomBar}>{item.li4}</li>
                <li className={style.bottomBar}>{item.li5}</li>
                <li className={style.bottomBar}>{item.li6}</li>
                <li className={style.bottomBar}>{item.li7}</li>
                <li className={style.bottomBar}>{item.li8}</li>
              </ul>
              <div className={style.btnContainer}>
                <Button
                  link={`${item.link}`}
                  text="Show more"
                  background="var(--primary)"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PriceCard;
