import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
  state = { account: {} };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.doSubmit();
  };

  renderInput = (name, label, type = "text") => {
    const { account } = this.state;
    return (
      <Input
        placeholder={"Enter " + name}
        name={name}
        value={account[name]}
        onChange={this.handleChange}
        label={label}
        type={type}
      />
    );
  };
}

export default Form;
