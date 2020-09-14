import React, { Component } from "react";

class CustomerDetail extends Component {
  render() {
    const customerDetail = this.props.users.find((user) => {
      return user.id == this.props.match.params.id;
    });

    return (
      <div>
        <h2>Edit Customer Profile: {customerDetail.name} </h2>
        {/* <h2>Edit Technician: </h2> */}

        <form onSubmit={this.props.updateCustomer}>
          <center>
            <input type="hidden" name="customer_Id" value={CustomerDetail.id} />
            Name: <input type="text" name="name" value={customerDetail.name} />
            <br />
            Username:{" "}
            <input
              type="text"
              name="user_name"
              value={customerDetail.username}
            />
            <br />
            Password:{" "}
            <input
              type="text"
              name="password"
              value={customerDetail.password}
            />
            <br />
            Age: <input type="text" name="age" value={customerDetail.age} />
            <br />
            Phone:{" "}
            <input type="text" name="phone" value={customerDetail.phone} />
            <br />
            Email:{" "}
            <input type="text" name="email" value={customerDetail.email} />
            <br />
            City: <input type="text" name="city" value={customerDetail.city} />
            <br />
            State:{" "}
            <input type="text" name="state" value={customerDetail.state} />
            <br />
            Address:{" "}
            <input type="text" name="address" value={customerDetail.address} />
            <br />
            <br />
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;
            <input type="submit" value="Edit" />
            &nbsp;
          </center>
        </form>
      </div>
    );
  }
}
export default CustomerDetail;
