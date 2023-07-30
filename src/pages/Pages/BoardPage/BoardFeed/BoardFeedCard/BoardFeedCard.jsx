import React from "react";
import { ReactComponent as MoreIcon } from "../../../../../assets/svgs/linear-more.svg";
import Tag from "../../../../../components/Tag/Tag";
import "./BoardFeedCard.scss";

import { ReactComponent as BoardComment } from "../../../../../assets/svgs/boardComment.svg";
import { ReactComponent as BoardShare } from "../../../../../assets/svgs/boardShare.svg";

function BoardFeedCard({
  cardTitle,
  imgSrc,
  cardText,
  shareCount,
  commentCount,
  Icon,
  tag,
}) {
  return (
    <div className="board-card">
      <div className="board-card-title">
        <h4>{cardTitle}</h4>
        <MoreIcon />
      </div>

      <div className="board-card-tag">
        <Tag tagName="New Feature" className="supeHubWebDesign-tag" />
        <Tag
          tagName="21 days left"
          className={`daysLeft-tag ${tag}`}
          Icon={Icon}
        />
      </div>

      {imgSrc && (
        <div className="board-card-img">
          <img src={imgSrc} alt="Research potential trade shows" />
        </div>
      )}

      {cardText && (
        <div className="board-card-text">
          <p>{cardText}</p>
        </div>
      )}

      <div className="board-card-reactions">
        <div className="user-action">
          <div className="share">
            <BoardShare />
            <span>{shareCount}</span>
          </div>

          <div className="comment">
            <BoardComment />
            <span>{commentCount}</span>
          </div>
        </div>

        <div className="contributors">
          <p>contributors</p>
        </div>
      </div>
    </div>
  );
}

export default BoardFeedCard;
/* 
card div
    div -> h4-more icon
    div -> two tags
    div -> img
    div -> share( icon- text)
           comment( icon - text)
           contributions(use images and + symbol optional)
*/
