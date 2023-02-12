// DEFINE HTML VARIABLES:

// YOUTUBE MUSIC API STUFF:  https://rapidapi.com/mirzahadjaevaguzal/api/youtube-music1/  <- check this website out and dropdown menu on left.
const axios = require("axios");

const optionYoutube = {
  method: "GET",
  url: "https://youtube-music1.p.rapidapi.com/v2/search",
  params: { query: "eminem" },
  headers: {
    "X-RapidAPI-Key": "78d2acb0edmshc13f1eee17ce9d0p1bd2a6jsn7ac385323a73",
    "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
  },
};

axios
  .request(optionYoutube)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

// SPOTIFY MUSIC API STUFF: https://rapidapi.com/airaudoeduardo/api/spotify81/      <- check this website out and dropdown menu on left.
const axios = require("axios");

const optionSpotify = {
  method: "GET",
  url: "https://spotify81.p.rapidapi.com/top_200_tracks",
  headers: {
    "X-RapidAPI-Key": "78d2acb0edmshc13f1eee17ce9d0p1bd2a6jsn7ac385323a73",
    "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
  },
};

axios
  .request(optionSpotify)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
