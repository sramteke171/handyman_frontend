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
              value={TechnicianDetail.id}
            />
            Name:{" "}
            <input type="text" name="name" value={technicianDetail.name} />
            <br />
            Username:{" "}
            <input
              type="text"
              name="user_name"
              value={technicianDetail.username}
            />
            <br />
            Password:{" "}
            <input
              type="text"
              name="password"
              value={technicianDetail.password}
            />
            <br />
            Age: <input type="text" name="age" value={technicianDetail.age} />
            <br />
            Phone:{" "}
            <input type="text" name="phone" value={technicianDetail.phone} />
            <br />
            Email:{" "}
            <input type="text" name="email" value={technicianDetail.email} />
            <br />
            City:{" "}
            <input type="text" name="city" value={technicianDetail.city} />
            <br />
            State:{" "}
            <input type="text" name="state" value={technicianDetail.state} />
            <br />
            Address:{" "}
            <input
              type="text"
              name="address"
              value={technicianDetail.address}
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
