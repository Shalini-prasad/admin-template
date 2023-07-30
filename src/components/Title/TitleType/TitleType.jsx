import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BoardIcon } from "../../../assets/svgs/boardicon.svg";
import { ReactComponent as ListIcon } from "../../../assets/svgs/listIcon.svg";
import { ReactComponent as TimelineIcon } from "../../../assets/svgs/timelineIcon.svg";
import "./TitleType.scss";

function TitleType() {
  const [active, setActive] = useState("board");

  const handleItemClick = (page) => {
    setActive(page);
  };
  return (
    <div className="title-type-wrapper">
      <ul className="title-type">
        <li className={active === "board" ? "active" : ""}>
          <Link to="/board" onClick={() => handleItemClick("board")}>
            <BoardIcon />
            Board
          </Link>
        </li>
        <li className={active === "list" ? "active" : ""}>
          <Link to="/list" onClick={() => handleItemClick("list")}>
            <ListIcon />
            List
          </Link>
        </li>
        <li className={active === "timeline" ? "active" : ""}>
          <Link to="/timeline" onClick={() => handleItemClick("timeline")}>
            <TimelineIcon />
            TimeLine
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TitleType;
