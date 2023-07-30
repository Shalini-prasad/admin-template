import React from "react";
import BoardFeedCard from "./BoardFeedCard/BoardFeedCard";
import { ReactComponent as MoreIcon } from "../../../../assets/svgs/linear-more.svg";
import "./BoardFeed.scss";

function BoardFeed({ headingTitle, fileCount, children }) {
  return (
    <div className="board-feed">
      <div className="heading">
        <div className="heading-title">
          <p>{headingTitle}</p>
          <span>{fileCount}</span>
        </div>
        <MoreIcon />
      </div>
      {children}
    </div>
  );
}

export default BoardFeed;
