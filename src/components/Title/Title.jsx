import React from "react";
import "./Title.scss";
import TitleType from "./TitleType/TitleType";
import Button from "../Button/Button";
import { ReactComponent as Flash } from "../../assets/svgs/flashIcon.svg";
import { ReactComponent as Star } from "../../assets/svgs/starIcon.svg";
import { ReactComponent as Setting } from "../../assets/svgs/settings.svg";
import { ReactComponent as MoreIcon } from "../../assets/svgs/linear-more.svg";
import CallToAction from "../CallToAction/CallToAction";
import { ReactComponent as Add } from "../../assets/svgs/addExpand.svg";

function Title() {
  return (
    <div className="title">
      <div className="name-board">
        <h2>SupeHub Web Design</h2>
        <div className="actions">
          <div className="title-btn">
            <Button buttonText={<Flash />} className="button-title" />
            <Button buttonText={<Star />} className="button-title" />
            <Button buttonText={<Setting />} className="button-title" />
            <Button buttonText={<MoreIcon />} className="button-title" />
          </div>
          <div className="contributors"></div>
          <CallToAction
            href="#"
            className="button-invite-member"
            buttonText="Invite Member"
            buttonIcon={<Add />}
          />
        </div>
      </div>
      <TitleType />
    </div>
  );
}

export default Title;
