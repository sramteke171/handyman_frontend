import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      users: [],
      technicians: [],
      categories: [],
    };
  }

  render() {
    return (
      <div className="hContainer">
        <Link className="title" to="/">
          <center>
            <p className="hTitle"> Handyman On Demand </p>
          </center>
        </Link>
        <div className="navbar">
          <div class="link">
            &nbsp;&nbsp;
            <Link to="/requestsC" className="all_requests">
              Work Requests
            </Link>{" "}
            &nbsp;&nbsp;
            <Link to="/techniciansC" className="all_requests">
              Technicians
            </Link>{" "}
            &nbsp;&nbsp;
            <Link to="/users" className="all_requests">
              Customers
            </Link>{" "}
            &nbsp;&nbsp;
          </div>
          <div>
            <select
              className="dropdown"
              onChange={this.getPath}
              placeholder="handyman categories"
            >
              <option value="names" class="optionClass">
                ------- Handyman Categories -------
              </option>
              <option value="names" class="optionClass">
                --------- Plumber ---------
              </option>
              <option value="names" class="optionClass">
                --------- Carpenter ---------
              </option>
              <option value="names" class="optionClass">
                --------- Electrician ---------
              </option>
              <option value="names" class="optionClass">
                --------- Roofer ---------
              </option>
              <option value="names" class="optionClass">
                --------- Landscaper ---------
              </option>
              <option value="names" class="optionClass">
                --------- Car Mechanic ---------
              </option>
              {/* {this.props.allNames.map((name, idx) => {
                return (
                  <option key={idx} value={name}>
                    {name}
                  </option>
                );
              })} */}
            </select>
            <Link
              className="searchButton"
              to={this.state.path}
              onClick={this.change}
            >
              Search
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/auth/signup" className="Signup">
              Signup
            </Link>{" "}
            | &nbsp;
            <Link to="/auth/login" className="Login">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
