$(document).ready(function() {


// ------------------ Health Bar -------------------- //


let health = document.getElementById("health");
// health.value -= 10;




//------------------- Left Player ------------------ //

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
let compPlayer = document.querySelector('.compPlayer');


// Left player run

let frameRunLeft = 0;

function runLeft() {
  if (frameRunLeft >= -11) {
    console.log(frameRunLeft);
    frameRunLeft--;
    compPlayer.style.backgroundPosition = (frameRunLeft * frameWidth) + 'px';
  }
}

let btnRun = document.querySelector('.runL');
btnRun.addEventListener('click', runLeft);



// Left player punch
let framePunchLeft = -12;

function punchLeft() {
  if (framePunchLeft >= -19) {
    console.log(framePunchLeft);
  framePunchLeft--;
  compPlayer.style.backgroundPosition = (framePunchLeft * frameWidth) + 'px';
  }

}

let btnPunch = document.querySelector('.punchL');
btnPunch.addEventListener('click', punchLeft);



// Left player look around
let frameLookLeft = -20;

function LookLeft() {
  if (frameLookLeft >= -26) {
    console.log(frameLookLeft);
  frameLookLeft--;
  compPlayer.style.backgroundPosition = (frameLookLeft * frameWidth) + 'px';
  }

}

let btnLook = document.querySelector('.lookL');
btnLook.addEventListener('click', LookLeft);




// Left player fall
let frameFallLeft = -27;

function FallLeft() {
  if (frameFallLeft >= -33) {
    console.log(frameFallLeft);
  frameFallLeft--;
  compPlayer.style.backgroundPosition = (frameFallLeft * frameWidth) + 'px';
  }

}

let btnFall = document.querySelector('.fallL');
btnFall.addEventListener('click', FallLeft);



// Left player get up
let frameGetupLeft = -34;

function GetupLeft() {
  if (frameGetupLeft >= -40) {
    console.log(frameGetupLeft);
  frameGetupLeft--;
  compPlayer.style.backgroundPosition = (frameGetupLeft * frameWidth) + 'px';
  }

}

let btnGetup = document.querySelector('.getupL');
btnGetup.addEventListener('click', GetupLeft);



// Left player kick
let frameKickLeft = -41;

function KickLeft() {
  if (frameKickLeft >= -47) {
    console.log(frameKickLeft);
  frameKickLeft--;
  compPlayer.style.backgroundPosition = (frameKickLeft * frameWidth) + 'px';
  }

}

let btnKick = document.querySelector('.kickL');
btnKick.addEventListener('click', KickLeft);



// Left player shrug
let frameShrugLeft = -48;

function shrugLeft() {
  if (frameShrugLeft >= -55) {
    console.log(frameShrugLeft);
  frameShrugLeft--;
  compPlayer.style.backgroundPosition = (frameShrugLeft * frameWidth) + 'px';
  }

}

let btnShrug = document.querySelector('.shrugL');
btnShrug.addEventListener('click', shrugLeft);



// Left player jump
let frameJumpLeft = -56;

function jumpLeft() {
  if (frameJumpLeft >= -66) {
    console.log(frameJumpLeft);
  frameJumpLeft--;
  compPlayer.style.backgroundPosition = (frameJumpLeft * frameWidth) + 'px';
  }

}

let btnJump = document.querySelector('.jumpL');
btnJump.addEventListener('click', jumpLeft);



// Left player cheer
let frameCheerLeft = -67;

function cheerLeft() {
  if (frameCheerLeft >= -75) {
    console.log(frameCheerLeft);
  frameCheerLeft--;
  compPlayer.style.backgroundPosition = (frameCheerLeft * frameWidth) + 'px';
  }

}

let btnCheer = document.querySelector('.cheerL');
btnCheer.addEventListener('click', cheerLeft);





});
