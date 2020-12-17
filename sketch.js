var car1,wall1;

var car2,wall2;

var car3,wall3;

var car4,wall4;



function setup() {
  createCanvas("800","550");
 
  car1=createSprite(40, 100,10,10);
  car1.shapeColor="white";
  car1.velocityX=10;
  
  wall1=createSprite(600,100,10,70);

  line1=createSprite(400,140,900,5);
  line1.shapeColor="white"

  car2=createSprite(50, 200,10,10);
  car2.shapeColor="yellow";
  car2.velocityX=10;
  
  wall2=createSprite(600,200,10,70);

  line2=createSprite(400,240,900,5);
  line2.shapeColor="white"

  car3=createSprite(40, 300,10,10);
  car3.shapeColor="red";
  car3.velocityX=10;
  
  wall3=createSprite(600,300,10,70);
  
  line3=createSprite(400,340,900,5);
  line3.shapeColor="white"

  car4=createSprite(60, 400,10,10);
  car4.shapeColor="green";
  car4.velocityX=10;
  
  wall4=createSprite(600,400,10,70);

  line4=createSprite(400,440,900,5);
  line4.shapeColor="white"


}

function draw() {
  background("black");  
  drawSprites();
  createEdgeSprites();
if(car1.isTouching(wall1)){
  car1.velocityX=10;


  car1.x=50;
  car1.y=100;
}
 
if(car2.isTouching(wall2)){
  car2.velocityX=10;


  car2.x=50;
  car2.y=200;
}

if(car3.isTouching(wall3)){
  car3.velocityX=10;


  car3.x=50;
  car3.y=300;
}

if(car4.isTouching(wall4)){
  car4.velocityX=10;


  car4.x=50;
  car4.y=400;
}






}