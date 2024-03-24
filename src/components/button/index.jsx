import { Link } from "react-router-dom";
import "./index.scss";

const Button = (props) => {
  const buttonStyle = {
    background: props.background,
    fontSize: props.fontSize + "px",
  };

  return (
    <button
      style={buttonStyle}
    >
      <Link
        className="flat-btn"
        to={props.link}
        type={props.type}
        target={props.target}
      >
        {props.text}
      </Link>
    </button>
   
  );
};

export default Button;
