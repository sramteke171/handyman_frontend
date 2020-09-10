import React, { Component } from "react";
import images from "../images.json";
import axios from "axios";

//Character component is in charge to hande functionality for
//single character display
export default class Character extends Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.house = "";
    this.quotes = [];

    this.state = {
      character: [],
      image: "",
      quote: "",
      view: true,
      name: "",
      bio: "",
    };
  }
  //loadCharacter is in charge to hit the API with the parameter name of
  //a selected character to display it/them on the Character component
  loadCharacter = () => {
    let characterAPI = this.translateName(this.props.match.params.name);
    axios
      .get(
        `https://game-of-thrones-quotes.herokuapp.com/v1/author/${characterAPI}/5`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        //Getting Character Image
        let img;
        let bio;
        for (const prop in images)
          if (images[prop].name === characterAPI) {
            img = images[prop].img;
            bio = images[prop].bio;
          }

        this.setState({
          character: response.data,
          image: img,
          quote: "",
          bio: bio,
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
  //Translate name will give the correct format of the name for some characters
  //that come from the API to hit another end point that requies a diff. format
  translateName = (name) => {
    let newName = name.toLowerCase();
    switch (newName) {
      case "eddard":
        newName = "ned";
        break;
      case "lord":
        newName = "varys";
        break;
      case "petyr":
        newName = "baelish";
        break;
    }
    return newName;
  };
  render() {
    if (this.props.newCharacter) {
      this.loadCharacter();
      this.props.changeCharacter(false);
    }
    this.quotes = [];
    this.name = "";
    this.house = "";
    this.state.character.map((p) => {
      this.name = p.character.name;
      this.house = p.character.house.name;
      if (typeof p === "object") {
        this.quotes.push(p.sentence);
      }
    });
    return (
      <div className="characterContainer">
        <div className="fCol">
          <a className="chImg" href={this.state.bio}>
            <img className="img" src={this.state.image} alt={this.name} />
          </a>
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
