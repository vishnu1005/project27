
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope;
var rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Roof(600,10,1950,20);
	bob1= new 	Bob(400,210,40);
	bob2= new 	Bob(440,210,40);
	bob3= new 	Bob(480,210,40);
	bob4= new 	Bob(520,210,40);
	bob5= new 	Bob(560,210,40);
	
bob1Diameter=100;
bob2Diameter=85;
bob3Diameter=65;
bob4Diameter=50;
bob5Diameter=35;

	rope=new Rope(bob1.body,ground.body,-bob1Diameter*2,0);
	rope2=new Rope(bob2.body,ground.body,-bob2Diameter*2,0);
	rope3=new Rope(bob3.body,ground.body,-bob3Diameter*2,0);
	rope4=new Rope(bob4.body,ground.body,-bob4Diameter*2,0);
	rope5=new Rope(bob5.body,ground.body,-bob5Diameter*2,0);



}


function draw() {
  rectMode(CENTER);
  background("yellow");

  //bob1.y=mouse.Y;

  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  keypd();
  drawSprites();
 
}

function keypd()
	{
	   if(keyCode===UP_ARROW)
	   {
		   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:50,y:-50})
	   }
	}



