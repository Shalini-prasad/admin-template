import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as GoogleIcon } from "../../../assets/svgs/googleicon.svg";
import CallToAction from "../../../components/CallToAction/CallToAction";
import CheckBox from "../../../components/Checkbox/CheckBox";
import Input from "../../../components/Form/Input/Input";
import Seperator from "../../../components/Form/Seperator/Seperator";

function SignUp() {
  return (
    <div className="form-wrapper">
      <form className="className">
        <div className="form-title">
          <h3>Create New Account</h3>
        </div>

        <CallToAction
          href="https://accounts.google.com/"
          buttonText="Sign In with Google"
          className="cta button-google"
          buttonIcon={<GoogleIcon />}
        />
        <Seperator />
        <Input
          label="Email"
          type="email"
          placeholder="Example@supehub.com"
          name="email"
          forid="email"
          id="email"
        />

        <Input
          label="User Name"
          type="text"
          placeholder="Enter user name"
          name="name"
          forid="name"
          id="name"
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
        <Input
          label="Re-password"
          type="password"
          placeholder="Enter Password"
          name="password"
          forid="password"
          id="password"
          className="password-input"
        />

        <div className="form-footer">
          <CheckBox checkboxText="I accept " terms="Terms & Policy" />
          <Link to="/social-profile">
            <CallToAction
              buttonText="Sign Up"
              className="button-signup form-btn"
            />
          </Link>
        </div>
      </form>
      <p className="section-footer">
        Have an account?
        <Link to="/signin">
          <span>Sign In</span>
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
