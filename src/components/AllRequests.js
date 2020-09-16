import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllRequests extends Component {
  render() {
    const allRequests = this.props.requests.map((request) => {
      console.log("allRequests-  request.id", request.id);
      return (
        <li key={request.id}>
          <Link to={`/requestsC/${request.id}`}> {request.req_desc} </Link>
          <button
            id={request.id}
            class="delete"
            onClick={this.props.deleteRequest}
          >
            Delete
          </button>
        </li>
      );
    });

    return (
      <div>
        <div class="createRequestContainer">
          <form onSubmit={this.props.createRequest}>
            <center>
              &nbsp;
              {/* <label class="labelDescription"> Description: </label> */}
              <textarea
                name="req_desc"
                rows="2"
                cols="75"
                maxLength="255"
                class="textarea"
                placeholder="Describe work (255 chars allowed)"
              />
              &nbsp; <br></br>
              <input
                type="submit"
                value="Add Request"
                className="addRequestButton"
              />
              &nbsp;{" "}
            </center>
          </form>
        </div>
        <div class="requestContainer">
          <center>
            <label class="requestHeading"> All Work Requests : </label>
          </center>
          <ul>{allRequests}</ul>
        </div>
      </div>
    );
  }
}

export default AllRequests;
