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
        { songName: "pSong1", artist: "pArtist1", album: "pAlbum1", id: 1 },
        { songName: "pSong2", artist: "pArtist2", album: "pAlbum2", id: 2 },
        { songName: "pSong3", artist: "pArtist3", album: "pAlbum3", id: 3 },
        { songName: "pSong4", artist: "pArtist4", album: "pAlbum4", id: 4 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Jukeboxd</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playistname={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
