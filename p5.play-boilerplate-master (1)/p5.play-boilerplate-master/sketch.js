var zenia,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
zenia =  createSprite(50, 200, 50, 50);
wall = createSprite(1200, 200, 40, 250);

}

function draw() {
  background(255,255,255); 
  zenia.velocityX = speed;

    if(zenia.x - wall.x < zenia.width/2 + wall.width/2
  &&   wall.x - zenia.x < zenia.width/2 + wall.width/2) {
       zenia.velocityX = 0;
      deformation = 0.5*speed*weight*speed/22509;
    if(deformation<100 && deformation>0){
        zenia.shapeColor = color(0,255,0);
    }
    if(deformation>100 && deformation<180){
        zenia.shapeColor = color(230,230,0);
    }
    if(deformation>180){
        zenia.shapeColor = color(255,0,0)
    }
}
  drawSprites();
}

