var hasDocked = false



function preload(){
  bg = loadImage("spacebg.jpg")
  issImg = loadImage("iss.png")
  sc1Img = loadImage("spacecraft1.png")
  sc2Img = loadImage("spacecraft2.png")
  sc3Img = loadImage("spacecraft3.png")
  sc4Img = loadImage("spacecraft4.png")
}



function setup() {
  createCanvas(800,400);

  sc = createSprite(400, 350, 10, 10);
  //sc.addImage("sc1",sc1Img)
  sc.addImage(sc1Img)
  sc.scale = 0.2

  iss = createSprite(400, 200, 50, 50);
  iss.addImage("iss",issImg)
  iss.scale = 0.7
}

function draw() {

  background(bg);  
  drawSprites();
  //sc.addImage("sc1",sc1Img)
  sc.addImage(sc1Img)
  if(!hasDocked){

    sc.x = sc.x + random(-1,1)

    if (keyDown("UP_ARROW")){

        sc.y = sc.y - 2
    }

    if (keyDown("LEFT_ARROW")){
      sc.addImage(sc3Img)
      sc.x = sc.x - 2
  }

  if (keyDown("RIGHT_ARROW")){
    sc.addImage(sc4Img)
    sc.x = sc.x + 2
}

if (keyDown("DOWN_ARROW")){
  sc.addImage(sc2Img)
  sc.y = sc.y + 2
}

if (sc.x <=(iss.x - 5) && sc.y<= (iss.y + 60) ){

fill("white")
hasDocked = true
textSize(35)
text("sucessful", 100,50)


}


  }
}