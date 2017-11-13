$(document).ready(function() {

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
// let runCounter = 0;
// let frameRunLeft = 0;
//
// function runLeft() {
//   if (frameRunLeft >= -11) {
//     console.log(frameRunLeft);
//     frameRunLeft--;
//     compPlayer.style.backgroundPosition = (frameRunLeft * frameWidth) + 'px';
//   }
//
// }
//
// let btnRun = document.querySelector('.run');
// btnRun.addEventListener('click', runLeft);
let i = 0;

let runCounter = 0;
let frameRunLeft = 0;

function runLeft() {
  if (frameRunLeft >= -11) {
    console.log(frameRunLeft);
    frameRunLeft--;
    compPlayer.style.backgroundPosition = (frameRunLeft * frameWidth) + 'px';
  }
}



let btnRun = document.querySelector('.run');
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

let btnPunch = document.querySelector('.punch');
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

let btnLook = document.querySelector('.look');
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

let btnFall = document.querySelector('.fall');
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

let btnGetup = document.querySelector('.getup');
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

let btnKick = document.querySelector('.kick');
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

let btnShrug = document.querySelector('.shrug');
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

let btnJump = document.querySelector('.jump');
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

let btnCheer = document.querySelector('.cheer');
btnCheer.addEventListener('click', cheerLeft);



});




// Player on right side of screen
// 9 actions - 76 frames
// var frameWidth = 330;
// var frameHeight = 360;
// var spriteWidth = 27360;
// var spriteHeight = 360;
// var player1 = document.querySelector('.player1');
//
// var curPixels = 0;
// var ti;
//
// function animateSpriteRight() {
//   player1.style.backgroundPosition = curPixels + 'px 0px';
//   curPixels = curPixels + frameWidth;
//
//   if (curPixels >= spriteWidth) {
//     curPixels = 0;
//   }
//
//   ti = setTimeout(animateSpriteRight, 200);
//
// }
//
// animateSpriteRight();







// //Create the health bar
// healthBar = new PIXI.DisplayObjectContainer();
// healthBar.position.set(stage.width - 170, 6)
// gameScene.addChild(healthBar);
//
// //Create the black background rectangle
// var innerBar = new PIXI.Graphics();
// innerBar.beginFill(0x000000);
// innerBar.drawRect(0, 0, 128, 8);
// innerBar.endFill();
// healthBar.addChild(innerBar);
//
// //Create the front red rectangle
// var outerBar = new PIXI.Graphics();
// outerBar.beginFill(0xFF3300);
// outerBar.drawRect(0, 0, 128, 8);
// outerBar.endFill();
// healthBar.addChild(outerBar);
//
// healthBar.outer = outerBar;
//
// healthBar.outer.width = 30;
