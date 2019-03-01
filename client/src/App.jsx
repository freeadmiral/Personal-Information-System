import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import VacationReq from "./components/VacationReq";
import Members from "./components/Members";
import Dashboard2 from "./components/Dashboard2";
import Chart from "./components/Chart";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/members" component={Members} />
        <Route path="/login" component={LoginForm} />
        <Route path="/vacation" component={VacationReq} />
        <Route path="/dash" component={Dashboard2} />
        <Route path="/teet" component={Chart} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    );
  }
}

export default App;
