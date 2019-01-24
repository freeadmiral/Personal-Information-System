import React, { Component } from "react";
import { Form, Icon, Button, Checkbox } from "antd";
import Inputs from "./common/Input";

class LoginForm2 extends Component {
  state = {
    account: { company: "", username: "", password: "" }
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <Form className="login-form" style={{ maxWidth: 300, margin: "auto" }}>
        <div>
          <Inputs
            prefix={<Icon type="shop" style={{ color: "rgba(0,0,0,.25)" }} />}
            value={account.company}
            name="company"
            onChange={this.handleChange}
            type="text"
            placeholder="Firma kodu"
          />
          <Inputs
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            value={account.username}
            name="username"
            onChange={this.handleChange}
            type="text"
            placeholder="Kullanıcı adı"
          />
          <Inputs
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            value={account.password}
            name="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Şifre"
          />
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" style={{ float: "right" }} href="">
            Şifremi Unuttum
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            Giriş Yap
          </Button>
        </div>
      </Form>
    );
  }
}

export default LoginForm2;
