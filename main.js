function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCapture(550, 550)
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modleLoaded);
    poseNet.on('pose', gotPoses);
}
noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function draw() {
    background('#969A97');
}

function modleLoaded() {
    console.log('podseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

    }
}


function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTMl = "Width And Height of a Square will be = " + difference+"px";
    fill('red');
    stroke('red');
    square(noseX, noseY, difference); 
}

