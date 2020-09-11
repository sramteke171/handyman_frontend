import React, { Component } from "react";
import images from "../images.json";
import axios from "axios";

//Character component is in charge to hande functionality for
//single character display
export default class WorkCategory extends Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.desc = "";
    // this.quotes = [];

    this.state = {
      //   character: [],
      category: [],
      image: "",
      quote: "",
      view: true,
      name: "",
      bio: "",
    };
  }
  //loadCategory is in charge to hit the API with the parameter name of
  //a selected character to display it/them on the Character component
  loadCategory = () => {
    axios.get("http://localhost:3001/api/users").then((response) => {
      // axios.get(`${backendUrl}/artists`).then((response) => {
      // axios.get("http://localhost:3001/api/categories").then((response) => {

      console.log(response);
      this.setState({
        users: response.data.users,
        // requests: response.data.allArtists,
      });
    });
  };

  //Display Random will trigger getRandomInt to display a quite
  //priviously loaded from the API
  displayRandom = (e) => {
    e.preventDefault();
    this.setState({
      view: false,
      quote: this.quotes[this.getRandomInt(0, this.quotes.length)],
    });
  };
  //getRandomInt: is in charge to generate random number from 0 to
  //the length of the array containing quotes to display in a random position
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  //gidplayAll will display All the quotes available in teh API
  //for the selected Character
  displayAll = (e) => {
    e.preventDefault();
    this.setState({
      view: true,
    });
  };

  render() {
    if (this.props.newCategory) {
      this.loadCategory();
      this.props.changeCategory(false);
    }
    this.quotes = [];
    this.name = "";
    this.house = "";
    this.state.category.map((p) => {
      this.name = p.category.name;
      this.desc = p.category.desc;
      // if (typeof p === "object") {
      //   this.quotes.push(p.sentence);
      // }
    });
    return (
      <div className="characterContainer">
        <div className="fCol">
          Name: {this.name}
          <img className="img" src={this.state.image} alt={this.name} />
          <label className="rating"> Rating * * * * * </label>
          <table className="characterBtns">
            <tr>
              <td>
                <input
                  className="btns"
                  type="button"
                  onClick={this.displayRandom}
                  value="Contact Info"
                />
              </td>
              <td>
                <input
                  className="btns"
                  type="button"
                  onClick={this.displayAll}
                  value="Work Reviews"
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="quotesCont">
          <table className="chData">
            <tr>
              <td>
                <b>Name:</b>
              </td>
              <td className="chDetail">{this.name}</td>
            </tr>
            <tr>
              <td>
                <b>House:</b>
              </td>
              <td className="chDetail">{this.house}</td>
            </tr>
          </table>
          <ul className="quotesArea">
            {this.state.view ? (
              this.quotes.map((qt) => {
                return <li className="sQuote">{qt}</li>;
              })
            ) : (
              <li className="sQuote">{this.state.quote}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
