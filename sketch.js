const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,200,60,100);
    box2 = new Box(240,20,60, 80);
    
    ground = new Ground(200, 380, 400);

}
function draw(){
    background("cyan");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();

    
   
}
