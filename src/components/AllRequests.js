import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllRequests extends Component {
  render() {
    const allRequests = this.props.requests.map((request) => {
      return (
        <li key={request.id}>
          <Link to={`/requestC/${request.id}`}> {request.req_desc} </Link>
          <button id={request.id} onClick={this.props.deleteRequest}>
            Delete
          </button>
          <button id={request.id} onClick={this.props.updateRequest}>
            Edit
          </button>
        </li>
      );
    });

    return (
      <div>
        <h1> All Work Request </h1>
        <h3> Create a New Work Request </h3>
        <form onSubmit={this.props.addRequest}>
          <input type="text" name="name" />
          <input type="submit" value="Add Request" />
        </form>
        <ul>{allRequests}</ul>
      </div>
    );
  }
}

export default AllRequests;
