import React from "react";

import { ReactComponent as Play } from "../../../../assets/svgs/play.svg";
import SectionTag from "../SectionTag/SectionTag";
import "./Media.scss";
function Media({ sectionName, mediaData }) {
  return (
    <div className="media">
      <SectionTag sectionName={sectionName} link="See all" />
      <div className="media-grid">
        {mediaData.map((media) => (
          <div className="media-box" key={media.img}>
            <img src={media.img} alt="media" />
            {media.videoTimeline && (
              <div className="video-tag">
                <Play />
                <p>{media.videoTimeline}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Media;
