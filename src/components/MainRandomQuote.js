import React, { Component } from "react";
//MainRandomQuote will render from a bunch of characters, different
//rendom quotes while you stay on the home page every 6 seconds

export default class MainRandomQuote extends Component {
  render() {
    let category = [];
    let cDetail = {};
    category = Object.values(this.props.mainRandomQuote);
    if (Array.isArray(category))
      if (category.length > 0) {
        cDetail = category[1];
      }
    return (
      <div className="mRandomQuote">
        <div className="blockquote">
          <p className="quote">{this.props.mainRandomQuote.sentence}</p>
          <p className="name">
            <i>- {cDetail.name} - </i>
          </p>
        </div>
      </div>
    );
  }
}
