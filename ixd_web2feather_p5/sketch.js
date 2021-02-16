//Written by William Luk
// posts data to an Adafuit.io feed
let url = 'https://io.adafruit.com/api/v2/Rexlek/feeds/testdata/data';
let b = "Want to get your SO attention?"
let c = "Does your SO never checks their phone? Light the box up on their desk to get their attention!"
var data = 0;
let col = color(232, 207, 187);

function setup() {
    createCanvas(windowWidth, windowHeight);
    myButton = createButton('NOTICE ME SENPEI');
    myButton.position(200, 450);
    myButton.mousePressed(press);
    myButton.mouseReleased(off);
    myButton.style("font-size", "25px");
    myButton.style("fill", "col");
    myButton.size(300, 75);
}

function draw() {
    background(232, 207, 187);
    textSize(50);
    fill(140, 0, 2);
    textStyle(BOLD);
    text(b, 200, 300);
    textSize(24);
    fill(0);
    textStyle(NORMAL);
    text(c, 200, 350, 800, 850);
}

function press() {
    data = 1;
    console.log(data);
    sendData(data);
}

function off() {
    data = 0;
    console.log(data);
    sendData(data);
}

function sendData(turnOn) {
    let postData = {
        "value": turnOn,
        "X-AIO-Key": "aio_dCNk97lasL6fjb9pah5oS8NFGzJn"
    };
    httpPost(url, 'json', postData, function (result) {
        console.log(result);
    });
}
