var box
var box2
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,10,10)
  box2=createSprite(100,100,20,20)
}
function draw() 
{
  background("black");

  if(keyIsDown(RIGHT_ARROW)){
    background("red")
  }
  if(keyIsDown(LEFT_ARROW)){
    background("blue")
  }
  if(keyIsDown(DOWN_ARROW)){
    background("yellow")
  }
  if(keyIsDown(UP_ARROW)){
    background("white")
  }
  drawSprites();
}




