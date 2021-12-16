import { spotifyClientID } from "../keys";
const clientID = spotifyClientID;
const redirectURI = "http://localhost:3000/";
let userAccessToken;

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
      const expiresIn = Number(expiryMatch[1]);
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
    //breakout if args are empty:
    if (!listName || !trackURIArray.length) {
      console.log("empty");
      return;
    }

    //otherwise get the user's username via authorized request:
    const token = this.getAccessToken();
    const headers = {
      Authorization: `Bearer:  ${token}`,
    };
    let userId;

    return fetch(`https://api.spotify.com/v1/me`, { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          header: headers,
          method: "POST",
          body: JSON.stringify({ name: listName }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const newPlaylistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${newPlaylistId}/tracks`, {
              headers: headers,
              method: "POST",
              body: JSON.stringify({ uris: trackURIArray }),
            });
          });
      });
  },
};

export default Spotify;
