import React from "react";
import "./ForgetPassword.scss";
import LoginImg from "../../../components/LoginImg/LoginImg";
import { Link } from "react-router-dom";
import Input from "../../../components/Form/Input/Input";
import CallToAction from "../../../components/CallToAction/CallToAction";
import Button from "../../../components/Button/Button";

function ForgetPassword() {
  return (
    <div className="form-wrapper">
      <form>
        <div className="form-title">
          <h3>Reset Password</h3>
          <p>The new password will send to your email.</p>
        </div>

        <Input
          label="Email"
          type="email"
          placeholder="Example@supehub.com"
          name="email"
          forid="email"
          id="email"
        />

        <div className="form-footer">
          <Link to="/signin">
            <CallToAction
              buttonText="Back to Login"
              className="button-back-to-login"
            />
          </Link>
          <Link to="/signin">
            <Button buttonText="Send" className="button-send form-btn" />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgetPassword;
