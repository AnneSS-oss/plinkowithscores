var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];
var gameState = "start";
var score=0;
var count=0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500", 30,550);
 text("500", 110,550);
 text("500", 190,550);
 text("500", 270,550);
 text("100", 350,550);
 text("100", 430,550);
 text("100", 510,550);
 text("200", 600,550);
 text("200", 680,550);
 text("200", 760,550);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null) {
     particle.display();

     if(particle.body.position.y>760){
       
      if (particle.body.position.x < 300){
        score=score+500;
        particle=null;
        count = count+1;
      }


     }

   }


   if(particle!=null) {
    particle.display();

    if(particle.body.position.y>760){
      
     if (particle.body.position.x < 550){
       score=score+100;
       particle=null;
       count = count+1
     }


    }

  }


  if(particle!=null) {
    particle.display();

    if(particle.body.position.y>760){
      
     if (particle.body.position.x < 780){
       score=score+200;
       particle=null;
       count = count+1
     }


    }

  }

  if (count === 5 ){
    gameState = "end";
    text("GameOver", 400,400 )
    textSize(100);
    
  }


}

function mousePressed() {

  //if(count<5&&gameState==="start") {
    particle = new Particle(mouseX,20,10,10)
  //}
}