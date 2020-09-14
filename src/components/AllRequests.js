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
      <div class="requestContainer">
        <div className="all_requests">
          <form onSubmit={this.props.createRequest}>
            <center>
              &nbsp; Description:
              <textarea
                name="description"
                rows="2"
                cols="75"
                maxLength="255"
                placeholder="Describe work (255 chars allowed)"
              />
              &nbsp;
              {/* <input type="text" name="name" /> &nbsp; */}
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
