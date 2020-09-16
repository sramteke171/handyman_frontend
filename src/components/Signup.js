import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    // const signup = this.props.users.map((user) => {
    //   return (
    //     <li key={user.id}>
    //       <Link to={`/users/${user.id}`}> {user.name} </Link>
    //       <button id={user.id} onClick={this.props.deleteCustomer}>
    //         Delete
    //       </button>
    //       <button id={user.id} onClick={this.props.updateCustomer}>
    //         Edit
    //       </button>
    //     </li>
    //   );
    // });

    return (
      //   <div class="requestContainer">
      //     {/* <h3> Create a New Customer </h3> */}
      //     <form onSubmit={this.props.addCustomer}>
      //       <input type="text" name="name" />
      //       <input type="submit" value="Add Customer" />
      //     </form>
      //   </div>

      <div class="signupContainer">
        <div>
          <h2>Come on, Join us! </h2>
          <form onSubmit={this.props.signupUser}>
            {/* <form onSubmit={this.props.createCustomer}> */}
            Name* <input type="text" name="name" />
            <br />
            Username* <input type="text" name="user_name" />
            <br />
            Password* <input type="text" name="password" />
            <br />
            Age <input type="text" name="age" />
            <br />
            Phone <input type="text" name="phone" />
            <br />
            Email <input type="email" name="email" />
            <br />
            City <input type="text" name="city" />
            <br />
            State <input type="text" name="state" />
            <br />
            Address <input type="text" name="address" />
            <br />
            <br />
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;
            <input type="submit" value="SignUp" className="signupButton" />{" "}
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
