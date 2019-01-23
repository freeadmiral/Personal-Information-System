import React, { Component } from "react";
import Input from "./common/Input";

class LoginForm extends Component {
  state = { account: { company: "", username: "", password: "" } };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div className="container" className="col-md-3 offset-4">
        <form className="m-5">
          <Input
            onChange={this.handleChange}
            value={account.company}
            name="company"
            type="text"
            label="Firma Kodu"
            placeholder="Firma Kodunuz"
          />
          <Input
            onChange={this.handleChange}
            value={account.username}
            name="username"
            type="text"
            label="Username"
            placeholder="Kullanıcı Adını Girin"
          />
          <Input
            onChange={this.handleChange}
            value={account.password}
            name="password"
            type="password"
            label="Password"
            placeholder="Şifrenizi Girin"
          />
          <button type="submit" className="btn btn-primary">
            Giriş Yap
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
