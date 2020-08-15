
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
paper1=new Paper(100,500);
log1=new Bin(500,650,100,PI/4);
log2=new Bin(700,650,100,PI/4);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  log1.display();
  log2.display();
  Throw();
  drawSprites();
 
}
function Throw(){
	if(keyDown ("space")){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

	}
}


