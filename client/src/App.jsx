import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <div style={{ margin: 100 }}>
        <LoginForm />
      </div>
    );
  }
}

export default App;
