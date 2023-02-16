// DEFINE HTML VARIABLES:

// YOUTUBE MUSIC API STUFF:

// SPOTIFY MUSIC API STUFF:
// let $clicked = $("#search");
// $clicked.on("click", artistSearch);
// $clicked.on("click", searchSave);
// // add Enter key for searching as well
// $("input").keyup(function (event) {
//   if (event.key === "Enter") {
//     $clicked.click();
//   }
// });
// function artistSearch() {
//   $(".form-input").text(userInput);
//   // saved artist/band input entered by User in a let variable
//   let userInput = $(this)
//     .parent()
//     .siblings("#search-input")
//     .val()
//     .toUpperCase();
//   // empty search bar with setTimeout() so the artist/band name is not stuck in input section
//   function clear() {
//     $("#search-input").val("");
//   }
//   setTimeout(clear, 500);
// }

// //---------- SEARCH HISTORY LOCALSTORAGE FUNCTION ---------//
// $(document).ready(function () {
//   // if localStorage is not empty, call fillFromStorage()
//   if (localStorage.getItem("artists")) {
//     // grab data, parse and push into searchHistory[], s
//     historydisplay = localStorage.getItem(
//       "artists",
//       JSON.stringify(historydisplay)
//     );
//     historydisplay = JSON.parse(historydisplay);
//     // iterate through searchHistory, displaying in HTML
//     for (i = 0; i <= historydisplay.length - 1; i++) {
//       $("#search-hist" + i).text(historydisplay[i]);
//     }

//     let lastIndex = historydisplay.length - 1;
//     // concat a jQuery selector & click listener that calls savedsearch()
//     $("#search" + lastIndex).on("click", savedSearch);
//     // .trigger() method that 'clicks' on that #search
//     $("#search-hist" + lastIndex).trigger("click");
//   }
// });

// //---- ARRAY TO DISPLAY RECENT SEARCH HISTORY ----//
// let historydisplay = [];
// // Function to Load Search In local Storage and Display on HTML page
// function searchSave() {
//   // same jQuery selector from artistsearch() puts value into newartist
//   let newArtist = $(this)
//     .parent()
//     .siblings("#search-input")
//     .val()
//     .toUpperCase();
//   console.log(newArtist);
//   historydisplay.push(newArtist);
//   historydisplay = [...new Set(historydisplay)];
//   // put in localStorage
//   localStorage.setItem("artists", JSON.stringify(historydisplay));
//   // display in HTML
//   for (i = 0; i <= historydisplay.length - 1; i++) {
//     // iterate through, displaying in HTML
//     $("#search-hist" + i).text(historydisplay[i]);
//     // add .past class to create listener (below),
//     $("#search-hist" + i).addClass("past");
//   }
// }

// $("section").on("click", ".past", savedSearch);

// function savedSearch() {
//   // var for text of pastcityname
//   let $oldArtist = $(this).text();
//   // put it in the input field
//   $("#search-hist").val($oldArtist);
//   // this triggers the original click listener, above citysearch()
//   $clicked.trigger("click");
// }

// // Function to reinitilaize the Hisory
// let $clear = $("#clearhist");
// $clear.on("click", function () {
//   //clear local storage
//   localStorage.clear();
//   //clear the History Display
//   historydisplay = [];
//   for (i = 0; i < 11; i++) {
//     $("#search-hist" + i).text("");
//   }
// });
