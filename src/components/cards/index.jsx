import { useState } from 'react';
import './index.scss';

const Card = () => {
    const [card, setCard] = useState([]);

    return (
        <div className="card-container">
            {card.map((item) => {
                <div className="card" key={item.id}>
                    <img src={item.img} alt="feature image" className='card-image' />
                    <div className="content">
                        <h3 className='name'>{item.name}</h3>
                        <p className="desc">{item.desc}</p>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Card;