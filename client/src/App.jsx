import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ForgotPassword from "./components/ForgotPassword";

class App extends Component {
  render() {
    return (
      <div style={{ margin: 100 }}>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    );
  }
}

export default App;
