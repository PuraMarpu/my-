var canvas,title,play,back,state=0,ground,hero,castle,edge,plat1,plat2;
var invisi;

function preload(){
  back=loadImage("img/1915699.jpg");
  castle=loadImage("img/back2.jfif");
}
function setup(){
  canvas=createCanvas(displayWidth,500);

  title=createElement("h1");
  title.html("Steel Story");
  title.position(540,200);

  play=createButton("Play");
  play.position(590,400);

  play.mousePressed(login);
  
  hero=createSprite(200,480,20,50);
  hero.visible=false;
  
  invisi=createSprite(600,130,1400,10);
  invisi.visible=false;

  plat1=createSprite(430,340,200,10);
  plat1.visible=false;

  ground=createSprite(600,490,displayWidth+200,10);
  ground.visible=false;
}
function draw(){
  background(back);
  if(state===1){
    background(castle);

    edge=createEdgeSprites();

    move(hero);
    hero.velocityY+=1;

    hero.collide(edge[0]);
    hero.collide(edge[1]);
    hero.collide(ground);
    hero.collide(plat1);
    hero.collide(invisi);

    hero.visible=true;
    plat1.visible=true;
    invisi.visible=true;
    
    
    
  }
  drawSprites();
}
function move(x){
  if(keyWentDown(UP_ARROW)&&x.y>200){
    x.velocityY-=19; 
  }
  if(keyWentDown(RIGHT_ARROW)){
    x.velocityX=5;
  }
  if(keyWentUp(RIGHT_ARROW)){
    x.velocityX=0;
  }
  if(keyWentDown(LEFT_ARROW)){
    x.velocityX=-5;
  }
  if(keyWentUp(LEFT_ARROW)){
    x.velocityX=0;
  }
}
function login(){
  play.hide();
  title.hide();
  state=1;
}