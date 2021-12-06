import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar.js";
import { SearchResults } from "../SearchResults/SearchResults.js";
import { Playlist } from "../Playlist/Playlist.js";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Jukeboxd</h1>
        <div class="App">
          {/* <!-- SearchBar component here --> */}
          <div class="App-playlist">
            {/* <!-- SearchResults component here -->
              <!-- Playlist component here --> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
