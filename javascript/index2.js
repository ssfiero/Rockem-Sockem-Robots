$(document).ready(function() {


  // ------------ Side Navbar ------------- //
$(".button-collapse").sideNav();



// ------------ Carousel for player selection ------------- //
$('.carousel').carousel();


// var responseHTML = document.createElement("body");
//
// function getBody(content) {
//   var x = content.indexOf("<body");
//   x = content.indexOf(">", x);
//   var y = content.lastIndexOf("</body>");
//   return content.slice(x + 1, y);
// }
//
// function getContent(content, target) {
//   target.innerHTML = getBody(content);
// }
//
// document.getElementById(".battleground").innerHTML = responseHTML.innerHTML;




// let data = ['/png/backgrounds/pyramids.jpg'];
// // let data = ['/png/backgrounds/pyramids.jpg', '/png/backgrounds/city.jpg', '/png/backgrounds/foggy.jpg', '/png/backgrounds/salt-flats.jpg', '/png/backgrounds/space.jpg'];
// console.log(data);
// // let back = document.createElement('div');
//
// $('.caption>.btn').click(function setBattleground() {
//
//   $.get("game.html", function(data){
//     $('.battleground').append(data);
//   });
//   // console.log(back);
//   // back.style.backgroundImage = "url('/png/backgrounds/pyramids.jpg')";
//   //
//   // body.appendChild(back);
// });







 // ------------ Slider for background selection ------------- //
$('.slider').slider();



// ------------ API server requests ------------ //
setInterval(function apicall() {
let quotes = {};

let $xhr = $.getJSON('http://api.icndb.com/jokes/random?escape=javascript');
console.log('API data returned:', $xhr);

// Retreive data from server.
$xhr.done(function apicall(data) {
  if ($xhr.status !== 200) {
    return;
  } else {
    let quoteObj = {};

    // Joke returned from server.
    quoteObj.joke = data.value.joke;
    // console.log(quoteObj);

    // Accessed value of quote object to get the quote.
    let quoteVal = Object.values(quoteObj);
    // console.log(quoteVal);

    // Added quote to the html of the jQuery class .quotes to render on page.
    $('.quotes').html(quoteVal);
    // console.log(quotes);
  }
});
}, 8000);
window.addEventListener('load', apicall);


// Alert if there is a failed promise
$xhr.fail(function(err) {
  // alert(err);
  console.log(err);
});









});
