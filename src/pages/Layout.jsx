import React from "react";
import { Outlet } from "react-router-dom";
import LoginImg from "../components/LoginImg/LoginImg";

function Layout() {
  return (
    <section className="sign-in">
      <LoginImg />
      <Outlet />
    </section>
  );
}

export default Layout;
