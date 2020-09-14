import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import MainRandomQuote from "./components/MainRandomQuote";
import Header from "./components/Header";
import WorkCategory from "./components/WorkCategory";

const backendurl = process.env.BACKEND_URL || "http://localhost:3001/api";

//App is the main component in charge to contain all the components used in this project
class App extends Component {
  constructor(props) {
    super(props);
    this.timer = "";

    this.state = {
      technicians: [],
      users: [],
      requests: [],
      categories: [],

      // allNames: [],
      // mainRandomQuote: [],
      // allData: [],
      // // newCharacter: true,
      // newCategory: true,
      // clicked: false,
    };
  }
  //getMainRandomQuote is in charge to get fetch data form the Random quote endpoint
  //from the Game of thrones API
  getMainRandomQuote = () => {
    axios
      // .get("https://game-of-thrones-quotes.herokuapp.com/v1/random", {
      .get("http://localhost:3001/api/users/", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        this.setState({
          mainRandomQuote: response.data,
        });
      });
  };
  //compoenenDidMount is in chage to download data to get the characters info
  componentDidMount = () => {
    //   axios.get("http://localhost:3001/api/users").then((response) => {
    //     // axios.get(`${backendUrl}/artists`).then((response) => {
    //     console.log(response);
    //     this.setState({
    //       users: response.data.users,
    //       // requests: response.data.allArtists,
    //     });
    //   });
    // };

    axios
      .get("https://game-of-thrones-quotes.herokuapp.com/v1/random/10", {
        // .get("http://localhost:3001/api/users", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        let names = [];
        response.data.map((obj) => {
          if (names.length > 0) {
            let load = true;
            for (let i = 0; i < names.length; i++)
              if (names[i] === obj.character.name) {
                load = false;
                break;
              }
            if (load) names.push(obj.character.name);
          } else names.push(obj.character.name);
        });
        this.setState({
          allNames: names,
          allData: response.data,
        });
      });
    this.getMainRandomQuote();
    this.time = setInterval(this.getMainRandomQuote, 6000);
  };

  //Change character is a "bell" function that indicates App the single player
  //is changing on Character component.
  //it was change charachter
  changeCategory = (value) => {
    this.setState({
      newCategory: value,
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div className="App">
        <Header
          allNames={this.state.allNames}
          selectedCharacter={this.selectedCharacter}
          getMainRQ={this.getMainRandomQuote}
          changeCategory={this.changeCategory}
        />
        <main className="mainContainer">
          {/* <banner className="banners" id="b1"></banner> */}
          <div> </div>
          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => (
                <MainRandomQuote {...this.state} {...routerProps} />
              )}
            />
            <Route
              path="/character/:name"
              render={(routerProps) => (
                <WorkCategory
                  {...this.state}
                  changeCategory={this.changeCategory}
                  {...routerProps}
                />
              )}
            />
          </Switch>
          {/* <banner className="banners" id="b2"></banner> */}
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

// componentDidMount = () => {
//   axios
//     .get("http://localhost:3001/api/requestsC", {
//       headers: {
//         Accept: "application/json",
//       },
//     })
//     .then((response) => {
//       let requests = [];
//       response.data.map((obj) => {
//         if (requests.length > 0) {
//           let load = true;
//           for (let i = 0; i < requests.length; i++)
//             if (requests[i] === obj.req_desc) {
//               // if (names[i] === obj.character.name) {
//               load = false;
//               break;
//             }
//           // if (load) requests.push(obj.character.name);
//         } else requests.push(obj.user_id);
//       });
//       this.setState({
//         requests: requests,
//         // allData: response.data,
//       });
//     });
//   // this.getRequests();
//   this.time = setInterval(this.getRequests, 6000);

//   this.getRequests();
//   this.getCustomers();
//   this.getTechnicians();
