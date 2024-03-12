let canvas;

var bgImg;
var x1 = 0;
var x2;

var scrollSpeed = 2;

function preload(){
	bgImg = loadImage("images/backgroud.png");
}

function setup() { 
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", -2);
  
  x2 = width;

  
} 

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() { 
	image(bgImg, x1, 0, windowWidth, windowHeight);
  image(bgImg, x2, 0, windowWidth, windowHeight);
  
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
  
}

