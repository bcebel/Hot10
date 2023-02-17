const form = document.getElementById('search-form');
//const name = form.elements['search-input'];
const inputLastFM = document.getElementById("search-input");

let fullName;
console.log(form);
//attaches to html
const lastFMdiv=document.getElementById('results-right');

var requestUrl;
var getSimilarURL;
var musicBrainzURL;
var musicBrainzID;
var getTopAlbumsURL;
var lastFMImg;
var lastFMImg2;
var lastFMImg3;
var lastFMImg4;
var lastFMImg5;

function getApi(requestUrl) {
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
/*
      var cityName = document.createElement('li');
      console.log(data);
      console.log(data.toptracks);
      console.log(data.toptracks.track[0]);
      console.log(data.toptracks.track[0].name)
      console.log(data.toptracks.track[0].url)
  
        var bandName = document.createElement('h1');
        bandName.textContent = data.toptracks["@attr"].artist;
        lastFMdiv.prepend(bandName)

        var topTracks = document.createElement('li');
        topTracks.textContent ="Top Song "+data.toptracks.track[0].name
        lastFMdiv.append(topTracks)

        musicBrainzID=data.toptracks.track[0].artist.mbid
        console.log(musicBrainzID);

musicBrainzURL='https://musicbrainz.org/ws/2/artist/'+musicBrainzID+'?inc=releases+genres+tags+release-groups+url-rels&type=&fmt=json';
musicBrainzAPI(musicBrainzURL);
*/
      })
    };

  function getSimilar(getSimilarURL) {
    fetch(getSimilarURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var cityName = document.createElement('li');
      console.log(data);
      

        var similarArtists = document.createElement('li');
        similarArtists.textContent = "Similar Artists "+data.similarartists.artist[0].name;
        lastFMdiv.append(similarArtists)

      })
    };

    function getTopAlbums(getTopAlbumsURL) {
        fetch(getTopAlbumsURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
    
          
    /*
            var topAlbums = document.createElement('li');
            topAlbums.textContent = "Top Album "+data.topalbums.album[0].name
            lastFMdiv.append(topAlbums)
*/


const imageDiv = document.createElement('div');
imageDiv.setAttribute("class", "test");
lastFMImg = data.topalbums.album[0].image[3]["#text"]
var image = new Image();
image.src = lastFMImg;
imageDiv.append(image);

const imageDiv2 = document.createElement('div');
imageDiv2.setAttribute("class", "test");
lastFMImg2 = data.topalbums.album[1].image[3]["#text"]
var image2 = new Image();
image2.src = lastFMImg2;
imageDiv2.append(image2);

const imageDiv3 = document.createElement('div');
imageDiv3.setAttribute("class", "test");
lastFMImg3 = data.topalbums.album[2].image[3]["#text"]
var image3 = new Image();
image3.src = lastFMImg3;
imageDiv3.append(image3);

const imageDiv4 = document.createElement('div');
imageDiv4.setAttribute("class", "test");
lastFMImg4 = data.topalbums.album[3].image[3]["#text"]
var image4 = new Image();
image4.src = lastFMImg4;
imageDiv4.append(image4);

const imageDiv5 = document.createElement('div');
imageDiv5.setAttribute("class", "test");
lastFMImg5 = data.topalbums.album[4].image[3]["#text"]
var image5 = new Image();
image5.src = lastFMImg5;
imageDiv5.append(image5);


const imageDiv6 = document.createElement('div');
imageDiv6.setAttribute("class", "test");
lastFMImg6 = data.topalbums.album[7].image[3]["#text"]
var image6 = new Image();
image6.src = lastFMImg6;
imageDiv6.append(image6);

const imageDiv7 = document.createElement('div');
imageDiv7.setAttribute("class", "test");
lastFMImg7 = data.topalbums.album[6].image[3]["#text"]
var image7 = new Image();
image7.src = lastFMImg7;
imageDiv7.append(image7);


const imageDiv8 = document.createElement('div');
imageDiv8.setAttribute("class", "test");
lastFMImg8 = data.topalbums.album[7].image[3]["#text"]
var image8 = new Image();
image8.src = lastFMImg8;
imageDiv8.append(image8);

const imageDiv9 = document.createElement('div');
imageDiv9.setAttribute("class", "test");
lastFMImg9 = data.topalbums.album[8].image[3]["#text"]
var image9 = new Image();
image9.src = lastFMImg9;
imageDiv9.append(image9);


const imageDiv10 = document.createElement('div');
imageDiv10.setAttribute("class", "test");
lastFMImg10 = data.topalbums.album[9].image[3]["#text"]
var image10 = new Image();
image10.src = lastFMImg10;
imageDiv10.append(image10);

const gridContainerLastFM=document.createElement('div');
gridContainerLastFM.setAttribute("class", "gridContainer")
gridContainerLastFM.append(imageDiv)
gridContainerLastFM.append(imageDiv2)
gridContainerLastFM.append(imageDiv3)
gridContainerLastFM.append(imageDiv4)
gridContainerLastFM.append(imageDiv5)
gridContainerLastFM.append(imageDiv6)
gridContainerLastFM.append(imageDiv7)
gridContainerLastFM.append(imageDiv8)
gridContainerLastFM.append(imageDiv9)
gridContainerLastFM.append(imageDiv10)
document.getElementById('results-right').append(gridContainerLastFM);

          })
        };
/*
        function musicBrainzAPI(musicBrainzURL) {
            fetch(musicBrainzURL)
            .then(function (response) {
              return response.json();
            })

        }
        */
/*
        function albumCover(albumCoverURL) {
            fetch(musicBrainzURL)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              console.log(data);

            })
        }
        */
  //      https://ia801604.us.archive.org/28/items/mbid-
form.addEventListener('submit', function(event){event.preventDefault();
    fullName = inputLastFM.value;
    console.log(fullName);
    requestUrl = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+fullName+'&api_key=291cf301be6213cb932aa743e9706019&format=json';
    getSimilarURL='https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist='+fullName+'&api_key=291cf301be6213cb932aa743e9706019&format=json';
    getTopAlbumsURL= 'https://ws.audioscrobbler.com//2.0/?method=artist.gettopalbums&artist='+fullName+'&api_key=291cf301be6213cb932aa743e9706019&format=json'
    getApi(requestUrl);
 //   getSimilar(getSimilarURL);
getTopAlbums(getTopAlbumsURL);
});



