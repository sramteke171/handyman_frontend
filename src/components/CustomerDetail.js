import React, { Component } from "react";

class CustomerDetail extends Component {
  render() {
    const customerDetail = this.props.users.find((user) => {
      return user.id == this.props.match.params.id;
    });

    return (
      <div class="editCustomerContainer">
        <div>
          <h2>
            Edit Customer : <br></br>
            {customerDetail.name}{" "}
          </h2>
          {/* <h2>Edit Technician: </h2> */}

          <form onSubmit={this.props.updateCustomer}>
            <center>
              <input
                type="hidden"
                name="customer_Id"
                defaultValue={customerDetail.id || ""}
              />
              Name:{" "}
              <input
                type="text"
                name="name"
                defaultValue={customerDetail.name || ""}
              />
              <br />
              Username:{" "}
              <input
                type="text"
                name="user_name"
                defaultValue={customerDetail.username || ""}
              />
              <br />
              Password:{" "}
              <input
                type="text"
                name="password"
                defaultValue={customerDetail.password || ""}
              />
              <br />
              Age:{" "}
              <input
                type="text"
                name="age"
                defaultValue={customerDetail.age || ""}
              />
              <br />
              Phone:{" "}
              <input
                type="text"
                name="phone"
                defaultValue={customerDetail.phone || ""}
              />
              <br />
              Email:{" "}
              <input
                type="text"
                name="email"
                defaultValue={customerDetail.email || ""}
              />
              <br />
              City:{" "}
              <input
                type="text"
                name="city"
                defaultValue={customerDetail.city || ""}
              />
              <br />
              State:{" "}
              <input
                type="text"
                name="state"
                defaultValue={customerDetail.state || ""}
              />
              <br />
              Address:{" "}
              <input
                type="text"
                name="address"
                defaultValue={customerDetail.address || ""}
              />
              <br />
              <br />
              <input type="submit" value="Edit" className="editButton" />
              &nbsp;
            </center>
          </form>
        </div>
      </div>
    );
  }
}
export default CustomerDetail;
