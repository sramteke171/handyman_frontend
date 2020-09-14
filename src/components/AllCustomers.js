import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllCustomers extends Component {
  render() {
    const allCustomers = this.props.users.map((user) => {
      return (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}> {user.name} </Link>
          <button id={user.id} onClick={this.props.deleteCustomer}>
            Delete
          </button>

          {/* <button id={user.id} onClick={this.props.updateCustomer}>
            Edit
          </button> */}
        </li>
      );
    });

    return (
      <div>
        <div class="requestContainer">
          <div className="all_requests">
            <form onSubmit={this.props.createCustomer}>
              <center>
                &nbsp; Name:
                <input type="text" name="name" /> &nbsp; Username:
                <input type="text" name="user_name" /> &nbsp; Password:
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
        </div>
        <div class="requestContainer">
          <h2> Customers List: </h2>
          <ul>{allCustomers}</ul>
        </div>
      </div>
    );
  }
}

export default AllCustomers;
