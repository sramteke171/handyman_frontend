import React, { Component } from "react";

class RequestDetail extends Component {
  render() {
    const requestDetail = this.props.requests.find((request) => {
      return request.id == this.props.match.params.id;
    });
    // const artistSongs = artistDetail.Songs.map((song) => {
    //   return <li key={song.id}>{song.title}</li>;
    // });
    return (
      <div>
        <h3>{requestDetail.req_desc}</h3>
        <h5> Request Details</h5>

        {/* <form onSubmit={this.props.addSong}>
          <input type="hidden" name="artistId" value={ArtistDetail.id} />
          <input type="text" name="title" />
          <input type="submit" value="Add Song" />
        </form>

        <ul>{artistSongs}</ul> */}
      </div>
    );
  }
}
export default RequestDetail;
