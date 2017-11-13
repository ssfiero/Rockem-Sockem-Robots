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
let frameWidth = 330;
let frameHeight = 360;
let compPlayer = document.querySelector('.player1');


// Right player run

let frameRunRight = 0;

function runRight() {
  if (frameRunRight <= 11) {
    console.log(frameRunRight);
    frameRunRight++;
    compPlayer.style.backgroundPosition = (frameRunRight * frameWidth) + 'px';
  }
}

let btnRun = document.querySelector('.runR');
btnRun.addEventListener('click', runRight);



// Left player punch
let framePunchRight = 12;

function punchRight() {
  if (framePunchRight <= 19) {
    console.log(framePunchRight);
  framePunchRight++;
  compPlayer.style.backgroundPosition = (framePunchRight * frameWidth) + 'px';
  }

}

let btnPunch = document.querySelector('.punchR');
btnPunch.addEventListener('click', punchRight);



// Left player look around
let frameLookRight = 20;

function lookRight() {
  if (frameLookRight <= 26) {
    console.log(frameLookRight);
  frameLookRight++;
  compPlayer.style.backgroundPosition = (frameLookRight * frameWidth) + 'px';
  }

}

let btnLook = document.querySelector('.lookR');
btnLook.addEventListener('click', lookRight);




// Left player fall
let frameFallRight = 27;

function fallRight() {
  if (frameFallRight <= 33) {
    console.log(frameFallRight);
  frameFallRight++;
  compPlayer.style.backgroundPosition = (frameFallRight * frameWidth) + 'px';
  }

}

let btnFall = document.querySelector('.fallR');
btnFall.addEventListener('click', fallRight);



// Left player get up
let frameGetupRight = 34;

function getupRight() {
  if (frameGetupRight <= 40) {
    console.log(frameGetupRight);
  frameGetupRight++;
  compPlayer.style.backgroundPosition = (frameGetupRight * frameWidth) + 'px';
  }

}

let btnGetup = document.querySelector('.getupR');
btnGetup.addEventListener('click', getupRight);



// Left player kick
let frameKickRight = 41;

function kickRight() {
  if (frameKickRight <= 47) {
    console.log(frameKickRight);
  frameKickRight++;
  compPlayer.style.backgroundPosition = (frameKickRight * frameWidth) + 'px';
  }

}

let btnKick = document.querySelector('.kickR');
btnKick.addEventListener('click', kickRight);



// Left player shrug
let frameShrugRight = 48;

function shrugRight() {
  if (frameShrugRight <= 55) {
    console.log(frameShrugRight);
  frameShrugRight++;
  compPlayer.style.backgroundPosition = (frameShrugRight * frameWidth) + 'px';
  }

}

let btnShrug = document.querySelector('.shrugR');
btnShrug.addEventListener('click', shrugRight);



// Left player jump
let frameJumpRight = 56;

function jumpRight() {
  if (frameJumpRight <= 66) {
    console.log(frameJumpRight);
  frameJumpRight++;
  compPlayer.style.backgroundPosition = (frameJumpRight * frameWidth) + 'px';
  }

}

let btnJump = document.querySelector('.jumpR');
btnJump.addEventListener('click', jumpRight);



// Left player cheer
let frameCheerRight = 67;

function cheerRight() {
  if (frameCheerRight <= 75) {
    console.log(frameCheerRight);
  frameCheerRight++;
  compPlayer.style.backgroundPosition = (frameCheerRight * frameWidth) + 'px';
  }

}

let btnCheer = document.querySelector('.cheerR');
btnCheer.addEventListener('click', cheerRight);





});
