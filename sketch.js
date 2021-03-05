const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var pig=[];
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg
var flag = 0
var score = 0;
function preload() {
    bg = loadImage("images/bg.jpg");
    trainSound = loadSound("sound/train.mp3")
    crashSound = loadSound("sound/train_crossing.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    boggie1=new Boggie(50,170,50,50);
    boggie2=new Boggie(150,170,50,50);
    boggie3=new Boggie(250,170,50,50);
    boggie4=new Boggie(350,170,50,50);
    boggie5=new Boggie(450,170,50,50);
    boggie6=new Boggie(550,170,50,50);



    rock1= new Rock(1100,200,100,100);
    chain1 = new Chain(boggie1.body,boggie2.body);
    chain2 = new Chain(boggie2.body,boggie3.body);
    chain3 = new Chain(boggie3.body,boggie4.body);
    chain4 = new Chain(boggie4.body,boggie5.body);
    chain5 = new Chain(boggie5.body,boggie6.body);

    // platform = new Ground(150, 305, 300, 170);

    // box1 = new Box(700,320,70,70);
    // box2 = new Box(920,320,70,70);
    // pig1 = new Pig(810, 350);
    // log1 = new Log(810,260,300, PI/2);

    // box3 = new Box(700,240,70,70);
    // box4 = new Box(920,240,70,70);
    // pig3 = new Pig(810, 220);

    // log3 =  new Log(810,180,300, PI/2);

    // box5 = new Box(810,160,70,70);
    // log4 = new Log(760,120,150, PI/7);
    // log5 = new Log(870,120,150, -PI/7);

    // bird = new Bird(200,50);

    // //log6 = new Log(230,180,80, PI/2);
    // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    // if(backgroundImg)
    //     background(backgroundImg);
    
    background(bg);
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
        
    Engine.update(engine);
    boggie1.show()
    boggie2.show()
    boggie3.show()
    boggie4.show()
    boggie5.show()
    boggie6.show()
    rock1.show()
    chain1.show()
    chain2.show()
    chain3.show()
    chain4.show()
    chain5.show()

    var collision = Matter.SAT.collides(boggie6.body, rock1.body)

    if(collision.collided){
        flag = 1
    }
    if(flag ===1){
        textSize(30);
        stroke(3);
        fill('blue');
        text("CRASH",500,200);
        crashSound.play();
      }

    //strokeWeight(4);
//     box1.display();
//     box2.display();
//     ground.display();
//     pig1.display();
//    pig1.score();
//     log1.display();

//     box3.display();
//     box4.display();
//     pig3.display();
// //pig3.score();
//     log3.display();

//     box5.display();
//     log4.display();
//     log5.display();

//     bird.display();
//     platform.display();
//     //log6.display();
//     slingshot.display();    
}

// function mouseDragged(){
//     Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
// }


// function mouseReleased(){
//     slingshot.fly();
// }
function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
       Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x, y:boggie6.body.position.y},{x:0.5, y:0});
       trainSound.play()
    }



}


// async function getTime(){
//     var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//     var responseJSON = await response.json();
// console.log(responseJSON)
//     var datetime = responseJSON.datetime;
//     var hour = datetime.slice(8,10);
//     console.log(datetime);
//     console.log(hour);
//     if(hour>=06 && hour<=19){
//         bg = "sprites/bg1.png";
//     }
//     else{
//         bg = "sprites/bg2.jpg";
//     }

//     backgroundImg = loadImage(bg);
// }
