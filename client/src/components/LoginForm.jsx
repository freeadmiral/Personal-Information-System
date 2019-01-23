import React, { Component } from "react";
import Input from "./common/Input";

class LoginForm extends Component {
  state = { account: { username: "", password: "" } };

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
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
