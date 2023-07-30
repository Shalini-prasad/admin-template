import React from "react";
import "./FileList.scss";
import Avatar from "../Avatar/Avatar";

function FileList({ src, className, Icon, title, fileSize }) {
  return (
    <div className="file-list">
      <div className="file-icon">
        {src && <Avatar src={src} className={className} />}
        {Icon && <Icon />}
      </div>

      <div className="file-details">
        <p>{title}</p>
        <span>{fileSize}</span>
      </div>
    </div>
  );
}

export default FileList;
