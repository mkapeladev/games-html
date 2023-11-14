//calling variables
var cnv;
var ctx;    
var ballx = 400;
var bally = 300;
var ballsy = 3;
var ballsx = -5;
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

function resBall(whoS){
   console.log(whoS)
   rand = Math.random()
   if(whoS !== 1){
      ballsx = -ballsx
      console.log("Witam")
      if(rand < 0.5){
         ballsy = 0
      }
   }
   
   
   ballx = cnv.width/2
   bally = cnv.height/2
}

function onFrame(){
   draw()
   move()
   
}

function move(){
   p1s = 0 
   p2s = 0
 ballx += ballsx;
 bally += ballsy;
 if(ballx < 0 ){
   if(bally > p1Y  &&
      bally < P1_HEIGHT){
         ballsx = -ballsx
      }
      else{
         resBall(2)
      }
     
  }
  if(ballx > cnv.width){
      resBall()
    }
 if(bally > cnv.height ){
    ballsy = -ballsy;
   }
 if(bally < (cnv.height - cnv.height)){
    ballsy= -ballsy;
   }
 
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