noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialised!!!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.rightWristX.x;
        difference = floor(leftWristX - rightWrist);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + difference)
    }
}

function draw(){
    background('#FFD700');

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference + "px";

    fill('#FF0012');
    stroke('#FF0012');
    square(noseX, noseY, difference);
}