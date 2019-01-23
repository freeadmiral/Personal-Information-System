import React, { Component } from "react";

class Form extends Component {
  state = { account: {} };
}

handleChange = ({ currentTarget: input }) => {
  const account = { ...this.state.account };
  account[input.name] = input.value;
  this.setState({ account });
};

export default Form;
