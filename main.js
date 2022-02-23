var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var rover_x = 10;
var rover_y = 10;
var background_image = "mars.jpg";
var rover_image = "rover.png";
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

if(keyPressed = 37){
    Left();
    console.log(left());
}

if(keyPressed = 38){
    Up();
    console.log(Up());
}

if(keyPressed = 39){
    Right();
    console.log(Right());
}

if(keyPressed = 40){
    Down();
    console.log(Down());
}