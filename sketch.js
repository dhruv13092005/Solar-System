var ground, ground_running;

var face1, face_running;
var face2, face2_running;
var face3, face3_running;
var face4, face4_running;

var body, body_running;

function preload(){ 
 ground_running = loadImage("space - Copy.png");
  
  face1_running = loadAnimation("Mercury_Globe_pillars.jpg");
  face2_running = loadAnimation("image6.jpg");
  
face3_running = loadAnimation("earth.jpg");
  
  face4_running = loadAnimation("mars.jpg");

  body_running = loadImage("sun.png"); 
} 

function setup() { 
  createCanvas(500, 500); 
  
  ground = createSprite(250,250,2000,2000);
  ground.addAnimation("groundrunning",ground_running); 
  ground.scale = 1.5;

face1 = createSprite(230,180,40,40); 
face1.addAnimation("face1running",face1_running); 
  face1.rotation = 4;
face1.scale = 0.007;
face1.rotateToDirection=true;
face1.velocityX = 3;
  
  
  face2 = createSprite(230,130,40,40); 
face2.addAnimation("face2running",face2_running); 
  face2.rotation = 4;
face2.scale = 0.025;
face2.rotateToDirection=true;
face2.velocityX = 3;
  
face3 = createSprite(230,80,40,40); 
face3.addAnimation("face3running",face3_running); 
  face3.rotation = 4;
face3.scale = 0.016;
face3.rotateToDirection=true;
face3.velocityX = 3;
  
  face4 = createSprite(230,30,40,40); 
face4.addAnimation("face4running",face4_running); 
  face4.rotation = 4;
face4.scale = 0.03;
face4.rotateToDirection=true;
face4.velocityX = 3;
  
  
 body = createSprite(230,230,40,40);
  body.scale = 0.04;
  body.addAnimation("bodyrunning",body_running); 
  
} 

function draw() { 
  background("white"); 
  
   face1.rotation=face1.rotation+3.3;
  
  face2.rotation=face2.rotation+1.8;

face3.rotation=face3.rotation+1.1;

 face4.rotation=face4.rotation+0.8; 

  if(frameCount % 130 === 0) {
  body.scale = body.scale+0.01 
  }
  
  if(body.isTouching(face1)){
    face1.visible = false; 
  }
  if(body.isTouching(face2)){
    face2.visible = false; 
  }
  if(body.isTouching(face3)){
    face3.visible = false; 
  }
  if(body.isTouching(face4)){
    face4.visible = false; 
    body.scale = body.scale+0;
  }
  drawSprites(); 
}