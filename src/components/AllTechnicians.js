import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllTechnicians extends Component {
  render() {
    const allTechnicians = this.props.technicians.map((technician) => {
      return (
        <li key={technician.id}>
          <Link to={`/techniciansC/${technician.id}`}> {technician.name} </Link>
          <button id={technician.id} onClick={this.props.deleteTechnician}>
            Delete
          </button>
          <button id={technician.id} onClick={this.props.updateTechnician}>
            Edit
          </button>
        </li>
      );
    });
    return (
      <div>
        <h1> All Technicians </h1>
        <h3> Create a New Technician </h3>
        <form onSubmit={this.props.addTechnician}>
          <input type="text" name="name" />
          <input type="submit" value="Add Technician" />
        </form>
        <ul>{allTechnicians}</ul>
      </div>
    );
  }
}

export default AllTechnicians;
