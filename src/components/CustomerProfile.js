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
              value={CustomerProfile.id}
            />
            Name: <input type="text" name="name" value={customerProfile.name} />
            <br />
            Username:{" "}
            <input
              type="text"
              name="user_name"
              value={customerProfile.username}
            />
            <br />
            Password:{" "}
            <input
              type="text"
              name="password"
              value={customerProfile.password}
            />
            <br />
            Age: <input type="text" name="age" value={customerProfile.age} />
            <br />
            Phone:{" "}
            <input type="text" name="phone" value={customerProfile.phone} />
            <br />
            Email:{" "}
            <input type="text" name="email" value={customerProfile.email} />
            <br />
            City: <input type="text" name="city" value={customerProfile.city} />
            <br />
            State:{" "}
            <input type="text" name="state" value={customerProfile.state} />
            <br />
            Address:{" "}
            <input type="text" name="address" value={customerProfile.address} />
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
