let userAccessToken;
const Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    }

    //else parse a token string out of the URL using .match and a regEx:
    const userAccessToken = window.location.href.match(/access_token=([^&]*)/);
  },
};

export default Spotify;
