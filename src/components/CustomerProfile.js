import React, { Component } from "react";

class CustomerProfile extends Component {
  render() {
    const customerProfile = this.props.users.find((user) => {
      return user.id == this.props.match.params.id;
    });

    return (
      <div>
        <h2>Welcome {customerProfile.name} </h2>

        <form onSubmit={this.props.updateCustomer}>
          <center>
            <input
              type="hidden"
              name="customer_Id"
              defaultValue={CustomerProfile.id}
            />
            Name:{" "}
            <input type="text" name="name" value={customerProfile.name || ""} />
            <br />
            Username:{" "}
            <input
              type="text"
              name="user_name"
              defaultValue={customerProfile.username || ""}
            />
            <br />
            Password:{" "}
            <input
              type="text"
              name="password"
              defaultValue={customerProfile.password || ""}
            />
            <br />
            Age:{" "}
            <input
              type="text"
              name="age"
              defaultValue={customerProfile.age || ""}
            />
            <br />
            Phone:{" "}
            <input
              type="text"
              name="phone"
              defaultValue={customerProfile.phone || ""}
            />
            <br />
            Email:{" "}
            <input
              type="text"
              name="email"
              defaultValue={customerProfile.email || ""}
            />
            <br />
            City:{" "}
            <input
              type="text"
              name="city"
              defaultValue={customerProfile.city || ""}
            />
            <br />
            State:{" "}
            <input
              type="text"
              name="state"
              defaultValue={customerProfile.state || ""}
            />
            <br />
            Address:{" "}
            <input
              type="text"
              name="address"
              defaultValue={customerProfile.address || ""}
            />
            <br />
            <br />
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;
            <input type="submit" value="Edit" />
            &nbsp;
          </center>
        </form>

        <form onSubmit={this.props.deleteCustomer}>
          <input type="submit" value="Delete User" />
        </form>
      </div>
    );
  }
}
export default CustomerProfile;
