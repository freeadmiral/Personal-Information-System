import React, { Component } from "react";
import axios from "axios";
class Customers extends Component {
  state = { customers: [] };

  async componentDidMount() {
    const { data: customers } = await axios.get(
      "http://localhost:5000/api/customers"
    );
    this.setState({ customers });
  }
  render() {
    return (
      <div>
        {this.state.customers.map(customer => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </div>
    );
  }
}

export default Customers;
