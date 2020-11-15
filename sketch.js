var fixedRect,movingRect,gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(200, 200, 50, 80);
 movingRect=createSprite(200, 100, 80, 30);
 fixedRect.shapeColor="white";
 movingRect.shapeColor="white";
 gameobject1=createSprite(100, 100, 50, 50);
 gameobject1.shapeColor="white";
 gameobject2=createSprite(200, 100, 50, 50);
 gameobject2.shapeColor="white";
 gameobject3=createSprite(300, 100, 50, 50);
 gameobject3.shapeColor="white";
 gameobject4=createSprite(400, 100, 50, 50);
 gameobject4.shapeColor="white";
 
}
function draw() {
  background(0);  
 movingRect.x=mouseX;
 movingRect.y=mouseY;
 if (isTouching(gameobject4,movingRect)) {
  movingRect.shapeColor="blue";
  gameobject4.shapeColor="blue";
 } else {
  movingRect.shapeColor="white";
  gameobject4.shapeColor="white";  
 }
 
 
  drawSprites();
}