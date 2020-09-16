import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllTechnicians extends Component {
  render() {
    const allTechnicians = this.props.technicians.map((technician, index) => {
      return (
        <li key={technician.id}>
          <Link
            class="techLink"
            to={`/techniciansC/${technician.id}`}
            key={technician.id}
          >
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

          {/* <button id={technician.id} onClick={this.props.updateTechnician}>
            Edit
          </button> */}
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

    let imgS = (allTechnicians) => {
      for (let i = 0; i < allTechnicians.length; i++) {
        return (
          // <img src="abc.jpg"> element </img>;
          <h2>display images</h2>
        );
      }
    };

    return (
      <div class="technicianContainer">
        {/* <div class="technicianContainer"> */}
        <div class="createTechnicianContainer">
          <form onSubmit={this.props.createTechnician}>
            <center>
              &nbsp; Name:&nbsp;
              <input type="text" name="name" /> &nbsp; Username:&nbsp;
              <input type="text" name="user_name" /> &nbsp; Password:&nbsp;
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
        {/* <div class="allTechnicianContainer"> */}
        <div class="allTechnicianContainer">
          {/* <div class="techDiv"> */}
          <label class="technicianHeading"> Technicians : </label>
          <ul>
            {/* {allTechnicians.forEach((element) => {
              <img src="abc.jpg"> element </img>;
            })} */}

            {/* {imgS(this.allTechnicians)} */}

            {/* <div class="techDiv">  </div> */}
            {allTechnicians}
          </ul>
        </div>
      </div>
    );
  }
}

export default AllTechnicians;
