import { collection, getDocs } from "firebase/firestore";
import "./index.scss";
import { useEffect, useState } from "react";
import { db } from "../../../firbase.config";
import ReactPlayer from "react-player/lazy";
import Button from "../../button";

const Client = (props) => {
  const [client, setClient] = useState([]);

  const fetchData = async () => {
    try {
      const clientData = [];
      const snapshot = await getDocs(collection(db, props.name));
      snapshot.forEach((element) => {
        const data = element.data();
        clientData.push({
          id: element.id,
          name: data.name,
          img1: data.img1,
          img2: data.img2,
          img3: data.img3,
          img4: data.img4,
          mobile1: data.mobile1,
          mobile2: data.mobile2,
          mobile3: data.mobile3,
          client: data.client,
        });
      });
      setClient(clientData);
    } catch (err) {
      alert("Error fetching data", err);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="client-container">
      {client.map((item) => {
        return (
          <div key={item.id}>
            <div className="inner-container">
              <div className="text-box">
                <h2>{item.client}</h2>
                <p>{props.p}</p>
                <p>{props.p2}</p>
                <Button
                  text="View Site"
                  link={props.link}
                  target="_blank"
                  noreferer
                />
              </div>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={props.video}
                  playing
                  loop
                />
              </div>
            </div>

            <h2 className="name">{item.name}</h2>

            <div className="images">
              <img className="wireframe" src={item.img1} alt="wireframe" />
              <img className="wireframe" src={item.img3} alt="wireframe" />
              <img className="wireframe" src={item.img4} alt="wireframe" />
              <img className="contact" src={item.img2} alt="wireframe" />
              <img
                className="mobile-wireframe"
                src={item.mobile1}
                alt="wireframe"
              />
              <img
                className="mobile-wireframe"
                src={item.mobile2}
                alt="wireframe"
              />
              <img
                className="mobile-wireframe"
                src={item.mobile3}
                alt="wireframe"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Client;
