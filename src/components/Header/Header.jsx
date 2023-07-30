import React, { useState } from "react";
import avatar from "../../assets/images/Avatar.jpg";
import { ReactComponent as Notification } from "../../assets/svgs/notification-status.svg";
import { ReactComponent as Search } from "../../assets/svgs/search-normal.svg";
import Avatar from "../Avatar/Avatar";
import BreadCrumbs from "../BreadCrumb/BreadCrumb";
import "./Header.scss";

function Header({ title, breadcrumbsMenu }) {
  const [theme, setTheme] = useState(true);
  function changeTheme() {
    setTheme((mode) => !mode);
  }

  return (
    <header className="header">
      <div className="header-left">
        {breadcrumbsMenu ? (
          <BreadCrumbs breadcrumbs={breadcrumbsMenu} />
        ) : (
          <h2>{title}</h2>
        )}
      </div>
      <div className="header-right">
        <button onClick={changeTheme}>{theme ? "light" : "dark"}</button>
        <div className="searchbar">
          {/*<input type="text" placeholder="Search..." />*/}
          <Search />
        </div>
        <Notification />
        <Avatar src={avatar} />
      </div>
    </header>
  );
}

export default Header;
