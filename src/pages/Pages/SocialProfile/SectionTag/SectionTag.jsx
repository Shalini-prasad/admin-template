import React from "react";
import "./SectionTag.scss";
import { Link } from "react-router-dom";

function SectionTag({ sectionName, link }) {
  return (
    <div className="section-tag">
      <p>{sectionName}</p>
      {link && <Link to="/">{link}</Link>}
    </div>
  );
}

export default SectionTag;
