import "./index.scss";
import notFound from "../../../assets/images/404.png";
import Button from "../../button";

const NotFound = () => {
  return (
    <div className="container">
      <h1>PAGE NOT FOUND</h1>
      <Button text="go back" link="/" />
      <img src={notFound} alt="page not found" />
    </div>
  );
};

export default NotFound;
