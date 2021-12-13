let userAccessToken;
const Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    }

    //else parse a token string out of the URL using .match and a regEx:
    const userAccessToken = window.location.href.match(/access_token=([^&]*)/);
    //likewise grab expiry info from URL:
    const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
  },
};

export default Spotify;
