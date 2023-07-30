import React from "react";
import Avatar from "../../../../components/Avatar/Avatar";
import "./Feed.scss";

import { ReactComponent as Hastag } from "../../../../assets/svgs/hashtag.svg";
import { ReactComponent as ImageAndVideo } from "../../../../assets/svgs/imsgesAndVideos.svg";
import Input from "../../../../components/Form/Input/Input";

import { ReactComponent as Mood } from "../../../../assets/svgs/Mood.svg";

import { ReactComponent as Attachment } from "../../../../assets/svgs/Attachment.svg";
// import { ReactComponent as AngryFace } from "../../../../assets/svgs/emoticons-angry-face.svg";
import profilePic from "../../../../assets/images/Avatar.jpg";
import feedAvatar from "../../../../assets/images/feedAvatar.png";
import Post1 from "../../../../assets/images/postImage.png";
import Post2 from "../../../../assets/images/postImage2.png";
import Post3 from "../../../../assets/images/postImage3.png";
import Post4 from "../../../../assets/images/postImage4.png";
import PostWrapper from "../PostWrapper/PostWrapper";

const Feed = () => {
  const imageSource = [
    {
      id: 1,
      src: Post1,
    },
    {
      id: 2,
      src: Post2,
    },
  ];
  const imageSource2 = [
    {
      id: 1,
      src: Post1,
    },
    {
      id: 2,
      src: Post2,
    },
    {
      id: 3,
      src: Post3,
    },
    {
      id: 4,
      src: Post4,
    },
  ];

  return (
    <div className="feed">
      <div className="create-post">
        {/* Avatar */}
        <div className="static-section">
          <Avatar src={feedAvatar} />
          <Input type="text" placeholder="Tell something to Theresa ?" />
        </div>
        <ul className="create-post-options">
          <li>
            <h4>
              <ImageAndVideo />
              Image & Video
            </h4>
          </li>
          <li>
            <h4>
              <Hastag />
              Hastag
            </h4>
          </li>

          <li>
            <h4>
              <Mood />
              Mood
            </h4>
          </li>

          <li>
            <h4>
              <Attachment />
              Attachment
            </h4>
          </li>
        </ul>
      </div>

      <div className="create-post-panel">
        <div className="post-wrapper">
          <PostWrapper
            profilePic={profilePic}
            location="Los Angeles"
            dateOfPost="23 March"
            textMsg="Trying out SuperHub UI kits. My work has progressed faster since using it. That was amazing!
            If you are a designer or a programmer, maybe try SupeHub as a new solution."
            hashTags="#supehub #uikits #dashboardui #uidesign"
          />
        </div>
        <div className="post-wrapper">
          <PostWrapper
            profilePic={profilePic}
            location="New York"
            dateOfPost="21 March"
            imgSrc={imageSource}
            textMsg="The amazing day"
            emoji="😠"
            commentNumber="1.2 K"
            shareCount="11.9 K"
            comment={true}
          />
        </div>
        <div className="post-wrapper">
          <PostWrapper
            profilePic={profilePic}
            location="Havana"
            dateOfPost="12 January"
            imgSrc={imageSource2}
            textMsg="The amazing day"
            commentNumber="1.2 K"
            shareCount="11.9 K"
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
