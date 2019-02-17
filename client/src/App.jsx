import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ForgotPassword from "./components/ForgotPassword";
import dashboard2 from "./components/dashboard2";
import VacationReq from "./components/VacationReq";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/dashboard" component={dashboard2} />
        <Route path="/vacation" component={VacationReq} />
        <Redirect from="/" to="/login" />
      </Switch>
    );
  }
}

export default App;
