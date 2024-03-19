import { db } from '../../../firbase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Button from '../../button';
import style from '../card.module.css';

const SocialCard = () => {
    const [priceCard, setPriceCard] = useState([]);
    const fetchData = async () => {
        try {
            const priceData = [];
            const snapshot = await getDocs(collection(db, "SocialMedia"));
            snapshot.forEach((element) => {
                const data = element.data();
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
    }, []);
    return ( 
        <div className={style.cardContainer}>
            {priceCard.map((item) => {
                return (
                    <div className={style.priceCard} key={item.id}>
                        <h1 className={style.priceTitle}>{item.title}</h1>
                        <h2 className={style.price}>{item.price}</h2>
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
                            <Button link="/contact" text="Start now" />
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default SocialCard;