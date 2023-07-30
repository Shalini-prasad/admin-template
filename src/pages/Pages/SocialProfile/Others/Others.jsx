import React from "react";
import connector1 from "../../../../assets/images/connector1.png";
import connector2 from "../../../../assets/images/connector2.png";
import interest1 from "../../../../assets/images/interset1.png";
import interest2 from "../../../../assets/images/interset2.png";
import interest3 from "../../../../assets/images/interset3.png";
import interest4 from "../../../../assets/images/interset4.png";
import interest5 from "../../../../assets/images/interset5.png";
import { ReactComponent as Hastag } from "../../../../assets/svgs/hashtag.svg";
import FileList from "../../../../components/FileList/FileList";
import Tag from "../../../../components/Tag/Tag";
import Media from "../Media/Media";
import SectionTag from "../SectionTag/SectionTag";
import "./Others.scss";

function Others() {
  const interest = [
    {
      img: interest1,
    },
    {
      img: interest2,
    },
    {
      img: interest3,
    },
    {
      img: interest4,
    },
    {
      img: interest5,
    },
  ];
  return (
    <div className="profile-body-others">
      <div className="connecters">
        <SectionTag sectionName="Connecters" />
        <FileList
          src={connector1}
          className="avatar-online"
          title="Darlene Robertson"
          fileSize="12 mutuals"
        />
        <FileList
          src={connector2}
          className="avatar-online"
          title="Dianne Russell"
          fileSize="6 mutuals"
        />
        <FileList
          src={connector2}
          className="avatar-online"
          title="Jacob Jones"
          fileSize="5 mutuals"
        />
        <FileList
          src={connector2}
          className="avatar-online"
          title="Kathryn Murphy"
          fileSize="11 mutuals"
        />
        <FileList
          src={connector2}
          className="avatar-online"
          title="Cody Fisher"
          fileSize="21 mutuals"
        />
      </div>
      <div className="interest">
        <Media sectionName="Interest" mediaData={interest} />
      </div>
      <div className="hastag">
        <SectionTag sectionName="Follow Hashtag" />
        <Tag className="tag" Icon={Hastag} tagName="fashion2022" />
        <Tag className="tag" Icon={Hastag} tagName="fScoutus" />
        <Tag className="tag" Icon={Hastag} tagName="shoes" />
        <Tag className="tag" Icon={Hastag} tagName="newmenukfc" />
        <Tag className="tag" Icon={Hastag} tagName="uikits" />
        <Tag className="tag" Icon={Hastag} tagName="starbuckout" />
        <Tag className="tag" Icon={Hastag} tagName="dashboard" />
        <Tag className="tag" Icon={Hastag} tagName="figma" />
        <Tag className="tag" Icon={Hastag} tagName="ui" />
      </div>
    </div>
  );
}

export default Others;
