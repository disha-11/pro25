
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var paper1;
var dustbin1,d2,d3;
var ground1;
var dus1;


function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	paper1=new paper(100,100);
	dustbin1=new dustbin(500,630,200,20);
	d2=new dustbin(490,330,20,330);
	d3=new dustbin(700,330,20,330);
ground1=new ground(0,650,1600,10);
dus1=new dus(600,500,10,10);

	Engine.run(engine);
  
}


function draw() {


	
  background(225);
  fill ("black");
  textSize(30)
  text ("use  up  and  down  arrows",200,50);
  text ("and it is a stormy day today too",180,100);
  paper1.display();
  dustbin1.display();
  ground1.display();
d2.display()
d3.display()
dus1.display()
 keyPressed();

}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:2,y:-7})
		
	}
}

function keyPressed1(){
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-85})
		
	}
}



