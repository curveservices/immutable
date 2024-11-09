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
      to={props.link}
      type={props.type}
      target={props.target}
      role="button"
      tabIndex={0}
      aria-label={`Link to ${props.text}`}
    >
      <button
        className="flat-btn"
        style={buttonStyle}
        onClick={props.onClick}
        type={props.type}
        value={props.value}
      >
        {props.text}
      </button>
    </Link>
  );
};

export default Button;
