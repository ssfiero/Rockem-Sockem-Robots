$(document).ready(function() {

// ----------- Initial game state ------------------ //
// $('#background-select').hide();
// $('#game-page').hide();


// ----------- Navbar ------------------ //

$('.nav-sel').click(function() {
  ('#player-select').removeClass('hide');
  $('#background-select').addClass('hide');
  $('#game-page').addClass('hide');
})

$('.nav-bac').click(function() {
  $('#player-select').addClass('hide');
  $('#background-select').removeClass('hide');
  $('#game-page').addClass('hide');
})

$('.nav-gam').click(function() {
  $('#player-select').addClass('hide');
  $('#background-select').addClass('hide');
  $('#game-page').removeClass('hide');
})



// ------------ Side Navbar ------------- //
$(".button-collapse").sideNav();



// ------------ Carousel for player selection ------------- //
$('.carousel').carousel();




function setBack() {
  // let battle = document.getElementById('battleground');
  // console.log(battle);
  // battle.style.backgroundImage = "url('/png/backgrounds/pyramids.jpg')";
  // battle.style.backgroundImage = event.target.backgroundImage;

  // if ( $('.li').hasClass('active')) {
  //   let battle = document.getElementById('battleground');
  //   console.log(battle);
  //   battle.style.backgroundImage = $(this).style.backgroundImage;
  //   console.log(battle.style.backgroundImage);
  // }

  if ( $('.li').hasClass('active')) {
    let battle = document.getElementById('battleground');
    console.log(battle);
    battle.style.backgroundImage = $(this).style.backgroundImage;
    console.log(battle.style.backgroundImage);
  }




}

let backButton = document.getElementById('background-select');
backButton.addEventListener('click', setBack);





// ------------ Slider for background selection ------------- //
$('.slider').slider();



// ------------ API server requests ------------ //

// This is the first API call to return first quote.
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


// This is the second API call that returns quotes on an interval.
let secondCall = setInterval(function(){
  // console.log("in the function")

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

},8000);


// Alert if there is a failed promise
$xhr.fail(function(err) {
  // alert(err);
  console.log(err);
});



// ------------------ Health Bars -------------------- //

let healthLeft = document.getElementById("healthPlay1");


// health.value -= 10;

let leftPunchCount = 0;

// function lp() {
//   runLeft();
//   leftPunchCount++;
//   console.log(leftPunchCount);
//   let lpc = leftPunchCount -7;
//   console.log(lpc);
// }


let healthRight = document.getElementById("healthPlay2");
// health.value -= 10;



// -------------- Left and Right Movement Section ----------------//





// -------------- Left Player Action Section ----------------//



// Specific frames for each action.
// run = 0 - 11
// punch = 12 - 19
// lookAround = 20 - 26
// fall = 27 - 33
// getUp = 34 - 40
// kick = 41 - 47
// shrug = 48 - 55
// jump = 56 - 66
// cheer = 67 - 75


// Global variables for each frame.
let frameWidth = 331;
let frameHeight = 360;
let player1 = document.querySelector('.player1');


function animeLeft() {

// // Left player run
// let frameRunLeft = 0;
// let spritex = 0;
//
// function runLeft() {
//   if (frameRunLeft >= -11) {
//     console.log(frameRunLeft);
//     frameRunLeft--;
//     spritex = spritex + 50;
//     player1.style.marginLeft = 45.75 + spritex + 50;
//     player1.style.backgroundPosition = (frameRunLeft * frameWidth) + 'px';
//   }
//   setTimeout(runLeft, 100);
// }
//
// let btnRun = document.querySelector('.runL');
// btnRun.addEventListener('click', runLeft);



var $div1 = $('.player1');
$(document).keydown(function(e) {
    switch (e.which) {
    case 90:   // left arrow key = letter Z
        $div1.css('margin-left', '-=10px');
        break;
    case 88:   // right arrow key = letter X
        $div1.css('margin-left', '+=10px');
        break;
    }
})




// Left player punch
let framePunchLeft = -12;

function punchLeft() {
  if (framePunchLeft >= -19) {
    console.log(framePunchLeft);
    framePunchLeft--;
    player1.style.backgroundPosition = (framePunchLeft * frameWidth) + 'px';
  }
  // leftPunchCount++;
  // console.log(leftPunchCount);

  setTimeout(punchLeft, 100);
}

let btnPunch = document.querySelector('.punchL');
btnPunch.addEventListener('click', punchLeft);



// Left player look around
let frameLookLeft = -20;

function lookLeft() {
  if (frameLookLeft >= -26) {
    console.log(frameLookLeft);
    frameLookLeft--;
    player1.style.backgroundPosition = (frameLookLeft * frameWidth) + 'px';
  }
  setTimeout(lookLeft, 100);
}

let btnLook = document.querySelector('.lookL');
btnLook.addEventListener('click', lookLeft);




// Left player fall
let frameFallLeft = -27;

function fallLeft() {
  if (frameFallLeft >= -33) {
    console.log(frameFallLeft);
    frameFallLeft--;
    player1.style.backgroundPosition = (frameFallLeft * frameWidth) + 'px';
  }
  setTimeout(fallLeft, 100);
}

let btnFall = document.querySelector('.fallL');
btnFall.addEventListener('click', fallLeft);



// Left player get up
let frameGetupLeft = -34;

function getupLeft() {
  if (frameGetupLeft >= -40) {
    console.log(frameGetupLeft);
    frameGetupLeft--;
    player1.style.backgroundPosition = (frameGetupLeft * frameWidth) + 'px';
  }
  setTimeout(getupLeft, 100);
}

let btnGetup = document.querySelector('.getupL');
btnGetup.addEventListener('click', getupLeft);



// Left player kick
let frameKickLeft = -41;

function kickLeft() {
  if (frameKickLeft >= -47) {
    console.log(frameKickLeft);
    frameKickLeft--;
    player1.style.backgroundPosition = (frameKickLeft * frameWidth) + 'px';
  }
  setTimeout(kickLeft, 100);
}

let btnKick = document.querySelector('.kickL');
btnKick.addEventListener('click', kickLeft);



// Left player shrug
let frameShrugLeft = -48;

function shrugLeft() {
  if (frameShrugLeft >= -55) {
    console.log(frameShrugLeft);
    frameShrugLeft--;
    player1.style.backgroundPosition = (frameShrugLeft * frameWidth) + 'px';
  }
  setTimeout(shrugLeft, 100);
}

let btnShrug = document.querySelector('.shrugL');
btnShrug.addEventListener('click', shrugLeft);



// Left player jump
let frameJumpLeft = -56;
let spritey = 0;

function jumpLeft() {
  if (frameJumpLeft >= -66) {
    console.log(frameJumpLeft);
    frameJumpLeft--;

    if (frameJumpLeft < -59 && frameJumpLeft > -63) {
      spritex = spritex + 15;
      player1.style.marginLeft = 45.75 + spritex + 15;
      spritey = spritey - 15;
      player1.style.marginBottom = spritey - 15;
    } else if (frameJumpLeft < -62 && frameJumpLeft > -65) {
      spritex = spritex + 150;
      player1.style.marginLeft = 45.75 + spritex + 150;
      spritey = spritey + 100;
      player1.style.marginBottom = spritey + 100;
    }
    player1.style.backgroundPosition = (frameJumpLeft * frameWidth) + 'px';
  }
  setTimeout(jumpLeft, 100);
}

let btnJump = document.querySelector('.jumpL');
btnJump.addEventListener('click', jumpLeft);



// Left player cheer
let frameCheerLeft = -67;

function cheerLeft() {
  if (frameCheerLeft >= -75) {
    console.log(frameCheerLeft);
    frameCheerLeft--;
    player1.style.backgroundPosition = (frameCheerLeft * frameWidth) + 'px';
  }
  setTimeout(cheerLeft, 100);
}

let btnCheer = document.querySelector('.cheerL');
btnCheer.addEventListener('click', cheerLeft);

}


// To loop back through game actions.
setInterval(animeLeft, 1500);








// -------------- Right Player Action Section ----------------//



//------------------- Right Player ------------------ //

// Specific frames for each action.
// run = 0 - 11
// punch = 12 - 19
// lookAround = 20 - 26
// fall = 27 - 33
// getUp = 34 - 40
// kick = 41 - 47
// shrug = 48 - 55
// jump = 56 - 66
// cheer = 67 - 75


// Global variables for each frame.
// let frameWidth = 331;
// let frameHeight = 360;
let player2 = document.querySelector('.player2');


function animeRight() {

// // Right player run
// let frameRunRight = 0;
// let spritex = 0;
//
// function runRight() {
//   if (frameRunRight <= 11) {
//     console.log(frameRunRight);
//     frameRunRight++;
//     spritex = spritex + 50;
//     player2.style.marginRight = 45.75 + spritex + 50;
//     player2.style.backgroundPosition = (frameRunRight * frameWidth) + 'px';
//   }
//   setTimeout(runRight, 100);
// }
//
// let btnRun = document.querySelector('.runR');
// btnRun.addEventListener('click', runRight);



var $div2 = $('.player2');
$(document).keydown(function(e) {
    switch (e.which) {
    case 37:   // left arrow key
        $div2.css('margin-right', '+=10px');
        break;
    case 39:   // right arrow key
        $div2.css('margin-right', '-=10px');
        break;
    }
})



// Right player punch
let framePunchRight = 12;

function punchRight() {
  if (framePunchRight <= 19) {
    console.log(framePunchRight);
    framePunchRight++;
    player2.style.backgroundPosition = (framePunchRight * frameWidth) + 'px';
  }
  setTimeout(punchRight, 100);
}

let btnPunch = document.querySelector('.punchR');
btnPunch.addEventListener('click', punchRight);



// Right player look around
let frameLookRight = 20;

function lookRight() {
  if (frameLookRight <= 26) {
    console.log(frameLookRight);
    frameLookRight++;
    player2.style.backgroundPosition = (frameLookRight * frameWidth) + 'px';
  }
  setTimeout(lookRight, 100);
}

let btnLook = document.querySelector('.lookR');
btnLook.addEventListener('click', lookRight);




// Right player fall
let frameFallRight = 27;

function fallRight() {
  if (frameFallRight <= 33) {
    console.log(frameFallRight);
    frameFallRight++;
    player2.style.backgroundPosition = (frameFallRight * frameWidth) + 'px';
  }
  setTimeout(fallRight, 100);
}

let btnFall = document.querySelector('.fallR');
btnFall.addEventListener('click', fallRight);



// Right player get up
let frameGetupRight = 34;

function getupRight() {
  if (frameGetupRight <= 40) {
    console.log(frameGetupRight);
    frameGetupRight++;
    player2.style.backgroundPosition = (frameGetupRight * frameWidth) + 'px';
  }
  setTimeout(getupRight, 100);
}

let btnGetup = document.querySelector('.getupR');
btnGetup.addEventListener('click', getupRight);



// Right player kick
let frameKickRight = 41;

function kickRight() {
  if (frameKickRight <= 47) {
    console.log(frameKickRight);
    frameKickRight++;
    player2.style.backgroundPosition = (frameKickRight * frameWidth) + 'px';
  }
  setTimeout(kickRight, 100);
}

let btnKick = document.querySelector('.kickR');
btnKick.addEventListener('click', kickRight);



// Right player shrug
let frameShrugRight = 48;

function shrugRight() {
  if (frameShrugRight <= 55) {
    console.log(frameShrugRight);
    frameShrugRight++;
    player2.style.backgroundPosition = (frameShrugRight * frameWidth) + 'px';
  }
  setTimeout(shrugRight, 100);
}

let btnShrug = document.querySelector('.shrugR');
btnShrug.addEventListener('click', shrugRight);



// Right player jump
let frameJumpRight = 56;

function jumpRight() {
  if (frameJumpRight <= 66) {
    console.log(frameJumpRight);
  frameJumpRight++;

  if (frameJumpRight > 59 && frameJumpRight < 63) {
    spritex = spritex + 15;
    player2.style.marginRight = 45.75 + spritex + 15;
    // spritey = spritey - 15;
    // player1.style.marginBottom = spritey - 15;
  } else if (frameJumpRight > 62 && frameJumpRight < 65) {
    spritex = spritex + 175;
    player2.style.marginRight = 45.75 + spritex + 175;
    spritey = spritey + 100;
    player2.style.marginBottom = spritey + 100;
  }
    player2.style.backgroundPosition = (frameJumpRight * frameWidth) + 'px';
  }
  setTimeout(jumpRight, 100);
}

let btnJump = document.querySelector('.jumpR');
btnJump.addEventListener('click', jumpRight);



// Right player cheer
let frameCheerRight = 67;
let spritey = 0;

function cheerRight() {
  if (frameCheerRight <= 75) {
    console.log(frameCheerRight);
    frameCheerRight++;
    player2.style.backgroundPosition = (frameCheerRight * frameWidth) + 'px';
  }
  setTimeout(cheerRight, 100);
}

let btnCheer = document.querySelector('.cheerR');
btnCheer.addEventListener('click', cheerRight);

}


// To loop back through game actions.
setInterval(animeRight, 1500);







});
