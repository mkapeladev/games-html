//calling variables
var cnv;
var ctx;    
var isPaused = false;
var ballx = 400;
var bally = 300;
var ballsy = 4;
var ballsx = 8;
var p1Y = 200;
var p2Y = 200;
var aiwz;
var playerScore = 0;
var aiscore = 0;
 var aiSpeed = 100;
const P_HEIGHT = 100;
mp1 = 0;

window.onload = function(){
cnv = document.getElementById("cnv1")
ctx = cnv.getContext("2d");
var fps = setInterval('onFrame()',  1000/60)
cnv.addEventListener("mousemove", function(evt){
   var mp  = MousePosition(evt)
   p1Y = mp.y - (P_HEIGHT/2) ;
   mp1 = mp.y
   // console.log("Pozycja Y grcza " +p1Y)
   // console.log("górny róg gracza " + (p1Y + 100))
    console.log("doln róg gracza " + (mp1 + (P_HEIGHT/2)))
    console.log( "Pozycja Y piłki" + bally)
   console.log(bally > ( p1Y - (P_HEIGHT/2)))
   if(bally < p1Y){
      console.log("jesli bally y < niz p1y")
   }
   window.addEventListener("keydown", function(evt) {
      if (evt.code === "Space") {
         isPaused = !isPaused; // Toggle pause state
      }
   });
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
   if(whoS == 1){
      playerScore +=1;
      ballsx = -ballsx
      if(rand < 0.5){
         ballsy = -ballsy
      }

   }
      else{
      aiscore +=1;
   }
   
   
   ballx = cnv.width/2
   bally = cnv.height/2
}
function moveAI(){
   aiwz = bally -(p2Y - (P_HEIGHT/2))
   p2Y += aiwz * (aiSpeed / cnv.height);
   p2Y = Math.max(0, Math.min(cnv.height - P_HEIGHT, p2Y))
}
function onFrame(){
   draw()
   move()
   moveAI()
}

function isCollision(obj1, obj2) {
   var dx = obj1.x - obj2.x;
   var dy = obj1.y - obj2.y;
   var distance = Math.sqrt(dx * dx + dy * dy);

   return distance < obj1.radius + obj2.radius;
}

function move(){
   p1s = 0 
   p2s = 0
 ballx += ballsx;
 bally += ballsy;
 if (ballx - 10 < 10 && isCollision({ x: ballx, y: bally, radius: 10 }, { x: 10, y: p1Y + P_HEIGHT / 2, radius: P_HEIGHT / 2 })) {
   ballsx =-ballsx; 
}

if (ballx + 10 > cnv.width - 10 && isCollision({ x: ballx, y: bally, radius: 10 }, { x: cnv.width - 10, y: p2Y + P_HEIGHT / 2, radius: P_HEIGHT / 2 })) {
   ballsx = -ballsx ; 
}
 if(ballx <= 0 ){
   if(bally > p1Y  && bally < (p1Y + P_HEIGHT)){
      ballsx =- ballsx +15
      ballsy = 21
   }
   else{
      resBall(2)
   }
   // if(bally < (p1Y + (P1_HEIGHT /2)) && bally >( p1Y - (P1_HEIGHT/2)) ) {
   //    ballsx =-ballsx
   // }
   // else{
   //    resBall()
   // }
  }
  if(ballx > cnv.width){
   if(bally  > p2Y  && bally < (p2Y + P_HEIGHT)){
      ballsx =- ballsx
   }
   else{
      resBall(1)
   }
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
    colorRect(0, p1Y, 10, P_HEIGHT, "white")
    crarc(ballx, bally, 10, 10, Math.PI, true)
    colorRect((cnv.width - 10), p2Y, 10, P_HEIGHT, "white")
    ctx.fillText(playerScore, 100,200)
    ctx.fillText(aiscore, 650,200)

    
}