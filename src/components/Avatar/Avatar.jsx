import React from "react";
import "./Avatar.scss";

function Avatar({ className, src }) {
  return (
    <div className="avatar">
      {src && <img src={src} alt="profileIcon" />}
      {className && <div className={className}></div>}
    </div>
  );
}

export default Avatar;
