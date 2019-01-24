import React from "react";
import { Input } from "antd";

const Inputs = ({
  name,
  placeholder,
  value,
  onChange,
  prefix,
  type = "text"
}) => {
  return (
    <Input
      prefix={prefix}
      style={{ margin: 15 }}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
};

export default Inputs;
