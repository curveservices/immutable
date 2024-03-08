import Button from "../../button";
import Card from "../../cards/work";
import "./index.scss";

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="feature-title">FEATURED WORK</h1>
      <Card />
      <div className="view-btn">
        <Button text="view more" link="featured-work" />
      </div>
    </div>
  );
};

export default Featured;
