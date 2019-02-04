import React, { Component } from "react";
import jwtDecode from "jwt-decode";

class Dashboard extends Component {
  state = {
    username: ""
  };

  // componentDidMount() {
  //   const token = localStorage.token;
  //   const decoded = jwtDecode(token);
  //   this.setState({
  //     username: decoded.username
  //   });
  // }

  render() {
    return <h1>asadd</h1>;
  }
}

export default Dashboard;
