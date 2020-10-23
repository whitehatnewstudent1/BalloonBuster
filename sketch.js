var redballoon, redballoonImage;
var greenballon, greenballonImage;
var pinkballon, pinkballonImage;
var bow, bowImage;
var Background,BackgroundImage;

function preload(){
 //load your images here 
 
 BackgroundImage= loadImage("background0.png");
 bowImage= loadImage("bow0.png"); 
 redballoonImage=loadImage("red_balloon0.png");
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  Background=createSprite(0,0,600,600);
  Background.addImage("background", BackgroundImage);
  Background.scale=2.5;
  bow=createSprite(430,250,20,20);
  bow.addImage(bowImage);
  for(var i=100;i<400;i+=70){
  redballoon=createSprite(100,i,20,20);
  redballoon.addImage(redballoonImage);
  redballoon.scale=0.1;
  }
  /*redballon=createSprite(300,300,20,20);
  redballon.addImage("redballonImage",redballon);
  redballon.scale=0.5;
  */
}

function draw() {

  //add code here
  drawSprites();
}

