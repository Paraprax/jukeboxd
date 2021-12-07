import React from "react";
import "./Track.css";

export class Track extends React.Component {
  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action">-</button>;
    } else {
      return <button className="Track-action">+</button>;
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  render() {
    let trackName = this.props.track.songName;
    let trackArtist = this.props.track.artist;
    let trackAlbum = this.props.track.album;

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{trackName}</h3>
          <p>
            {trackArtist} | {trackAlbum}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
