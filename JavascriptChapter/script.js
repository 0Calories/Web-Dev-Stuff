//Math.random() * (max - min) + min;

document.getElementById("shape").onclick = shapeClicked;
document.getElementById("start").onclick = startButton;
document.getElementById("end").onclick = endButton;

var timeTaken = 0;
var isPlaying = false;



//=========================================================FUNCTIONS=====================================================================

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Returns an array with the size, position, and shape of the shape (0 for square, 1 for circle)
function generateAttributes() {
    var size = Math.floor(Math.random() * (400 - 100) + 100);
    var posX = Math.floor(Math.random() * (document.getElementById("shapeholder").offsetWidth - 300));
    var posY = Math.floor(Math.random() * document.getElementById("shapeholder").offsetHeight);
    var shape = Math.floor(Math.random() * 2);
    var values = [size, posX, posY, shape];

    return values;
}

function modifyShape() {
    if (isPlaying === true) {
        var attributeArray = generateAttributes();
        document.getElementById("shape").style.backgroundColor = getRandomColor();
        document.getElementById("shape").style.width = attributeArray[0] + "px";
        document.getElementById("shape").style.height = attributeArray[0] + "px";
        document.getElementById("shape").style.left = attributeArray[1] + "px";
        document.getElementById("shape").style.top = attributeArray[2] + "px";
        document.getElementById("shape").style.display = "block";
        document.getElementById("end").style.display = "block";

        if (attributeArray[3] === 0) {
            document.getElementById("shape").style.borderRadius = "0%";
        }
        else {
            document.getElementById("shape").style.borderRadius = "50%";
        }
        time = new Date().getTime();
    }
}

function shapeClicked() {
    time = (new Date().getTime() - time) / 1000;
    document.getElementById("time").innerHTML = "Your time: " + time + "s";
    document.getElementById("shape").style.display = "none";
    time = 0;
    var pause = Math.floor(Math.random() * (4 - 1) + 1);
    setTimeout(modifyShape, pause * 1000);
}

function startButton() {
    document.getElementById("start").style.display = "none";
    isPlaying = true;

    var pause = Math.floor(Math.random() * (4 - 1) + 1);
    setTimeout(modifyShape, pause * 1000);
}

function endButton() {
    document.getElementById("start").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementById("shape").style.display = "none";
    document.getElementById("time").innerHTML = "Your time:";
    isPlaying = false;
}
