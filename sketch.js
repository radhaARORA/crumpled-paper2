
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper;
var dustbin;
var wall1,wall2,wall3;
var paperImg;
function preload()
{
	paperImg=loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground =createSprite(400,650,600,10);
wall1=createSprite(400,630,200,20);
wall1=color("red");

wall2=createSprite(310,580,20,100);
wall2=color("red");
    
wall3=createSprite(510,590,20,100);
wall3=color("red");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
 
}

function keypressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.object.body,paper.object.body.position,{x:85,y:-85});
	}
} 

