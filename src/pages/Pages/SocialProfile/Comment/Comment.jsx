import React from "react";
import "./Comment.scss";
import Avatar from "../../../../components/Avatar/Avatar";
import Input from "../../../../components/Form/Input/Input";
import { ReactComponent as EmojiIcon } from "../../../../assets/svgs/emogi.svg";
import { ReactComponent as CommentIcon } from "../../../../assets/svgs/comment.svg";

function Comment({ profileImage, userName, dateOfComment, commentText }) {
  return (
    <div className="post-profile">
      <div className="media">
        <Avatar src={profileImage} />
      </div>
      <div className="media-body">
        <div className="user-detail">
          <h5>{userName}</h5>
          <p>{dateOfComment}</p>
        </div>
        <div className="comment-text">{commentText}</div>
        <div className="reaction-btns">
          <EmojiIcon />
          <CommentIcon />
        </div>
      </div>
    </div>
  );
}

export default Comment;
