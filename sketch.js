var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(60, 200, 30, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  ground=createSprite(0, 280, 800, 100);
  ground.velocityX= -7;
  bananaGroup=createGroup();
  score=0;
 
   
  

  
}


function draw() {
  background("white");
  monkey.collide(ground);
   if (ground.x < 0)
     {ground.x = ground.width/2;}
     if(keyDown("space")&& monkey.y >= 190) {
        monkey.velocityY = -12;}

                                                                                                                                                                                                                 
  monkey.velocityY = monkey.velocityY + 0.8
  spawnBananas();
  spawnObstacles();
  drawSprites();
  textSize(20);
  score =  Math.ceil(frameCount/frameRate())
   text("Score: "+ score, 250,50);

  
}
function spawnBananas()
{  if(frameCount%80===0)
  {banana=createSprite(250, 180, 10, 15);
 banana.y=Math.round(random(120, 200));
  banana.addImage("banana", bananaImage);
  banana.scale=0.1;
  banana.velocityX=-7;
  banana.lifetime=260;
  bananaGroup.add(banana);}


}
function spawnObstacles()
{if(frameCount%300===0)
{obstacle=createSprite(300, 215,30, 40);
obstacle.velocityX=-7;
obstacle.lifetime=310;
obstacle.addImage("obstacle", obstacleImage);
obstacle.scale=0.1;}
}





