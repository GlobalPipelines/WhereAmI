var latitude;
var longitude;

function setup(){
	createCanvas(windowWidth,windowHeight); //make a fullscreen canvas, thanks to: http://codepen.io/grayfuse/pen/wKqLGL
	textSize(32);
    watchPosition(positionChanged);
}

function draw() {
	text('Latitude: '+latitude, 10, 10);
	text('Longitude: '+longitude, 10, 50);
}

function positionChanged(position){
    print("lat: " + position.latitude);
    latitude = position.latitude;
    print("long: " + position.longitude);
    longitude = position.longitude;
}