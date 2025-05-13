import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firbase.config";
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
    <>
      <div className="subtitle">
        <i>About us</i>
      </div>
      <h2 className="main-title">Meet The Team</h2>
      <div className="textBox">
        <div className="left">
          <div className="subtitle">UK Web Experts</div>
          <p>
            With more than 15 years experience, we’ve designed, built and
            managed bespoke websites and advertising campaigns for companies
            across the UK.
          </p>
        </div>
        <div className="right">
          <div className="subtitle">Straight-Talking Support</div>
          <p>
            Our friendly team won’t overwhelm you with technical jargon or
            suggest expensive solutions that aren’t appropriate. We listen to
            your needs and provide advice in plain English.
          </p>
        </div>
      </div>
      <div className="team-container">
        {teamCard.map((item) => {
          return (
            <div className="team-card" key={item.id}>
              <img className="teamImg" src={item.img} alt="team member" />
              <div className="text-box">
                <h2 className="name">{item.name}</h2>
                <h3 className="job subtitle">{item.job}</h3>
                <h4 className="desc">{item.desc}</h4>
              </div>
              <Socials
                fblink="https://www.facebook.com/profile.php?id=61557552873479"
                lilink="https://www.linkedin.com/company/21439623"
                instalink="https://www.instagram.com/immutable_studio/"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeamCard;
