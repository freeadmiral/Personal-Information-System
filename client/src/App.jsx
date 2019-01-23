import React, { Component } from "react";
import "./App.css";
import Customers from "./components/Customers";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default App;
