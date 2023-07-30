import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";

function AppLayout() {
  const breadcrumbs = [
    { label: "Workspace", link: "/" },
    { label: "Supehub Team", link: "/category" },
    { label: "SupeHub Web Design" },
  ];
  const [expandMenu, setExpandMenu] = useState(true);
  const handleSidebarItemClick = () => {
    setExpandMenu((s) => !s);
  };

  return (
    <div className={`app ${!expandMenu ? "hii" : ""}`}>
      <SideBar onClick={handleSidebarItemClick} />
      <div className="layout management">
        <Header breadcrumbsMenu={breadcrumbs} />
        <Title />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
