var background , backgroundImg,cat,mouse,catImg1,catImg2,catImg3,catImg4,mouseImg1,mouseImg2,mouseImg3,mouseImg4;

function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    catImg4 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");
}

function setup(){
 //create tom and jerry sprites here
    createCanvas(800,800);
   background = createSprite(400,400);
   background.addImage(backgroundImg);


   cat = createSprite(620,600,20,20);
   cat.scale = 0.1;
   cat.addImage(catImg1);
   //cat.debug = true;
   cat.setCollider("rectangle",0,0,1000,1000);

   mouse = createSprite(50,600,20,20);
   mouse.scale = 0.09;
   mouse.addImage(mouseImg1);
}

function draw() {

    //background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2) {
      cat.scale = 0.2;
        cat.addAnimation("catLastImg",catImg4);
        cat.changeAnimation("catLastImg");
        mouse.addAnimation("mouseLastImg",mouseImg2);
        mouse.changeAnimation("mouseLastImg");
     cat.velocityX = 0;
     cat.destroy();
    }
    keyPressed();
    drawSprites();
    //text(mouseX + ' , ' + mouseY, 90 , 45);
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW) {
     cat.velocityX =  - 3;
     cat.scale = 0.1;
     cat.addAnimation("catRunning",catImg2);
     cat.changeAnimation("catRunning");
   }

   if(keyCode === RIGHT_ARROW) {
    cat.velocityX =  3;
    cat.addAnimation("catRunning",catImg3);
    cat.changeAnimation("catRunning");
  }

  if(keyCode === DOWN_ARROW) {
    cat.y = cat.y + 3;
    cat.addAnimation("catRunning",catImg3);
    cat.changeAnimation("catRunning");
  }

}
