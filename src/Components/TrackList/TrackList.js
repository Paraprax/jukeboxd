import React from "react";
import { Track } from "../Track/Track.js";
import "./TrackList.css";

//this now has search results as a prop called 'tracks'
export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => {
          //mapping the results to an array and passing to the Track component as props
          return <Track track={track} key={track.id} />;
        })}
      </div>
    );
  }
}
