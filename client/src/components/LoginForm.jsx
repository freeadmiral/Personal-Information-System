import React, { Component } from "react";
import { Form, Icon, Button, Checkbox, Card } from "antd";
import Input from "./common/Input";
import { Link } from "react-router-dom";
import FormClass from "./common/Form";
import { Avatar } from "antd";
import logo from "../Header-Icon-User.png";
import { login } from "./../services/authServices";

class LoginForm extends FormClass {
  state = {
    account: { company: "", username: "", password: "" },
    errors: {}
  };

  doSubmit = async e => {
    const { account } = this.state;
    const { data: token } = await login(account.username, account.password);
    if (token) {
      localStorage.setItem("token", token);
      this.props.history.push("/dash");
    } else {
      alert("user not found");
    }
  };

  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <div>
          <Avatar
            style={{ marginLeft: "47.2%", marginBottom: "3%" }}
            size={110}
            src={logo}
          />
        </div>
        <Card
          title="PBS Giriş"
          style={{
            width: 310,
            margin: "auto",
            marginLeft: "42%"
          }}
        >
          <Form
            onSubmit={this.handleSubmit}
            className="login-form"
            style={{
              maxWidth: 300,
              margin: "auto"
            }}
          >
            <Input
              prefix={<Icon type="shop" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={account.company}
              name="company"
              onChange={this.handleChange}
              type="text"
              placeholder="Firma kodu"
            />
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={account.username}
              name="username"
              onChange={this.handleChange}
              type="text"
              placeholder="Kullanıcı adı"
            />
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={account.password}
              name="password"
              onChange={this.handleChange}
              type="password"
              placeholder="Şifre"
            />
            <Checkbox style={{ marginBottom: "7%", marginLeft: "7%" }}>
              Remember me
            </Checkbox>
            <Link
              className="login-form-forgot"
              style={{ float: "right" }}
              to="/forgotpassword"
            >
              Şifremi Unuttum
            </Link>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%", marginLeft: "5%" }}
            >
              Giriş Yap
            </Button>
          </Form>
        </Card>
      </React.Fragment>
    );
  }
}

export default LoginForm;
