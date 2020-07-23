var bouncer, topEdge, bottomEdge, rightEdge, leftEdge;
function setup() {
  createCanvas(800,800);
  bouncer=createSprite(400,400,50,50);
  bouncer.velocityX=-9;
  bouncer.velocityY=-5;
  topEdge=createSprite(400,1,800,1);
  bottomEdge=createSprite(400,799,800,1);
  rightEdge=createSprite(799,400,1,800);
  leftEdge=createSprite(1,400,1,800);
}

function draw() {
  background("blue");  

  if(bouncer.x-leftEdge.x<=leftEdge.width/2+bouncer.width/2){
    bouncer.velocityX=9;
  }
  if(rightEdge.x-bouncer.x<=rightEdge.width/2+bouncer.width/2){
    bouncer.velocityX=-9;
  }
  if(bottomEdge.y-bouncer.y<=bottomEdge.height/2+bouncer.height/2){
    bouncer.velocityY=-5;
  }
  if(bouncer.y-topEdge.y<=topEdge.height/2+bouncer.height/2){
    bouncer.velocityY=5;
  }
  drawSprites();
}