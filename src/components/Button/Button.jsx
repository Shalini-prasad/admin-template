import React from "react";
import "./Button.scss";

function Button({ buttonText, className }) {
  return <button className={className}>{buttonText}</button>;
}

export default Button;
