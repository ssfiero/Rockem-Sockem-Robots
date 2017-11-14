$(document).ready(function() {


// ------------ Carousel ------------- //

 $('.carousel').carousel();



// ---------- API server requests --------- //

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
