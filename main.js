function preload(){}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video,100,90,320,240);
    stroke(50,170,80);
    fill(50,170,80);
    rect(63,27,375,25);
    rect(63,347,375,25);
    rect(27,63,25,275);
    rect(440,63,25,275);
    stroke(160,10,10);
    fill(160,10,10);
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);
}

function take_snapshot(){
    save("student_name.png");
}