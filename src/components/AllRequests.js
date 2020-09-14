import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllRequests extends Component {
  render() {
    const allRequests = this.props.requests.map((request) => {
      console.log("allRequests-  request.id", request.id);
      return (
        <li key={request.id}>
          <Link to={`/requestsC/${request.id}`}> {request.req_desc} </Link>
          <button id={request.id} onClick={this.props.deleteRequest}>
            Delete
          </button>
        </li>
      );
    });

    return (
      <div class="requestContainer">
        <div className="all_requests">
          <form onSubmit={this.props.createRequest}>
            <center>
              &nbsp; Description:
              <textarea
                name="req_desc"
                rows="2"
                cols="75"
                maxLength="255"
                placeholder="Describe work (255 chars allowed)"
              />
              &nbsp;
              <input
                type="submit"
                value="Add Request"
                className="addCustomerButton"
              />
              &nbsp;{" "}
            </center>
          </form>
        </div>
        <div class="requestContainer">
          <h2> All Work Requests: </h2>
          <ul>{allRequests}</ul>
        </div>
      </div>
    );
  }
}

export default AllRequests;
