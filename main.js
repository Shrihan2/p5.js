function preload(){}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video,160,120,320,240);
    circle(30,30,20);
}

function take_snapshot(){
    save("student_name.png");
}