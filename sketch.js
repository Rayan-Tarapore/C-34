var ball;
var database,ballPos,databaseref
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    databaseref = database.ref('Ball/Position');
    databaseref.on("value",readPos,showErr);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('Ball/Position').set(
       {
            x:ball.x + x,
            y:ball.y + y 
        }
    )
  
}

function readPos(data){
ballPos = data.val();
ball.x = ballPos.x;
ball.y = ballPos.y;

}

function showErr(){
    console.log("ERROR")
}