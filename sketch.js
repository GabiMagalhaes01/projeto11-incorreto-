var runner;
var path;

function preload(){
 // imagens pré-carregadas
  runner_running = loadAnimation("runner-1.png","runner-2.png")
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  
 // crie sprite aqui
  runner = createSprite(200,200,10,10)
  runner.addAnimation("running",runner_running)
  runner.scale = 0.5
  
  path = createSprite(200,200,400,50)
  path.addImage(pathImage)
  path.velocityY = 3


  createEdgeSprite()
}

function draw() {
  background("black");
 
  if(path.y < 400){
    path.y = height/2
   }

 
  drawSprites()
}
