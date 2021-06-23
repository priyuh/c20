  //creating the variables
  var fixedRect,movingRect;
  //setup the environment
  function setup() {
    createCanvas(800,400);
    fixedRect= createSprite(200, 200, 50, 80);
    movingRect= createSprite(400, 200, 80, 30);
  //turn on the collider
    fixedRect.debug=true;
    movingRect.debug=true;
  }
//main function
  function draw() {
    background(0);  
    //making the movingRect move with the mouse
    movingRect.x=World.mouseX;
    movingRect.y=World.mouseY;
    //writing the algorithm for the collision detection of the rectangles
      if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
        fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
        fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
        movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2)

    {
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";

     }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";

     }
    console.log(movingRect.x-fixedRect.x);
    console.log(movingRect.y-fixedRect.y);
    drawSprites();
  }
