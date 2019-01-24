import React, { Component } from "react";
import { Form, Icon, Button } from "antd";
import Input from "./common/Input";
import Forms from "./common/Form";

class ForgotPassword extends Forms {
  state = { account: { company: "", username: "" } };
  render() {
    const { account } = this.state;
    return (
      <div>
        <Form layout="inline" style={{ maxWidth: 300, margin: "auto" }}>
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
            placeholder="E-mail"
          />
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%", marginLeft: "5%" }}
          >
            Şifre Sıfırla
          </Button>
        </Form>
      </div>
    );
  }
}

export default ForgotPassword;
