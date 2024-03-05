import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firbase';
import Button from '../../button';
import './index.scss';

const PriceCard = (link) => {
  const [priceCard, setPriceCard] = useState([]);

  const fetchData = async () => {
    try {
      const priceData = [];
      const snapshot = await getDocs(collection(db, 'pricing'))
      snapshot.forEach((element) => {
        const data = element.data()
        priceData.push({
          id: element.id,
          title: data.title,
          price: data.price,
          li1: data.li1,
          li2: data.li2,
          li3: data.li3,
          li4: data.li4,
          li5: data.li5,
          li6: data.li6,
        });
      });
      setPriceCard(priceData);
    } catch (err) {
      alert('Error fetching data', err)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return ( 
    <div className="card-container">
      {priceCard.map((item) => {
        return (
          <div className="price-card" key={item.id}>
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <ul>
              <li>{item.li1}</li>
              <li>{item.li2}</li>
              <li>{item.li3}</li>
              <li>{item.li4}</li>
              <li>{item.li5}</li>
              <li>{item.li6}</li>
            </ul>
            <div className="btn-container">
              <Button link={`services${link}`} text='Show more' />
              <Button link="contact" text="Start project"/>
            </div>
          </div>
        )
      })}
      
  
      </div>
   );
}
 
export default PriceCard;