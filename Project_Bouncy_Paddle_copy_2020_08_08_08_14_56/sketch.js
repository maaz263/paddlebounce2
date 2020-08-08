
var ball,ballimg,paddle, paddleimg;
function preload() {
  ballimg=loadImage("ball.png");
  paddleimg=loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  ball=createSprite(100,200,10,10)
   ball.addImage(ballimg);
  ball.velocityX=9;
  paddle=createSprite(350,200,20,100);

}

function draw() {
  background(205,153,0);
 ball.bounceOff(paddle,randomVelocity)
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]); ball.bounceOff(edges[2]); ball.bounceOff(edges[3]);
 
  
  
  if(keyDown(UP_ARROW))
  {paddle.y=paddle.y+-3;
  }
  
  if(keyDown(DOWN_ARROW))
  {paddle.y=paddle.y+3;
  }
  drawSprites();
  
}

function randomVelocity()
{ball.velocityY=random(-8,8);
}

