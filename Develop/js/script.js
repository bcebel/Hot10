var searchBox = document.querySelector("#search-box");
var searchForm = document.getElementById("search-form");
var searchBtn = document.querySelector("#search");
var userInput = document.getElementById("search-input");
var recentSearchItems = document.querySelector("#recent-search-items");

var artistsArray = [];
var typedArtist = "";

function addToHistory(name) {
  // Pushing searchbox value to artists array, then storing array in localStorage
  // NEED TO ADD LOGIC, FOR ADDING ONLY 5 TO THE ARRAY VIA POP()
  artistsArray.push(name);
  console.log("this is artist name: " + name);
  localStorage.setItem("savedArtists", JSON.stringify(artistsArray));
}

function renderArtists() {
  // Grabbing the artists array from local storage
  var artistsArray = JSON.parse(
    localStorage.getItem("savedArtists", artistsArray)
  );
  for (var i = 0; i < artistsArray.length; i++) {
    var listArtist = document.createElement("a");
    listArtist.innerHTML = artistsArray[i];
    listArtist.href = "www.google.com";
    console.log(listArtist);
    // putting a container for the ul in the row1 div in the html
    recentSearchItems.appendChild(listArtist);
  }
}
// Listens for form submit, fetches current artist URL
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  typedArtist = searchForm.elements["search-input"].value;
  console.log(typedArtist);
  //run the function to push to local storage
  addToHistory(typedArtist);
  renderArtists();
  // Clears any existing artist
  userInput.value = "";
});

// Regenerates the statistics for the artist name the user clicks on
recentSearchItems.addEventListener("click", function (event) {
  if (event.target.listArtist === "a") {
    console.log(event.target.innerText);
  }
});

//  clears local storage and refreshes recent searches on the webpage
var clearhistBtn = document.querySelector(".history-btn");
clearhistBtn.addEventListener("click", (e) => {
  localStorage.clear();
  if (localStorage.length === 0) recentSearchItems.innerHTML = "";
});
// Running the re-render if the artists array in local storage has contents
if (JSON.parse(localStorage.getItem("savedArtists", artistsArray)) !== null) {
  renderArtists();
}
