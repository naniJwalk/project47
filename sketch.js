var player, playerImg, illusion, illusionImg, background1, light, lightImg, grassland;
var button,buttonImg, button1, button1Img, button2;
var gameState=0;
var stress=0;
function preload(){
playerImg=loadAnimation("sadwalk1.png","sadwalk2.png","sadwalk3.png","sadwalk4.png","sadwalk5.png");
illusionImg=loadImage("skeleton.png");
background1=loadImage("grassland.jpg");
lightImg=loadImage("light.png");
buttonImg=loadImage("light.png");
button1Img=loadImage("light.png");
grassland=loadImage("grassland.jpg");
}
function setup(){
createCanvas(1000,1000);
light=createSprite(100,100,100,100)
light.addImage(lightImg);
light.scale=0.5;

player=createSprite(100,100,200,100);
player.addAnimation("player",playerImg);
player.scale=0.2;
fill("black");
button=createSprite(100,100,70,70);
button1=createSprite(300,700,70,70)
}
function draw(){
background(0);
light.x=player.x;
light.y=player.y;
//if(player.x<background1+100 || player.y<background1+100){

//}
    
//else{
  //background(0);
//}
if(player.isTouching(illusion)){
  stress=stress+1;
}
if(stress===10){
gameState=3;
}

if(frameCount%200===0){
  illusion=createSprite(random(0,1000),random(0,1000),200,100);
  illusion.addImage("illusion",illusionImg);
  illusion.scale=0.3;
  illusion.lifetime=100;
  }
  
if(player.isTouching(button)&&gameState===0){
    button.addImage(buttonImg);
    fill("red");
    textSize(15);
    text("You Can't Escape",button.x,button.y)
    //button.x=random(1,1000);
    //button.y=random(1,1000);
    gameState=1;
}
if(player.isTouching(button1)&&gameState===1){
  button1.addImage(button1Img);
  fill("red");
  textSize(15);
  text("You Are Stuck",button1.x,button1.y);
  //button1.x=random(1,1000);
  //button1.y=random(1,1000);
  gameState=2;
}
if(player.isTouching(button2)&&gameState===2){
  fill("red");
  textSize(15);
  text("The Doors Will Not Open",button2.x,button2.y)
  //button2.x=random(1,1000);
  //button2.y=random(1,1000);
  gameState=0;
}
  

if(keyDown("w")){
  player.y=player.y-2;
}

if(keyDown("s")){
  player.y=player.y+2;
}

if(keyDown("d")){
  player.x=player.x+2;
}

if(keyDown("a")){
  player.x=player.x-2;
}

if(gameState===3){
  background(grassland);
  fill("red");
  textSize(35);
  text("Did You Feel Stress?",500,500);
  textSize(15);
  text("Many People Are Feel More Stress And Pain, Appricate What We Have And Understand Their Suffering",0,600);
}


drawSprites();
}