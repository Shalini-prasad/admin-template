import React from "react";
import "./SignIn.scss";

import { Link } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "../../../assets/svgs/googleicon.svg";
import { ReactComponent as SsoIcon } from "../../../assets/svgs/ssoicon.svg";
import Button from "../../../components/Button/Button";
import CallToAction from "../../../components/CallToAction/CallToAction";
import CheckBox from "../../../components/Checkbox/CheckBox";
import Input from "../../../components/Form/Input/Input";
import Seperator from "../../../components/Form/Seperator/Seperator";

function SignIn() {
  return (
    <div className="form-wrapper">
      <form>
        <div className="form-title">
          <h3>Sign in to SupeHub</h3>
        </div>

        <CallToAction
          href="https://accounts.google.com/"
          buttonText="Sign In with Google"
          className="cta button-google"
          buttonIcon={<GoogleIcon />}
        />
        <CallToAction
          href="#"
          buttonText="Sign In with SSO"
          className="cta button-google"
          buttonIcon={<SsoIcon />}
        />
        <Seperator />
        <Input
          label="Email or User Name"
          type="email"
          placeholder="Enter your Email id"
          name="email"
          forid="email"
          id="email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter Password"
          name="password"
          forid="password"
          id="password"
          className="password-input"
        />
        <Link to="/forgetpassword">
          <p className="forget-password">Forgot Password?</p>
        </Link>

        <div className="form-footer">
          <CheckBox checkboxText="Remember me" />
          <Button buttonText="Sign In" className="button-signin form-btn" />
        </div>
      </form>
      <p className="section-footer">
        Don’t have an account?
        <Link to="/signup">
          <span>Sign Up</span>
        </Link>
      </p>
    </div>
  );
}

export default SignIn;
