import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllCustomers extends Component {
  render() {
    const allCustomers = this.props.users.map((user) => {
      return (
        <li key={user.id}>
          <Link class="link" to={`/users/${user.id}`}>
            {" "}
            {user.name}{" "}
          </Link>
          <button
            id={user.id}
            class="delete"
            onClick={this.props.deleteCustomer}
          >
            Delete
          </button>
        </li>
      );
    });

    return (
      <div>
        <div class="createCustomerContainer">
          <form onSubmit={this.props.createCustomer}>
            <center>
              &nbsp; Name:&nbsp;
              <input type="text" name="name" /> &nbsp; Username:&nbsp;
              <input type="text" name="user_name" /> &nbsp; Password:&nbsp;
              <input type="text" name="password" /> &nbsp;
              <input
                type="submit"
                value="Add Customer"
                className="addCustomerButton"
              />{" "}
              &nbsp;
            </center>
          </form>
        </div>
        <div class="allCustomerContainer">
          {/* <h2> Customers: </h2> */}
          <center>
            <label class="customerHeading"> Customers : </label>{" "}
          </center>
          <ul>{allCustomers}</ul>
        </div>
      </div>
    );
  }
}

export default AllCustomers;
