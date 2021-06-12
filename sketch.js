const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //creating the ground
  ground = new Ground(240, 785, 480, 30);  

  //creating the divisions
  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }


  //creating the plinko rows
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }

  for (var i = 15; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i, 175));
  }

  for (var h = 40; h <= width; h = h + 50){
    plinkos.push(new Plinko(h, 275));
  }

  for (var g = 15; g <= width; g = g + 50){
    plinkos.push(new Plinko(g, 375));
  }


}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();

  //displaying the plinko rows
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  //display the divisions
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  //creating the particles every 90 frames
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 100, width/2 + 100), 10, 10));
  }

  //displaying the particles
  for (var f = 0; f < particles.length; f++){
    particles[f].display();
  }


  drawSprites();
} 