img="";
function preload(){
img=loadImage("minecraft.jpg")
}
function setup(){
canvas=createCanvas(600,400)
canvas.center()
}
function draw(){
image(img,0,0,600,400)
fill("red")
text("steve",50,50)
noFill()
stroke("red");
rect(30,30,300,300)
}
