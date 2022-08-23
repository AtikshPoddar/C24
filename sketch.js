//shortening the names
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creating the button
var btn2;
var angle = 60;



function setup() {
  createCanvas(400,400);

  //making our own engine
  engine = Engine.create();
  world = engine.world;
  
  //setting up the ball and making it bounce
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  //setting up the ground and stopping it from moving around
   var ground_options ={
     isStatic: true
   };
  
  //setting up the button
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  //creating the GROUND, the SPINY STICK and the BALL
  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  spinyting = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,spinyting);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  //actively updating my engine
  Engine.update(engine);
  
  Matter.Body.rotate(spinyting, angle);
  //starting the rotation process
  push();
  //making the spinyting spin from its original creation point instead of the origin (0,0)
  translate(spinyting.position.x,spinyting.position.y);
  //making the spinyting rotate at an angle of 60 as mentioned right at the top
  rotate(angle);
  //creating the rectangle and making it visible
  rect(0,0,100,20);
  //stopping the rotation process
  pop();
  //actively increasing the angle
  angle+=0.1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
  //actively logging the ground's y position on the console window
console.log(ground.position.y);

  
  
}

//setting up the vForce function which makes the ball go higher everytime the button has been pressed
function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  