import { Link } from "react-router-dom";
import "./index.scss";

const Button = (props) => {
  const buttonStyle = {
    background: props.background,
    color: props.color,
    fontSize: props.fontSize + "px",
    boxShadow: props.boxShadow,
  };

  return (
    <Link
      className="flat-btn"
      to={props.link}
      type={props.type}
      target={props.target}
      role="button"
      tabIndex={0}
      aria-label={`Link to ${props.text}`}
    >
      <button style={buttonStyle}>{props.text}</button>
    </Link>
  );
};

export default Button;
