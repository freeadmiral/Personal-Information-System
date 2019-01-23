import React from "react";

const Input = ({ name, label, type, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        className="form-control"
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
