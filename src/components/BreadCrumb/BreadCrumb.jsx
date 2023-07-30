import React from "react";
import "./BreadCrumb.scss";
import { Link } from "react-router-dom";

const BreadCrumb = ({ breadcrumbs }) => {
  return (
    <nav className="breadcrumb-wrapper">
      <ol className="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === breadcrumbs.length - 1 ? "active" : ""
            }`}
          >
            <span>&gt;</span>
            {breadcrumb.link ? (
              <Link to={breadcrumb.link}>{breadcrumb.label}</Link>
            ) : (
              breadcrumb.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
