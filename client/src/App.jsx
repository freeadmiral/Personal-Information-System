import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import dashboard2 from "./components/dashboard2";
import ProfileMenu from "./components/common/ProfileMenu";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LoginForm} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/dash" component={dashboard2} />
        <Route path="/pro" component={ProfileMenu} />
        <Redirect from="/" to="/login" />
      </Switch>
    );
  }
}

export default App;
