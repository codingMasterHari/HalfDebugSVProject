var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var canvas, bgImage;

var form, player, game;

var policeCar, theifCar, theifPlane, theifMansion;
var policeCarImage, theifCarImage, theifPlaneImage, theifMansionImage, trackImage;

var coin, obstacleCars, vans;

var items;

var theif, police;

function preload(){
  trackImage = loadImage("track.jpg");
  policeCarImage = loadImage("policePng.png");
  theifCarImage = loadImage("carImgTheif.png");
  theifMansionImage = loadImage("mansion.png");
  theifPlaneImage = loadImage("aeroplane.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2) {
    game.update(1);
  }
  if(gameState === 1) {
    clear();
    game.play();
  }
  if(gameState === 2) { 
    game.end();
  }
}