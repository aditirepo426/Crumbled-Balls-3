const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbinImage ;
var rect1 ,rect2,rect3,ground,paperObject,string,wall;

function preLoad(){
	dustbinImage = loadImage("images/dustbin.jpg",dust);
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paperObject = new Paper(300,100,40);
	rect1 = new Dustbin (1100,575,20,100);
	rect2 = new Dustbin(1300,575,20,100);
	rect3 = new Dustbin(1200,635,200,20);
	string = new Rope (paperObject.body,{x: 400,y: 200});
	ground = new Ground(width/2,650,width,10);
	

	Engine.run(engine);
	
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	paperObject.display();
	rect2.display();
	push();
	fill("brown");
	pop();
	string.display();
	ground.display();
   
}

function mouseDragged(){
    
    Matter.Body.setPosition(paperObject.body, {x: 100 , y: 100});
    
}


function mouseReleased(){
	string.fly();
	
}



