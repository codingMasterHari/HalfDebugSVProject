class Game {
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        police = new Police();
        // this.policeButton.hide();
        theif = new Theif();
        form = new Form()
        form.display();
      }

      policeCar = createSprite(900,900);
      policeCar.addImage("policeCar",policeCarImage);
      policeCar.scale = 0.5;
      theifCar = createSprite(1200,500);
      theifCar.addImage("theifCar",theifCarImage);
      theifCar.scale = 0.2;
      // theifPlane = createSprite(500,700);
      // theifPlane.addImage("theifPlane",theifPlaneImage);
      // theifPlane.scale = 0.8;
      items = [policeCar, theifCar, theifPlane];

      // if(this.theifButton.mousePressed) {
      //   player[index-1].value = theif;
      //   player[1].value = police;

      // } 
    }
  
    play(){
      form.hide();
      
      police.getPoliceInfo();
      theif.getTheifInfo();
      
      if(police !== undefined && theif !== undefined){
        background(rgb(198,135,103));
        image(trackImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 350 ;
        var y;
  
  
      }
  
      if(keyIsDown(UP_ARROW)){
        police.y-=10;
      } else if (keyIsDown(LEFT_ARROW)) {
         police.x -= 15;
      } else if (keyIsDown(RIGHT_ARROW)) {
         police.x += 15;
      }

      if(keyIsDown("W")){
        theif.y-=10;
      } else if (keyIsDown("A")) {
         theif.x -= 15;
      } else if (keyIsDown("D")) {
         theif.x += 15;
      }
  
      drawSprites();
    }
  }