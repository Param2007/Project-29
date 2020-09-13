const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon, pImage;

function preload() {

  pImage = loadImage("hexagon.png");

}

function setup() {
  createCanvas(1000,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,680,1000,10);
  ground2 = new Ground(330,350,500,20);
  ground3 = new Ground(200,400,200,20);

  box = new Box(330,670,30,40,"red");
  box2 = new Box(360,670,30,40,"red");
  box3 = new Box(390,670,30,40,"red");
  box4 = new Box(420,670,30,40,"red");
  box5 = new Box(450,670,30,40,"red");

  box6 = new Box(360,630,30,40,"green");
  box7 = new Box(390,630,30,40,"green");
  box8 = new Box(420,630,30,40,"green");

  box9 = new Box(390,590,30,40,"blue");

  polygon = Bodies.circle(100, 520, 20, {restitution: 0.4, density: 1.2, friction: 0.4});
  World.add(world, polygon);

  slingshot = new Slingshot(polygon, {x: 100, y: 500});

}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display(); 

  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  slingshot.display();

  imageMode(CENTER);
  image(pImage, polygon.position.x, polygon.position.y, 40, 40);

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingshot.fly();
}