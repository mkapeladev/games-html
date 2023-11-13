//calling variables
var cnv;
var ctx;    
var ballx = 400;
var bally = 300;
var ballsy = 3;
var ballsx = 5;
var p1Y = 200;
const P1_HEIGHT = 200;

window.onload = function(){
cnv = document.getElementById("cnv1")
ctx = cnv.getContext("2d");
var fps = setInterval('onFrame()',  1000/60)
cnv.addEventListener("mousemove", function(evt){
   var mp  = MousePosition(evt)
   p1Y = mp.y - (P1_HEIGHT/2) ;
   console.log(p1Y)
})
}

function MousePosition(evt){
   var rect = cnv.getBoundingClientRect();
   var root = document.documentElement;
   var mX = evt.clientX - rect.left - root.scrollLeft;
   var mY = evt.clientY - rect.top - root.scrollTop;
   return {
      x:mX,
      y:mY
   }
   
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
    colorRect(10, p1Y, 10, P1_HEIGHT, "white")
    crarc(ballx, bally, 10, 10, Math.PI, true)


    
}