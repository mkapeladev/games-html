var cnv;
var ctx;    

ballx = 400;
bally = 300;
ballsy = 3;
ballsx = 5;

window.onload = function(){
cnv = document.getElementById("cnv1")
ctx = cnv.getContext("2d");
var fps = setInterval('onFrame()',  1000/60)
}

function onFrame(){
   draw()
   move()
}

function move(){
 ballx += ballsx;
 bally += ballsy;
 if(ballx > cnv.width){
    ballsx = -ballsx;}
 if(ballx < (cnv.width - cnv.width) ){
    ballsx = -ballsx;}
 if(bally > cnv.height ){
    ballsy = -ballsy;}
 if(bally < (cnv.height - cnv.height)){
    ballsy= -ballsy;}
 
}

function colorRect(px, py, w, h, col){
   ctx.fillStyle = col
   ctx.fillRect(px, py, w, h)
}
function crarc(x,y,rad,sagle,eangle,cl){
   ctx.beginPath()
   ctx.arc(x, y, rad, sagle, eangle, cl)
   ctx.fill()
}
function draw(){
    colorRect(0 , 0 , cnv.width , cnv.height, 'black')
    colorRect(10, 200, 10, 200, "white")
    crarc(ballx, bally, 10, 10, Math.PI, true)


    
}