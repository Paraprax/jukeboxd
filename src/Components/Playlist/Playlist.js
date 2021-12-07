import React from "react";
import { TrackList } from "../TrackList/TrackList.js";
import "./Playlist.css";

export class Playlist extends React.Component {
  handleRename(event) {
    this.props.onRename(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
        <button className="Playlist-save">Save this playlist</button>
      </div>
    );
  }
}
