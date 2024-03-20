import { Link } from "react-router-dom";
import "./index.scss";

const Button = (props) => {
  const buttonStyle = {
    background: props.background,
    fontSize: props.fontSize + "px",
  };

  return (
    <Link
      className="flat-btn"
      to={props.link}
      style={buttonStyle}
      type={props.type}
      target={props.target}
    >
      {props.text}
    </Link>
  );
};

export default Button;
