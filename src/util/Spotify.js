import { spotifyClientID } from "../keys";
let userAccessToken;
const clientID = spotifyClientID;
const redirectURI = "http://localhost:3000/";

export const Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    }

    //else parse a token string out of the URL using .match and a regEx:
    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    //likewise grab expiry info from URL:
    const expiryMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expiryMatch) {
      userAccessToken = tokenMatch[1];
      let expiresIn = Number(expiryMatch[1]);
      //clear vars && grab new token on expiry:
      window.setTimeout(() => (userAccessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return userAccessToken;
    } else {
      const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = accessURL;
    }
  },

  searchSpotify(searchTerm) {
    const token = this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
      headers: {
        Authorization: `Bearer:  ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        //return an empty array if no tracks in the json response:
        if (!jsonResponse.tracks) {
          return [];
        }
        //else concoct this object:
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },
  savePlaylist(listName, trackURIArray) {
    if (!listName || !trackURIArray.length) {
      return;
    }
  },
};

export default Spotify;
