import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllTechnicians extends Component {
  render() {
    const allTechnicians = this.props.technicians.map((technician, index) => {
      return (
        <li key={technician.id}>
          <Link to={`/techniciansC/${technician.id}`} key={technician.id}>
            {" "}
            {technician.name}{" "}
          </Link>

          <button
            key={`button-${technician.id}`}
            arrayindex={index}
            id={technician.id}
            onClick={this.props.deleteTechnician}
          >
            Delete
          </button>

          <button id={technician.id} onClick={this.props.updateTechnician}>
            Edit
          </button>
        </li>
      );
    });

    // {props.artists.map((artist, index) => {
    //   return (
    //     <li key={artist.id}>
    //       <Link to={`/artists/${artist.id}`} key={artist.id}>
    //         {artist.name}
    //       </Link>
    //       <button
    //         key={`button-${artist.id}`}
    //         id={artist.id}
    //         arrayindex={index}
    //         onClick={props.deleteArtist}
    //       >
    //         Delete
    //       </button>
    //     </li>

    return (
      <div>
        <div class="requestContainer">
          <div className="all_requests">
            <form onSubmit={this.props.createTechnician}>
              <center>
                &nbsp; Name:
                <input type="text" name="name" /> &nbsp; Username:
                <input type="text" name="user_name" /> &nbsp; Password:
                <input type="text" name="password" /> &nbsp;
                <input
                  type="submit"
                  value="Add Technician"
                  className="addCustomerButton"
                />{" "}
                &nbsp;
              </center>
            </form>
          </div>
        </div>
        <div class="requestContainer">
          <h2> Technician List: </h2>
          <ul>{allTechnicians}</ul>
        </div>
      </div>
    );
  }
}

export default AllTechnicians;
