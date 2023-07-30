import React from "react";
import "./Input.scss";

function Input({ label, type, placeholder, name, forid, id, className }) {
  return (
    <div className="mb-16 input-wrapper">
      <label htmlFor={forid}>{label} </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={className}
        required
      />
    </div>
  );
}

export default Input;
