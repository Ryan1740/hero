const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero;


function preload() {


}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  hero = new Hero(100,400,PI/2)
  fly = new Fly(hero.body,{x:500,y:50})
}

function draw() {
  background(0);
  fly.display();
  hero.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY})
}

