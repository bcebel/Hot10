
var requestUrlTown = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=journey&api_key=291cf301be6213cb932aa743e9706019&format=json'
var responseTextTown = document.getElementById('response-text');
var latitude;
var longitude;
var cityContainer = document.getElementById('lists');
var fetchButton = document.getElementById('fetch-button');

function getApiTown(requestUrlTown) {
  fetch(requestUrlTown)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.toptracks);
    console.log(data.toptracks.track[0]);
    console.log(data.toptracks.track[0].name)
    console.log(data.toptracks.track[0].url)

latitude=data.toptracks.track[0].name;
longitude=data.toptracks;



console.log(latitude +"changes in")
  var requestUrl = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+cher+'&api_key=291cf301be6213cb932aa743e9706019&format=json';

  var responseText = document.getElementById('response-text');
  
function getApi(requestUrl) {
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var cityName = document.createElement('li');
      cityName.textContent = data.city.name;
      cityContainer.append(cityName);



      for (var i = 0; i < data.list.length; i++) {
        var temperature = document.createElement('li');
        temperature.textContent = data.list[i].main.temp;
        cityContainer.append(temperature)
console.log(data.list[i].weather.icon)
        var url =  "http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+"@2x.png";
        var image = new Image();
        image.src=url;
        document.getElementById('lists').appendChild(image);

        var main = document.createElement('li');
        main.textContent = data.list[i].weather[0].main;
        cityContainer.append(main);

        var description = document.createElement('li');
        description.textContent = data.list[i].weather[0].description;
        cityContainer.append(description);
      
      }

      
    });
  }
  getApi(requestUrl)
})
};
getApiTown(requestUrlTown);


// and again


