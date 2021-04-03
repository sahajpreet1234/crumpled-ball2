
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinimg
function preload()
{
dustbinimg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(100,400,70) 
    ground = new Ground(600,650,1200,20);
    dustbin1=new Dustbin(500,640,180,20);
  	dustbin2=new Dustbin(425,600,20,100);
	dustbin3=new Dustbin(575,600,20,100);

 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255 );
  
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  image(dustbinimg,400,530,200,120)
  paper.display()
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){

      Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:75})

	}
}



