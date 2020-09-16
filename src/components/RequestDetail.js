import React, { Component } from "react";

class RequestDetail extends Component {
  render() {
    const requestDetail = this.props.requests.find((request) => {
      return request.id == this.props.match.params.id;
    });

    return (
      <div class="editRequestContainer">
        <div>
          {/* <h2>Edit Request: {requestDetail.req_desc} </h2> */}

          <h2>Edit Request: </h2>
          <br></br>
          <br></br>
          <br></br>
          <form onSubmit={this.props.updateRequest}>
            <center>
              <input
                type="hidden"
                name="request_Id"
                defaultValue={requestDetail.id || ""}
                // defaultValue={this.props.match.params.id || ""}
              />
              <br />
              <br></br>
              Work Description: <br></br>
              <textarea
                name="req_desc"
                rows="2"
                cols="75"
                maxLength="255"
                placeholder="Describe work (255 chars allowed)"
                defaultValue={requestDetail.req_desc || ""}
              />
              Requested Start Date:&nbsp;
              <input
                type="date"
                name="new_start_date"
                defaultValue={requestDetail.req_start_date || ""}
              />
              <input
                type="text"
                name="existing_req_start_date"
                defaultValue={requestDetail.req_start_date || ""}
              />
              <br />
              Requested End Date:&nbsp;
              <input
                type="date"
                name="new_end_date"
                defaultValue={requestDetail.req_end_date || ""}
              />
              <input
                type="text"
                name="existing_req_end_date"
                defaultValue={requestDetail.req_end_date || ""}
              />
              {/* <br />
            UserId:{" "}
            <input
              type="text"
              name="user_id"
              defaultValue={requestDetail.user_id || ""}
            />
            <br />
            TechnicianId:{" "}
            <input
              type="text"
              name="tech_id"
              defaultValue={requestDetail.tech_id || ""}
            /> */}
              <br></br>
              <br></br>
              <input type="submit" value="Edit" className="editButton" />
              &nbsp;
            </center>
          </form>
        </div>
      </div>
    );
  }
}

export default RequestDetail;
