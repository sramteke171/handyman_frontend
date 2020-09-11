import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllCustomers extends Component {
  render() {
    const allCustomers = this.props.customers.map((user) => {
      return (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}> {user.name} </Link>
          <button id={user.id} onClick={this.props.deleteCustomer}>
            Delete
          </button>
          <button id={user.id} onClick={this.props.updateCustomer}>
            Edit
          </button>
        </li>
      );
    });

    return (
      <div>
        <h1> All Customers </h1>
        <h3> Create a New Customer </h3>
        <form onSubmit={this.props.addCustomer}>
          <input type="text" name="name" />
          <input type="submit" value="Add Customer" />
        </form>
        <ul>{allCustomers}</ul>
      </div>
    );
  }
}

export default AllCustomers;
