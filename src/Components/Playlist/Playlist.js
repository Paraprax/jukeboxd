import React from "react";
import { TrackList } from "../TrackList/TrackList.js";
import "./Playlist.css";

export class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList playlistTracks={this.props.playlistTracks} />
        <button className="Playlist-save">Save this playlist</button>
      </div>
    );
  }
}
