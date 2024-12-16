import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.scss";

const SlideButton = (props) => {
    const buttonStyle = {
    background: props.background,
    color: props.color,
    fontSize: props.fontSize + "px",
    boxShadow: props.boxShadow,
  };
    return (
        <NavLink to={props.link} aria-label='link to case study'>
            <div className="btn btn-arrow-slide">
                <button
                    style={buttonStyle}
                    className="btn-arrow-slide-cont btn-arrow-slide-cont--blue"
                >
                    <span className="btn-arrow-slide-circle" aria-hidden="true">
                    <span className="btn-arrow-slide-arrow btn-arrow-slide-icon"></span>
                    </span>
                    <span className="btn-arrow-slide-text"> {props.text} </span>
                </button>
            </div>
        </NavLink>
       
    );
};

export default SlideButton;