import React from "react";
import FileList from "../../../../components/FileList/FileList";
import "./Profile.scss";
// import Avatar from "../../../../assets/images/Avatar.jpg";
import media1 from "../../../../assets/images/media1.png";
import media2 from "../../../../assets/images/media2.png";
import media3 from "../../../../assets/images/media3.png";
import media4 from "../../../../assets/images/media4.png";
import media5 from "../../../../assets/images/media5.png";
import media6 from "../../../../assets/images/media6.png";
import profile from "../../../../assets/images/socials-avatar.png";
import { ReactComponent as Email } from "../../../../assets/svgs/email.svg";
import { ReactComponent as Html } from "../../../../assets/svgs/html.svg";
import { ReactComponent as MoreLinear } from "../../../../assets/svgs/linear-more.svg";
import { ReactComponent as Pdf } from "../../../../assets/svgs/pdf.svg";
import { ReactComponent as Phone } from "../../../../assets/svgs/phone.svg";
import { ReactComponent as Psd } from "../../../../assets/svgs/psd.svg";
import { ReactComponent as Share } from "../../../../assets/svgs/share.svg";
import { ReactComponent as Svg } from "../../../../assets/svgs/svg.svg";
import Button from "../../../../components/Button/Button";
import Media from "../Media/Media";
import SectionTag from "../SectionTag/SectionTag";

function Profile() {
  const media = [
    {
      img: media1,
    },
    {
      img: media2,
    },
    {
      img: media3,
      videoTimeline: "6",
    },
    {
      img: media4,
    },
    {
      img: media5,
      videoTimeline: "1:08",
    },
    {
      img: media6,
    },
  ];

  return (
    <div className="profile-body-details">
      <div className="profile-details">
        <div className="user-info">
          <div className="profile-avatar">
            <img src={profile} alt="profile-avatar" />
          </div>
          <h2>Theresa Webb</h2>
          <p>🤣 Always keep smile on your mouth 🤣🤣</p>
        </div>

        <ul className="user-followers">
          <li className="followers">
            <p>Followers</p>
            <span>11,29 M</span>
          </li>

          <li className="following">
            <p>Following</p>
            <span>12,920</span>
          </li>

          <li className="live-stream">
            <p>Live Stream</p>
            <span>29,87 M</span>
          </li>
        </ul>

        <ul className="user-contact">
          <li>
            <Email />
            <p>theresawebb@supehub.com</p>
          </li>

          <li>
            <Phone />
            <p>(+1) 682 7892 9182</p>
          </li>

          <li>
            <Share />
            <p>supehub.com/theresa_webb_121</p>
          </li>
        </ul>
        <div className="contact-button">
          <Button buttonText="Send Message" className="button-send-msg" />
          <Button buttonText={<MoreLinear />} className="button-more" />
        </div>
      </div>

      <Media sectionName="Media" mediaData={media} />
      <div className="file-lists">
        <SectionTag sectionName="Files & Links" link="See all" />

        <FileList Icon={Pdf} title="mine.pdf" fileSize="231.72 KB" />
        <FileList Icon={Svg} title="i9.svg" fileSize="231.72 KB" />
        <FileList
          Icon={Psd}
          title="Jerry-2020_I-9_Form.psd"
          fileSize="231.72 KB"
        />
        <FileList Icon={Pdf} title="sharefile.pdf" fileSize="231.72 KB" />
        <FileList Icon={Psd} title="pdf-docusign.psd" fileSize="231.72 KB" />
        <FileList Icon={Html} title="Kerrysform.html" fileSize="231.72 KB" />
      </div>
    </div>
  );
}

export default Profile;
