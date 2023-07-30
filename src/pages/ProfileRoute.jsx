import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

function ProfileRoute() {
  const [expandMenu, setExpandMenu] = useState(true);
  const handleSidebarItemClick = () => {
    setExpandMenu((s) => !s);
  };
  return (
    <div className="profile">
      <div className={`app ${!expandMenu ? "hii" : ""}`}>
        <SideBar onClick={handleSidebarItemClick} />
        <div className="layout socials">
          <Header title="Social Profile" />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProfileRoute;
