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
let frameWidth = 331;
let frameHeight = 360;
let player1 = document.querySelector('.player1');


function animeLeft() {

// Left player run
let frameRunLeft = 0;
let spritex = 0;

function runLeft() {
  if (frameRunLeft >= -11) {
    console.log(frameRunLeft);
    frameRunLeft--;
    spritex = spritex + 25;
    player1.style.marginLeft = 45.75 + spritex + 25;
    player1.style.backgroundPosition = (frameRunLeft * frameWidth) + 'px';
  }
  setTimeout(runLeft, 100);
}

let btnRun = document.querySelector('.runL');
btnRun.addEventListener('click', runLeft);



// Left player punch
let framePunchLeft = -12;

function punchLeft() {
  if (framePunchLeft >= -19) {
    console.log(framePunchLeft);
    framePunchLeft--;
    player1.style.backgroundPosition = (framePunchLeft * frameWidth) + 'px';
  }
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
      spritex = spritex + 50;
      player1.style.marginLeft = 45.75 + spritex + 50;
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




});
