import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firbase.config";
import Button from "../../button";
import "../basicPrice/index.scss";

const PriceCard = (props) => {
  const [priceCard, setPriceCard] = useState([]);
  const [isToggled, setIsToggled] = useState();
  const labelStyle = {
    color: props.color,
  };
  const fetchData = async () => {
    try {
      const priceData = [];
      const snapshot = await getDocs(collection(db, props.name));
      snapshot.forEach((element) => {
        const data = element.data();
        priceData.push({
          id: element.id,
          title: data.title,
          subTitle: data.subTitle,
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
      <div className='toggle' style={labelStyle}>
        <label name="checkbox">Annually</label>
        <div className='toggleButton'>
          <input
            type="checkbox"
            id="checkbox"
            className='checkbox'
            onClick={handleToggle}
          />
          <label htmlFor="checkbox" id="sub" className='sub'>
            <div className='price-circle'></div>
          </label>
        </div>
        <label htmlFor="checkbox">Monthly</label>
      </div>
      <div className='cardContainer'>
        {priceCard.map((item, index) => {
          const cardClass =
            index === 1
              ? `${'priceCard'} ${'active'}`
              : 'priceCard';
          return (
            <div className={cardClass} key={item.id}>
              <div className='priceTitle'>{item.title}</div>
               <p>{item.subTitle}</p>
              <ul>
                <li className='price'>
                  {isToggled ? item.month : item.price}
                </li>
                <li className='discount'>{!isToggled && item.li0}</li>
                <li className='bottomBar'>{item.li1}</li>
                <li className='bottomBar'>{item.li2}</li>
                <li className='bottomBar'>{item.li3}</li>
                <li className='bottomBar'>{item.li4}</li>
                <li className='bottomBar'>{item.li5}</li>
                <li className='bottomBar'>{item.li6}</li>
                <li className='bottomBar'>{item.li7}</li>
                <li className='bottomBar'>{item.li8}</li>
              </ul>
              <div className='btnContainer'>
                <Button
                  background="var(--primary)"
                  link={props.link}
                  text="Start now"
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
