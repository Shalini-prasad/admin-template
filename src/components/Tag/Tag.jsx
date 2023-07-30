import React from "react";
import "./Tag.scss";

function Tag({ Icon, tagName, className }) {
  return (
    <div className={className}>
      {Icon && <Icon />}
      {tagName && <p>{tagName}</p>}
    </div>
  );
}

export default Tag;
