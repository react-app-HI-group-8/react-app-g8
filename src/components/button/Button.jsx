import React from "react";
import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  btnWhite: "btn-white",
  btnPurple: "btn-purple",
  btnBlack: "btn-black",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
