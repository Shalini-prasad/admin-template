import React from "react";
import Feed from "./Feed/Feed";
import Others from "./Others/Others";
import Profile from "./Profile/Profile";
import "./SocialProfile.scss";

function SocialProfile() {
  return (
    <div className="profile-body">
      <Profile />
      <Feed />
      <Others />
    </div>
  );
}

// <Feed/>
// <Others/>
export default SocialProfile;
