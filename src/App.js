import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import AllTechnicians from "./components/AllTechnicians.js";
import AllRequests from "./components/AllRequests.js";
import RequestDetail from "./components/RequestDetail.js";
import AllCustomers from "./components/AllCustomers.js";
import Header from "./components/Header";
import WorkCategory from "./components/WorkCategory";

const backendUrl = process.env.BACKEND_URL || "http://localhost:3001/api";

//App is the main component that contain all the other components used in this project
class App extends Component {
  constructor(props) {
    super(props);
    this.timer = "";

    this.state = {
      technicians: [],
      users: [],
      requests: [],
      categories: [],
    };
  }

  componentDidMount = () => {
    // axios.get("http://localhost:3001/api/users").then((response) => {
    //   // axios.get(`${backendUrl}/artists`).then((response) => {
    //   console.log(response);
    //   this.setState({
    //     users: response.data.users,
    //     // requests: response.data.allArtists,
    //   });
    // });

    axios
      .get("http://localhost:3001/api/requestsC", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          requests: response.data.requests,
        });
      });

    axios
      // .get(`${backendUrl}/users`, {
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

    axios
      // .get(`${backendUrl}/techniciansC`, {
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
  };

  addTechnician = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.name.value);
    axios
      .post(`${backendUrl}/techniciansC`, {
        name: e.target.name.value,
      })
      .then((response) => {
        console.log("add technician method", response.data.technicians);
        let tempArray = this.state.technicians;
        tempArray.push(response.data.Technician);
        this.setState({
          technicians: tempArray,
        });
      });
  };

  addCustomer = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.name.value);
    axios
      .post(`${backendUrl}/users`, {
        customer: e.target.customer.value,
      })
      .then((response) => {
        console.log("add customer method", response.data.users);
        let tempArray = this.state.users;
        tempArray.push(response.data.user);
        this.setState({
          users: tempArray,
        });
      });
  };

  addRequest = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.name.value);
    axios
      .post(`${backendUrl}/requestsC`, {
        name: e.target.name.value,
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
  };
  // request.req_desc

  getRequests() {
    axios
      .get("http://localhost:3001/api/requestsC", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          requests: response.data.requests,
        });
      });
  }

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
          users: response.data.requests,
        });
      });
  }

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
          technicians: response.data.requests,
        });
      });
  }

  deleteRequest(e) {
    console.log(e.target);
    axios
      .delete(`${backendUrl}/requestsC/$(e.target.id.value}`)
      .then((response) => {
        this.getRequests();
        console.log(response);
      });
  }
  deleteCustomer(e) {
    console.log(e.target);
    axios
      .delete(`${backendUrl}/users/$(e.target.id.value}`)
      .then((response) => {
        this.getCustomers();
        console.log(response);
      });
  }
  deleteTechnician(e) {
    console.log(e.target);
    axios
      .delete(`${backendUrl}/techniciansC/$(e.target.id.value}`)
      .then((response) => {
        this.getTechnicians();
        console.log(response);
      });
  }

  updateRequest(e) {
    console.log(e.target);
    axios
      .put(`${backendUrl}/requestsC/$(e.target.id.value}`)
      .then((response) => {
        this.getRequests();
        console.log(response);
      });
  }
  updateCustomer(e) {
    console.log(e.target);
    axios.put(`${backendUrl}/users/$(e.target.id.value}`).then((response) => {
      this.getRequests();
      console.log(response);
    });
  }
  updateTechnician(e) {
    console.log(e.target);
    axios
      .put(`${backendUrl}/techniciansC/$(e.target.id.value}`)
      .then((response) => {
        this.getRequests();
        console.log(response);
      });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">All Work Requests</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/techniciansC">All Technicians</Link> &nbsp;&nbsp;&nbsp;
          <Link to="/users">All Customers</Link>
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <AllRequests
                  requests={this.state.requests}
                  addRequest={this.addRequest}
                  deleteRequest={this.deleteRequest}
                />
              )}
            />
            <Route
              path="/requestsC/:id"
              component={(routerProps) => (
                <RequestDetail
                  {...routerProps}
                  requests={this.state.requests}
                />
              )}
            />
            <Route
              exact
              path="/techniciansC"
              component={() => (
                <AllTechnicians
                  technicians={this.state.technicians}
                  addTechnician={this.addTechnician}
                />
              )}
            />
            <Route
              exact
              path="/users"
              component={() => (
                <AllCustomers
                  customers={this.state.users}
                  addCustomers={this.addCustomer}
                  // customers={this.getAllCustomers}
                />
              )}
            />
            {/* <Route
              path="/artists/:id"
              component={(routerProps) => (
                <ArtistDetail {...routerProps} artists={this.state.artists} />
              )}
            /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

//   render() {
//     return (
//       <div className="App">
//         <Header
//           users={this.state.users}
//           technicians={this.state.technicians}
//           categories={this.state.categories}

//           // changeCategory={this.changeCategory}
//           // selectedCharacter={this.selectedCharacter}
//           // getMainRQ={this.getMainRandomQuote}
//         />
//         <main className="mainContainer">
//           <div> </div>
//           <Switch>
//             <Route
//               exact
//               path="/"
//               component={() => (
//                 <AllTechnicians
//                   artists={this.state.artists}
//                   addArtist={this.addArtist}
//                 />
//               )}
//             />
//             {/* <Route
//               path="/artists/:id"
//               component={(routerProps) => (
//                 <ArtistDetail {...routerProps} artists={this.state.artists} />
//               )}
//             /> */}

//             {/* <Route
//               exact
//               path="/"
//               render={(routerProps) => (
//                 <MainRandomQuote {...this.state} {...routerProps} />
//               )}
//             />
//             <Route
//               path="/character/:name"
//               render={(routerProps) => (
//                 <WorkCategory
//                   {...this.state}
//                   changeCategory={this.changeCategory}
//                   {...routerProps}
//                 />
//               )}
//             /> */}
//           </Switch>

//           <div> </div>
//         </main>
//         <footer className="footer">
//           <p className="sign">Handyman on Demand by Sachin.</p>
//         </footer>
//       </div>
//     );
//   }
// }

// changeCategory = (value) => {
//   this.setState({
//     newCategory: value,
//     clicked: !this.state.clicked,
//   });
// };
