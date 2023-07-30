import React from "react";
import "../Button/Button.scss";

function CallToAction({ href, className, buttonText, buttonIcon }) {
  return (
    <a href={href} className={className}>
      {buttonIcon}
      <p>{buttonText}</p>
    </a>
  );
}

export default CallToAction;
