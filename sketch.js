var button
var question 
var playing
var score = 100
function preload(){
  bg1=loadImage("code 1.jpg")
  bg2=loadImage("code 2.jpg")
  bg3=loadImage("code.jpg")
  bg4=loadImage("code3.jpg")
  bg5=loadImage("code4.jpg")
  bg6=loadImage("hh 1.jpg")
  bg7=loadImage("tt.jpg")
  bg8=loadImage("hn.png")
  bg9=loadImage("hk.jpg")
  bg10=loadImage("khk.jpg")
  bg11=loadImage("end.jpg")
  bg12=loadImage("doctor.jpg")
  bg13=loadImage("cold.jpg")
  bg14=loadImage("breathing.jpg")
  bg15=loadImage("diabetes.jpg")
  bg16=loadImage("endI.png")
  bg17=loadImage("lung.png")
  bg18=loadImage("kj.jpg")
  bg19=loadImage("stay-positive.gif")
  bg20=loadImage("hg.jpg")
  bg21=loadImage("hjk.jpg")
  bg22=loadImage("di.jpg")
  bg23=loadImage("y.jpg")
  bg24=loadImage("jk.jpg")
  bg25=loadImage("stay home .jpg")
  bg26=loadImage("don't travel.jpg")
  bg27=loadImage("hh.jpg")
  bg28=loadImage("the end.jpeg")





  

}

function setup() {
//background(bg4)
  createCanvas(displayWidth-100,displayHeight-100);
  question=new Question();
 
}

function draw() {

  background(bg28);
  textSize(30)
  fill("green")
  text(" HELLO!! WELCOME TO  covTEST  APP",600,50)
  fill("red")
  text(" HOW WILL THIS APP HELP ME  ?",550,110)
  fill("orange")
  text("this is an app which would help u take a self health test ",550,190)
  text("and will also help u know what all u should do in this pandemic",510,230)
  text("this app will help u a lot during this covid situation!",490,280)
  fill("red")
  text("HOW WILL THE APP WORK ????",530,350)
  fill("orange")
  text("this app will give u a set of questions each and every ",580,400)
  text("question will be health related questions and ",642,450)
  text("there will be a NEXT button which will take u to ",660,500)
  text("the next question",680,550)
  fill("green")
  text("H",690,600)
  fill("red")
  text("O",715,600)
  fill("blue")
  text("P",740,600)
  fill("brown")
  text("E",760,600)
  fill("purple")
  text("this app helps u ",790,600)

   //textSize(20)
   //stroke("yellow");
  //text("Health Condition: "+ score, displayWidth-400,50);  
  question.display()
  playing.play()
//button.display()
  drawSprites();
}