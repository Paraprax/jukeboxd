let userAccessToken;
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
    }
  },
};

export default Spotify;
