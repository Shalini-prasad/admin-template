import React from "react";
import { Link } from "react-router-dom";
import "./CheckBox.scss";

function CheckBox({ checkboxText, terms }) {
  return (
    <div className="checkbox">
      <input type="checkbox" id="checkbox" name="checkbox" />
      <label htmlFor="checkbox">
        {checkboxText}
        <Link to="/terms-and-policy">
          <span>{terms}</span>
        </Link>
      </label>
    </div>
  );
}

export default CheckBox;
