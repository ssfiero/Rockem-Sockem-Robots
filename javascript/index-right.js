$(document).ready(function() {



// ------------------ Health Bar -------------------- //


let health = document.getElementById("health");
// health.value -= 10;




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
let frameWidth = 331;
let frameHeight = 360;
let player2 = document.querySelector('.player2');


function animeRight() {

// Right player run
let frameRunRight = 0;
let spritex = 0;

function runRight() {
  if (frameRunRight <= 11) {
    console.log(frameRunRight);
    frameRunRight++;
    spritex = spritex + 25;
    player2.style.marginRight = 45.75 + spritex + 25;
    player2.style.backgroundPosition = (frameRunRight * frameWidth) + 'px';
  }
  setTimeout(runRight, 100);
}

let btnRun = document.querySelector('.runR');
btnRun.addEventListener('click', runRight);



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
    spritex = spritex + 75;
    player2.style.marginRight = 45.75 + spritex + 75;
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
