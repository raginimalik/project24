
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	redbox1 = new Redbox(700,620,20,100);
	redbox2 = new Redbox(900,620,20,100);
	redbox3 = new Redbox(800,660,200,20);
	ground=new Ground(width/2, height-35, width,10)
	ball=new Ball(100,650,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  redbox1.display();
  redbox2.display();
  redbox3.display(); 
  ground.display();
  ball.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-70})
	}
}



