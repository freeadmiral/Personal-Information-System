import React, { Component } from "react";
import Input from "./common/Input";

class RegisterForm extends Component {
  state = { account: { username: "", password: "", name: "" } };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div className="container">
        <form>
          <Input
            onChange={this.handleChange}
            value={account.username}
            name="username"
            type="text"
            label="Username"
            placeholder="Enter Username"
          />
          <Input
            onChange={this.handleChange}
            value={account.password}
            name="password"
            type="password"
            label="Password"
            placeholder="Enter Password"
          />
          <Input
            onChange={this.handleChange}
            value={account.name}
            name="name"
            type="text"
            label="Name"
            placeholder="Enter Name"
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
