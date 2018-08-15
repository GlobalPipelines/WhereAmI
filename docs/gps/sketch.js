var latitude;
var longitude;

function setup(){
	createCanvas(windowWidth,windowHeight); //make a fullscreen canvas, thanks to: http://codepen.io/grayfuse/pen/wKqLGL
	textSize(32);
    watchPosition(positionChanged);
}

function draw() {
	background(255); //white background
	text('Latitude: '+latitude, 10, 100);
	text('Longitude: '+longitude, 10, 150);
}

function positionChanged(position){
    print("lat: " + position.latitude);
    latitude = position.latitude;
    print("long: " + position.longitude);
    longitude = position.longitude;
}