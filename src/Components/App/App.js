import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar.js";
import { SearchResults } from "../SearchResults/SearchResults.js";
import { Playlist } from "../Playlist/Playlist.js";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { songName: "song1", artist: "artist1", album: "album1", id: 1 },
        { songName: "song2", artist: "artist2", album: "album2", id: 2 },
        { songName: "song3", artist: "artist3", album: "album3", id: 3 },
        { songName: "song4", artist: "artist4", album: "album4", id: 4 },
      ],
      playlistName: "playlist1",
      playlistTracks: [
        { songName: "pSong5", artist: "pArtist5", album: "pAlbum5", id: 5 },
        { songName: "pSong6", artist: "pArtist6", album: "pAlbum6", id: 6 },
        { songName: "pSong7", artist: "pArtist7", album: "pAlbum7", id: 7 },
        { songName: "pSong8", artist: "pArtist8", album: "pAlbum8", id: 8 },
      ],
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
  }

  search(userInput) {
    console.log(userInput);
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
