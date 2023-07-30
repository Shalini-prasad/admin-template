import React, { useState } from "react";
import { Link } from "react-router-dom";
import supeHub from "../../assets/images/SupeHub Logo.png";
import { ReactComponent as ExpandIcon } from "../../assets/svgs/addExpand.svg";
import { ReactComponent as TagRight } from "../../assets/svgs/arrowRight.svg";
import { ReactComponent as SupehubIcon } from "../../assets/svgs/logoicon.svg";
import { ReactComponent as Menuexpand } from "../../assets/svgs/menuExpand.svg";
import { ReactComponent as MinusIcon } from "../../assets/svgs/minusShrink.svg";

// sidebar menus

import { ReactComponent as Authorization } from "../../assets/svgs/authorization.svg";
import { ReactComponent as Calender } from "../../assets/svgs/calender.svg";
import { ReactComponent as Dashboard } from "../../assets/svgs/dashboardicon1.svg";
import { ReactComponent as Ecommerce } from "../../assets/svgs/ecommerce.svg";
import { ReactComponent as Finance } from "../../assets/svgs/finance.svg";
import { ReactComponent as HelpCenter } from "../../assets/svgs/helpCenter.svg";
import { ReactComponent as Logistic } from "../../assets/svgs/logistic.svg";
import { ReactComponent as Mail } from "../../assets/svgs/mail.svg";
import { ReactComponent as Management } from "../../assets/svgs/management.svg";
import { ReactComponent as Messages } from "../../assets/svgs/message.svg";
import { ReactComponent as ProfileCircle } from "../../assets/svgs/profile-circle.svg";
import { ReactComponent as TableList } from "../../assets/svgs/tableList.svg";

import "./SideBar.scss";

const sidebarData = [
  {
    Icon: Dashboard,
    title: "Dashboard",
    Expand: true,
    expandListItems: [
      {
        menu: "Dashboard 1",
      },
      {
        menu: "Dashboard 2",
      },
    ],
  },
  {
    Icon: TableList,
    title: "Table List",
  },
  {
    Icon: Messages,
    title: "Messages",
    Expand: true,
    notification: "24",
    expandListItems: [
      {
        menu: "Dashboard 1",
      },
      {
        menu: "Dashboard 2",
      },
    ],
  },
  {
    Icon: Mail,
    title: "Mail",
    notification: "6",
  },
  {
    Icon: Ecommerce,
    title: "E-Commerce",
    Expand: true,
    expandListItems: [
      {
        menu: "Dashboard 1",
      },
      {
        menu: "Dashboard 2",
      },
    ],
  },
  {
    Icon: Finance,
    title: "Finance",
    Expand: true,
    expandListItems: [
      {
        menu: "Dashboard 1",
      },
      {
        menu: "Dashboard 2",
      },
    ],
  },
  {
    Icon: Logistic,
    title: "Logistic",
    Expand: true,
    expandListItems: [
      {
        menu: "Dashboard 1",
      },
      {
        menu: "Dashboard 2",
      },
    ],
  },
  {
    Icon: Management,
    title: "Management",
    Expand: true,
    // expandListItems: ["Version #1", "Version #2"],
    expandListItems: [
      {
        link: "/board",
        menu: "Version #1",
      },
      {
        link: "/social-profile",
        menu: "Version #2",
      },
    ],
  },
  {
    Icon: Calender,
    title: "Calender",
    Expand: true,
    expandListItems: [
      {
        menu: "Dashboard 1",
      },
      {
        menu: "Dashboard 2",
      },
    ],
  },
  {
    Icon: HelpCenter,
    title: "Help Center",
    Expand: true,
    expandListItems: [
      {
        menu: "Dashboard 1",
      },
      {
        menu: "Dashboard 2",
      },
    ],
  },
  {
    Icon: ProfileCircle,
    title: "Profile",
    Expand: true,
    expandListItems: [
      { link: "/Social-profile", menu: "Social" },
      { link: "/company", menu: "Company" },
      { link: "/member", menu: "Member" },
      { link: "/customer", menu: "Customer" },
    ],
  },
  {
    Icon: Authorization,
    title: "Authorization",
    Expand: true,
    expandListItems: [
      { link: "/Social-profile", menu: "Social" },
      { link: "/company", menu: "Company" },
      { link: "/member", menu: "Member" },
      { link: "/customer", menu: "Customer" },
    ],
  },
];

function SideBarList({ Icon, title, Expand, notification, expandListItems }) {
  const [expandMenu, setExpandMenu] = useState(false);

  const handleSidebarItemClick = () => {
    setExpandMenu((prevExpandMenu) => !prevExpandMenu);
  };
  return (
    <div className="sidebarlist">
      <div
        className={`sidebar-item  ${expandMenu ? "expand" : ""}`}
        onClick={handleSidebarItemClick}
      >
        <Icon className="icon" />
        <p>{title}</p>
        {notification && (
          <div className="notification">
            <span>{notification}</span>
          </div>
        )}
        <div className={`${!Expand ? "addIcon" : ""}`}>
          {expandMenu ? <MinusIcon /> : <ExpandIcon />}
        </div>
      </div>
      {Expand && (
        <ul className={!expandMenu ? "closeMenu" : "openMenu"}>
          {expandListItems.map((item, i) => (
            <Link to={item.link} key={i}>
              <li>{item.menu}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
function SideBar({ onClick }) {
  const [expandMenu, setExpandMenu] = useState(true);

  const handleSidebarItemClick = () => {
    setExpandMenu((prevState) => !prevState);
  };

  const handleClick = () => {
    // Call the first function using react props
    onClick();
    // Call the second function manually
    handleSidebarItemClick();
  };

  return (
    <div className={`sidebar-wrapper ${!expandMenu ? "width80" : ""}`}>
      <div className="logo-wrapper">
        {expandMenu ? (
          <div className="logo-image">
            {supeHub && <img src={supeHub} alt="" />}
          </div>
        ) : (
          <SupehubIcon />
        )}
        {expandMenu ? (
          <div className="collapse" onClick={handleClick}>
            <Menuexpand />
          </div>
        ) : (
          <div className="rightArrow" onClick={handleClick}>
            <TagRight />
          </div>
        )}
      </div>
      <div className="sidebar-menus">
        {sidebarData.map((list, index) => (
          <SideBarList
            key={index}
            Icon={list.Icon}
            title={expandMenu && list.title}
            notification={list.notification}
            Expand={expandMenu && list.Expand}
            expandListItems={list.expandListItems}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
