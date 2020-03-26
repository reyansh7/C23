const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground;
var box1, box2, box3, box4, box5, box6, box7, box8;
var pillar1, pillar2;
var roof;
var flag;

function setup() {
    var canvas = createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;

    ground = new Stick(200, 380, 400, 50);

    roof = new Stick(167.5, 170, 195, 50);

    flag = new Stick(167.5, 100, 10, 90);

    box1 = new Stick(80, 275, 20, 160);
    box2 = new Stick(105, 275, 20, 160);
    box3 = new Stick(130, 275, 20, 160);
    box4 = new Stick(155, 275, 20, 160);
    box5 = new Stick(180, 275, 20, 160);
    box6 = new Stick(205, 275, 20, 160);
    box7 = new Stick(230, 275, 20, 160);
    box8 = new Stick(255, 275, 20, 160);

    pillar1 = new Stick(40, 250, 50, 210);
    pillar2 = new Stick(295, 250, 50, 210);


}

function draw() {
    background("#000000");

    Engine.update(engine);

    ground.display();

    roof.display();

    flag.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    pillar1.display();
    pillar2.display();

    fill("red");
    triangle(40, 86, 80, 143, 0, 143);
    triangle(173, 100, 173, 60, 220, 80);
    triangle(300, 86, 340, 143, 260, 143);

    fill("red");
      

}
