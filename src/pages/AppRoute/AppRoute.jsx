import { Route, Routes } from "react-router-dom";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

import React from "react";

import AppLayout from "../AppLayout";
import Layout from "../Layout";
import BoardPage from "../Pages/BoardPage/BoardPage";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import SocialProfile from "../Pages/SocialProfile/SocialProfile";
import ProfileRoute from "../ProfileRoute";

function AppRoute() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/board" element={<BoardPage />} />
        <Route path="/list" element={<BoardPage />} />
        <Route path="/timeline" element={<BoardPage />} />
      </Route>

      <Route element={<ProfileRoute />}>
        <Route path="/social-profile" element={<SocialProfile />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
