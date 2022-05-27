var ground;
var player_luke






function setup(){
  createCanvas(800,300)
  ground = createSprite(150,280,width * 3,20)
  player_luke = createSprite(150,250,20,80)
  player_luke.shapeColor = "cyan"
}






function draw(){
background(0)
drawSprites()
player_luke.collide(ground)
if(keyDown(RIGHT_ARROW)){
  player_luke.x +=5
}
if(keyDown(LEFT_ARROW)){
  player_luke.x -=5
}
}
