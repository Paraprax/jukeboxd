import { spotifyClientID } from "../../keys";
let userAccessToken;
const clientID = spotifyClientID;
const redirectURI = "http://localhost:3000/";

const Spotify = {
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
};

export default Spotify;
