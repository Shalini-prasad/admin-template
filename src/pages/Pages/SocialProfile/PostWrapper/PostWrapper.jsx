import React from "react";
import "./PostWrapper.scss";

import { ReactComponent as CommentIcon } from "../../../../assets/svgs/comment.svg";
import { ReactComponent as Date } from "../../../../assets/svgs/date.svg";
import { ReactComponent as Emoji } from "../../../../assets/svgs/emogi.svg";
import { ReactComponent as ThreeDots } from "../../../../assets/svgs/linear-more.svg";
import { ReactComponent as Location } from "../../../../assets/svgs/location.svg";
import { ReactComponent as Share } from "../../../../assets/svgs/share.svg";
import Avatar from "../../../../components/Avatar/Avatar";

import feedAvatar from "../../../../assets/images/feedAvatar.png";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Form/Input/Input";
import Comment from "../Comment/Comment";

function PostWrapper({
  profilePic,
  location,
  dateOfPost,
  imgSrc,
  textMsg,
  hashTags,
  comment,
  emoji,
  commentNumber,
  shareCount,
}) {
  const commentDetails = [
    {
      id: 1,
      profileImage: feedAvatar,
      userName: "Theresa Webb",
      dateOfComment: "23 March",
      commentText:
        "I also tried it. It's a great set of UI Kits. It saves me 50% of my time at work. Its price is also very cheap and the author's enthusiastic support. So happy!",
    },
    {
      id: 2,
      profileImage: feedAvatar,
      userName: "Jerome Bell",
      dateOfComment: "23 March",
      commentText: "Everyday I “just” listen to music👌🏿",
    },
    {
      id: 3,
      profileImage: feedAvatar,
      userName: "Ronald Richards",
      dateOfComment: "23 March",
      commentText: "Send information promised in meeting",
    },
    {
      id: 4,
      profileImage: feedAvatar,
      userName: "Albert Flores",
      dateOfComment: "23 March",
      commentText:
        "No wonder they say that you need to be able to leave in time. The clearest examples of this are Lam and Alonso",
    },
  ];

  return (
    <div className="post-title">
      <div className="post-profile">
        <div className="media">
          <Avatar className="avatar-online" src={profilePic} />
        </div>
        <div className="media-body">
          <h5>Theresa Webb</h5>
          <div className="user-details">
            <p>
              <Location className="location" />
              {location}
            </p>

            <p>
              <Date className="dateOfPost" /> {dateOfPost}
            </p>
          </div>
        </div>
        <div className="more-items">
          <ThreeDots />
        </div>
      </div>
      <div className="post-content">
        <div className="images">
          {imgSrc &&
            imgSrc.map((image) => (
              <div key={image.id} className="image">
                <img src={image.src} alt="user-posts" />
              </div>
            ))}
        </div>
        <div className="text">
          <p>{textMsg}</p>
          <span className="hashtag">{hashTags}</span>
        </div>
      </div>
      <div className="post-buttons">
        <div className="emoji post-btn">
          <Emoji />
          {emoji && <span>{emoji}</span>}
        </div>
        <div className="comment post-btn">
          <CommentIcon />
          {commentNumber && <span>{commentNumber}</span>}
        </div>
        <div className="share post-btn">
          <Share />
          {shareCount && <span>{shareCount}</span>}
        </div>
      </div>
      {/* comment-section*/}
      {comment && (
        <div className="post-comments">
          <div className="static-section">
            <Avatar src={feedAvatar} />
            <Input type="text" placeholder="Tell something to Theresa ?" />
          </div>
          {commentDetails.map((commentdetail, i) => (
            <Comment
              key={i}
              profileImage={commentdetail.profileImage}
              userName={commentdetail.userName}
              dateOfComment={commentdetail.dateOfComment}
              commentText={commentdetail.commentText}
            />
          ))}
          <Button buttonText="View More" className="button-viewMore" />
        </div>
      )}
    </div>
  );
}

export default PostWrapper;
