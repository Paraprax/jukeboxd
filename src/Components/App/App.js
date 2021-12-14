import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar.js";
import { SearchResults } from "../SearchResults/SearchResults.js";
import { Playlist } from "../Playlist/Playlist.js";
import { Spotify } from "../../util/Spotify.js";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "playlist1",
      playlistTracks: [],
    };
    //'this' bindings:
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renamePlaylist = this.renamePlaylist.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let currentTracks = this.state.playlistTracks;
    if (currentTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return; //ie. end this method if the id of the playlist track is already saved
    }
    //otherwise
    currentTracks.push(track);
    this.setState({ playlistTracks: currentTracks });
  }

  removeTrack(track) {
    let currentTracks = this.state.playlistTracks;
    currentTracks = currentTracks.filter((current) => current.id !== track.id);
    this.setState({ playlistTracks: currentTracks });
  }

  renamePlaylist(newName) {
    this.setState({ playlistName: newName });
  }

  //spotify API interaction:
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map((track) => {
      return track.uri;
    });
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({ playlistName: "New (Untitled)", playlistTracks: [] });
    });
  }

  search(userInput) {
    Spotify.searchSpotify(userInput);
  }

  render() {
    return (
      <div>
        <h1>Jukeboxd</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onRename={this.renamePlaylist} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
