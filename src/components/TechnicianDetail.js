import React, { Component } from "react";

class TechnicianDetail extends Component {
  render() {
    const technicianDetail = this.props.technicians.find((technician) => {
      return technician.id == this.props.match.params.id;
    });

    return (
      <div>
        <h2>Edit Technician: {technicianDetail.name} </h2>
        {/* <h2>Edit Technician: </h2> */}

        <form onSubmit={this.props.updateTechnician}>
          <center>
            <input
              type="hidden"
              name="technician_Id"
              // onChange={this.handleChange}
              defaultValue={technicianDetail.id || ""}
            />
            Name:{" "}
            <input
              type="text"
              name="name"
              defaultValue={technicianDetail.name || ""}
            />
            <br />
            Username:{" "}
            <input
              type="text"
              name="user_name"
              defaultValue={technicianDetail.username || ""}
            />
            <br />
            Password:{" "}
            <input
              type="text"
              name="password"
              defaultValue={technicianDetail.password || ""}
            />
            <br />
            Age:{" "}
            <input
              type="text"
              name="age"
              defaultValue={technicianDetail.age || ""}
            />
            <br />
            Phone:{" "}
            <input
              type="text"
              name="phone"
              defaultValue={technicianDetail.phone || ""}
            />
            <br />
            Email:{" "}
            <input
              type="text"
              name="email"
              defaultValue={technicianDetail.email || ""}
            />
            <br />
            City:{" "}
            <input
              type="text"
              name="city"
              defaultValue={technicianDetail.city || ""}
            />
            <br />
            State:{" "}
            <input
              type="text"
              name="state"
              defaultValue={technicianDetail.state || ""}
            />
            <br />
            Address:{" "}
            <input
              type="text"
              name="address"
              defaultValue={technicianDetail.address || ""}
            />
            <br />
            <br />
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;
            <input type="submit" value="Edit" />
            &nbsp;
          </center>
        </form>
      </div>
    );
  }
}
export default TechnicianDetail;
