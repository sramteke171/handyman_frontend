import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Login extends Component {
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

      <div class="loginContainer">
        <div>
          <h2>Login</h2>
          <form onSubmit={this.props.loginUser}>
            {/* Name <input type="text" name="name" /> */}
            Username* <input type="text" name="user_name" />
            <br />
            Password* <input type="text" name="password" />
            <br />
            <br />
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;
            <input type="submit" value="Login" className="loginButton" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
