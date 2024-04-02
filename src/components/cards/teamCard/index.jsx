import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firbase";
import { useState, useEffect } from "react";
import Socials from "../../socials";
import "./index.scss";

const TeamCard = () => {
  const [teamCard, setTeamCard] = useState([]);

  const fetchData = async () => {
    try {
      const teamData = [];
      const snapshot = await getDocs(collection(db, "team"));
      snapshot.forEach((element) => {
        const data = element.data();
        teamData.push({
          id: element.id,
          img: data.img,
          name: data.name,
          job: data.job,
          desc: data.desc,
        });
      });
      setTeamCard(teamData);
    } catch (err) {
      alert("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="team-container">
      {teamCard.map((item) => {
        return (
          <div className="team-card" key={item.id}>
            <img className="teamImg" src={item.img} alt="team member" />
            <div className="text-box">
              <h1 className="name">{item.name}</h1>
              <h2 className="job">{item.job}</h2>
              <p className="desc">{item.desc}</p>
            </div>
            <Socials
              fblink="https://www.facebook.com/profile.php?id=61557552873479"
              lilink="https://www.linkedin.com/company/21439623"
              xlink="https://twitter.com/immutable_LDN"
            />
          </div>
        );
      })}
    </div>
  );
};

export default TeamCard;
