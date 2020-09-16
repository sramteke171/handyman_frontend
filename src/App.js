import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import AllTechnicians from "./components/AllTechnicians.js";
import TechnicianDetail from "./components/TechnicianDetail.js";
import AllRequests from "./components/AllRequests.js";
import RequestDetail from "./components/RequestDetail.js";
import AllCustomers from "./components/AllCustomers.js";
import CustomerDetail from "./components/CustomerDetail.js";
import CustomerProfile from "./components/CustomerProfile.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";

const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3001/api";

console.log("testing back end url", backendUrl);

//App is the main component that contain all the other components used in this project
class App extends Component {
  constructor(props) {
    super(props);
    // super(props);
    this.timer = "";

    this.state = {
      technicians: [],
      users: [],
      requests: [],
      categories: [],
    };
  }

  componentDidMount = () => {
    this.getRequests();
    this.getCustomers();
    this.getTechnicians();
  };

  getTechnicians() {
    axios
      .get("http://localhost:3001/api/techniciansC", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          technicians: response.data.technicians,
        });
      });
  }

  // createTechnician = asynch(e) => {
  createTechnician = (e) => {
    e.preventDefault();
    console.log("add technicians() - e.target", e.target);
    console.log("add technicians() - e.target.name.value", e.target.name.value);
    console.log(e.target.user_name.value);
    console.log(e.target.password.value);

    if (
      e.target.name.value == "" ||
      e.target.user_name.value == "" ||
      e.target.password.value == ""
    ) {
      alert("Please enter user details");
    } else {
      axios
        .post(`${backendUrl}/techniciansC`, {
          name: e.target.name.value,
          username: e.target.user_name.value,
          password: e.target.password.value,
        })
        .then((response) => {
          console.log(
            "add technician() - response.data.technicians",
            response.data.technician
          );
          let tempArray = this.state.technicians;
          tempArray.push(response.data.technician);
          this.setState({
            technicians: tempArray,
          });
        });
    } //end - else
  };

  //Update technician
  updateTechnician = (e) => {
    e.preventDefault();
    console.log("update technnician method - e.target", e.target);

    let technician_Id = e.target.technician_Id.value;
    console.log("technician_Id ", technician_Id);

    axios
      .put(`${backendUrl}/techniciansC/${technician_Id}`, {
        name: e.target.name.value,
        username: e.target.user_name.value,
        password: e.target.password.value,
        age: parseInt(e.target.age.value),
        img: e.target.img.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        city: e.target.city.value,
        state: e.target.state.value,
        address: e.target.address.value,
      })
      .then((response) => {
        this.getTechnicians();
        console.log(response);
      });
  };

  //Delete Technician
  deleteTechnician = (e) => {
    e.preventDefault();
    console.log("delete request - e.target", e.target);
    console.log("delete request - e.target.id", e.target.id);

    let technician_Id = parseInt(e.target.id);
    axios
      // .delete(`${backendUrl}/techniciansC/${parseInt(e.target.id)}`)
      .delete(`${backendUrl}/techniciansC/${technician_Id}`)
      .then((response) => {
        this.getTechnicians();
        console.log(response);
      });
  };

  //REQUESTS Section
  getRequests() {
    axios
      .get("http://localhost:3001/api/requestsC", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("Request API", response);
        this.setState({
          requests: response.data.requests,
        });
      });
  }

  createRequest = (e) => {
    e.preventDefault();
    console.log("add request - e.target", e.target);
    console.log("add request - e.target.value", e.target.req_desc.value);
    if (e.target.req_desc.value == "") {
      alert("Please type in Description field");
    }
    if (e.target.req_desc.value) {
      axios
        .post(`${backendUrl}/requestsC`, {
          req_desc: e.target.req_desc.value,
        })
        .then((response) => {
          console.log("add request method", response.data.request);
          let tempArray = this.state.requests;
          // tempArray.push(response.data.request);
          tempArray.push(response.data.request);
          this.setState({
            requests: tempArray,
          });
        });
    } //end if
  };

  //UPDATE Request
  updateRequest = (e) => {
    e.preventDefault();
    console.log(e.target);

    let request_Id = e.target.request_Id.value;
    console.log("update request- request_Id ", request_Id);
    console.log("req_start_date", e.target.existing_req_start_date.value);
    console.log("req_end_date", e.target.existing_req_end_date.value);

    let new_start_date = "";
    let new_end_date = "";
    if (e.target.new_start_date.value) {
      new_start_date = e.target.new_start_date.value;
    } else {
      new_start_date = e.target.existing_req_start_date.value;
    }

    if (e.target.new_end_date.value) {
      new_end_date = e.target.new_end_date.value;
    } else {
      new_end_date = e.target.existing_req_end_date.value;
    }

    axios
      .put(`${backendUrl}/requestsC/${request_Id}`, {
        req_desc: e.target.req_desc.value,
        // req_start_date: e.target.req_start_date.value,
        // req_end_date: e.target.req_end_date.value,
        req_start_date: new_start_date,
        req_end_date: new_end_date,
        // user_id: e.target.user_id.value,
        // tech_id: e.target.tech_id.value,
      })
      .then((response) => {
        this.getRequests();
        console.log(response);
      });
  };

  //DELETE Request
  deleteRequest = (e) => {
    e.preventDefault();
    console.log("delete request - e.target", e.target);
    console.log("delete request - e.target.id", e.target.id);

    let request_Id = parseInt(e.target.id);
    axios
      // .delete(`${backendUrl}/requestsC/${parseInt(e.target.id.value)}`)
      .delete(`${backendUrl}/requestsC/${request_Id}`)
      .then((response) => {
        this.getRequests();
        console.log(response);
      });
  };

  //CUSTOMERS or USERS
  getCustomers() {
    axios
      .get("http://localhost:3001/api/users", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          users: response.data.users,
        });
      });
  }

  createCustomer = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.name.value);
    console.log(e.target.user_name.value);
    console.log(e.target.password.value);

    if (
      e.target.name.value == "" ||
      e.target.user_name.value == "" ||
      e.target.password.value == ""
    ) {
      alert("Please enter user details");
    } else {
      axios
        .post(`${backendUrl}/users`, {
          name: e.target.name.value,
          username: e.target.user_name.value,
          password: e.target.password.value,
        })
        .then((response) => {
          console.log("create customer method", response.data.user);
          let tempCustArray = this.state.users;
          tempCustArray.push(response.data.user);
          this.setState({
            users: tempCustArray,
          });
        });
    } //end else
  };

  signupUser = (e) => {
    e.preventDefault();
    console.log("signupuser method- e.target ", e.target);
    console.log("signupuser method-  e.target.name.value", e.target.name.value);
    if (
      e.target.name.value == "" ||
      e.target.user_name.value == "" ||
      e.target.password.value == ""
    ) {
      alert("Please enter user details");
    }
    if (
      e.target.name.value &&
      e.target.user_name.value &&
      e.target.password.value
    ) {
      axios
        .post(`${backendUrl}/auth/signup`, {
          name: e.target.name.value,
          username: e.target.user_name.value,
          password: e.target.password.value,
          age: parseInt(e.target.age.value),
          phone: e.target.phone.value,
          email: e.target.email.value,
          city: e.target.city.value,
          state: e.target.state.value,
          address: e.target.address.value,
        })
        .then((response) => {
          console.log("signupUser method", response.data.users);
          let tempCustArray = this.state.users;
          tempCustArray.push(response.data.user);
          this.setState({
            users: tempCustArray,
          });
          // response.Redirect();
          // <Redirect to="/users/CustomerProfile.js" />;
        });
    } //end -else
  };

  //Update Customer
  updateCustomer = (e) => {
    e.preventDefault();
    console.log("update customer method - e.target", e.target);
    let user_Id = e.target.customer_Id.value;
    // let user_Id = 16; //parseInt(e.target.id);
    // let technician_Id = e.target.id;
    console.log("user_Id ", user_Id);

    axios
      .put(`${backendUrl}/users/${user_Id}`, {
        name: e.target.name.value,
        username: e.target.user_name.value,
        password: e.target.password.value,
        age: parseInt(e.target.age.value),
        phone: e.target.phone.value,
        email: e.target.email.value,
        city: e.target.city.value,
        state: e.target.state.value,
        address: e.target.address.value,
      })
      .then((response) => {
        this.getCustomers();
        console.log(response);
      });
  };

  deleteCustomer = (e) => {
    e.preventDefault();
    console.log("delete request - e.target", e.target);
    console.log("delete request - e.target.id", e.target.id);

    let user_Id = parseInt(e.target.id);
    axios
      // .delete(`${backendUrl}/users/${parseInt(e.target.id.value)}`)
      .delete(`${backendUrl}/users/${user_Id}`)
      .then((response) => {
        this.getCustomers();
        console.log(response);
      });
  };

  loginUser = (e) => {
    e.preventDefault();
    console.log("loginUser method- e.target ", e.target);
    console.log("loginUser method-  e.target.name.value", e.target.name.value);
    axios
      .post(`${backendUrl}/auth/login`, {
        name: e.target.name.value,
        username: e.target.user_name.value,
        password: e.target.password.value,
      })
      .then((response) => {
        console.log("loginUser method", response.data.users);
        let tempCustArray = this.state.users;
        tempCustArray.push(response.data.user);
        this.setState({
          users: tempCustArray,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Header
          requests={this.state.requests}
          users={this.state.users}
          technicians={this.state.technicians}
          categories={this.state.categories}
        />

        <main className="mainContainer">
          <div> </div>
          <Switch>
            <Route exact path="/" component={() => <Home />} />

            <Route
              exact
              path="/requestsC"
              component={() => (
                <AllRequests
                  requests={this.state.requests}
                  createRequest={this.createRequest}
                  deleteRequest={this.deleteRequest}
                  getRequest={this.getRequests}
                />
              )}
            />
            <Route
              exact
              path="/requestsC/:id"
              component={(routerProps) => (
                <RequestDetail
                  {...routerProps}
                  requests={this.state.requests}
                  updateRequest={this.updateRequest}
                  getRequest={this.getRequests}
                />
              )}
            />
            <Route
              exact
              path="/techniciansC"
              component={() => (
                <AllTechnicians
                  technicians={this.state.technicians}
                  createTechnician={this.createTechnician}
                  deleteTechnician={this.deleteTechnician}
                  getTechnician={this.getTechnicians}
                />
              )}
            />
            <Route
              exact
              path="/techniciansC/:id"
              component={(routerProps) => (
                <TechnicianDetail
                  {...routerProps}
                  technicians={this.state.technicians}
                  updateTechnician={this.updateTechnician}
                  getTechnician={this.getTechnicians}
                />
              )}
            />

            <Route
              exact
              path="/users"
              component={() => (
                <AllCustomers
                  users={this.state.users}
                  createCustomer={this.createCustomer}
                  deleteCustomer={this.deleteCustomer}
                  getCustomers={this.getCustomers}
                />
              )}
            />
            <Route
              exact
              path="/users/:id"
              component={(routerProps) => (
                <CustomerDetail
                  {...routerProps}
                  users={this.state.users}
                  updateCustomer={this.updateCustomer}
                  getCustomers={this.getCustomers}
                />
              )}
            />

            <Route
              exact
              path="/auth/signup"
              component={() => (
                <Signup
                  users={this.state.users}
                  signupUser={this.signupUser} //using auth
                  updateCustomer={this.updateCustomer}
                  deleteCustomer={this.deleteCustomer}
                  // createCustomer={this.createCustomer}
                />
              )}
            />

            <Route
              exact
              path="/users/profile/:id"
              component={() => (
                <CustomerProfile
                  users={this.state.users}
                  updateCustomer={this.updateCustomer}
                  deleteCustomer={this.deleteCustomer}
                />
              )}
            />

            <Route
              exact
              path="/auth/login"
              component={() => (
                <Login
                  users={this.state.users}
                  loginUser={this.loginUser}
                  getCustomers={this.getCustomers}
                />
              )}
            />
          </Switch>
          <div> </div>
        </main>
        <footer className="footer">
          <p className="sign">Handyman on Demand by Sachin.</p>
        </footer>
      </div>
    );
  }
}

export default App;
