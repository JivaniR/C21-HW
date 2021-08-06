
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000,600);

	var ball_options={

		isStactic: false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball= Bodies.circle(50,50,20);
	World.add(world,ball)

GroundObj= new Ground(width/2,670,width,20)
leftSide= new Ground(1100,60020,120)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 GroundObj.display()
 
}



