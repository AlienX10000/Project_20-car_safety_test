var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;

var divider1,divider2,divider3

var speed1,speed2,speed3,speed4;
var weight1,weight2,weight3,weight4;

var formula;

function setup() {
  createCanvas(1200,400);

  speed1=random(55,90);
  weight1=random(400,1500);
  speed2=random(55,90);
  weight2=random(400,1500);
  speed3=random(55,90);
  weight3=random(400,1500);
  speed4=random(55,90);
  weight4=random(400,1500);

  car1=createSprite(100, 50, 35, 15);
  car1.velocityX=speed1;
  car2=createSprite(100, 150, 35, 15);
  car2.velocityX=speed2;
  car3=createSprite(100, 250, 35, 15);
  car3.velocityX=speed3;
  car4=createSprite(100, 350, 35, 15);
  car4.velocityX=speed4;
  
  wall1=createSprite(1100, 50, 20, 50);
  wall2=createSprite(1100, 150, 20, 50);
  wall3=createSprite(1100, 250, 20, 50);
  wall4=createSprite(1100, 350, 20, 50);

  
  divider1=createSprite(600, 100, 1200, 10);
  divider1.shapeColor=255;
  divider2=createSprite(600, 200, 1200, 10);
  divider2.shapeColor=255;
  divider3=createSprite(600, 300, 1200, 10);
  divider3.shapeColor=255;

  
}

function draw() {
  background(0);

  collide(car1,wall1,speed1,weight1);
  collide(car2,wall2,speed2,weight2);
  collide(car3,wall3,speed3,weight3);
  collide(car4,wall4,speed4,weight4);

  drawSprites();
}

function collide (car,wall,speed,weight) {

  // formula=;
  if (car.x-wall.x < car.width/2 + wall.width/2 && wall.x-car.x < car.width/2 + wall.width/2 && car.y-wall.y < car.height/2 + wall.height/2 && wall.y-car.y < car.height/2 + wall.height/2) {
    car.velocityX=0;
    car.velocityY=0;
    wall.velocityX=0;
    wall.velocityY=0;

    if (22500/(0.5*weight*speed*speed) <= 100) {
      car.shapeColor=rgb(26,148,49);
    }

    if (22500/(0.5*weight*speed*speed) >= 100 && 2250/(0.5*weight*speed*speed) <= 180) {
      car.shapeColor=rgb(252,226,5);
    }

    if (22500/(0.5*weight*speed*speed) <= 180) {
      // car.shapeColor=rgb(255,40,0);
      car.shapeColor=rgb(255,0,0);
    }
  }
}