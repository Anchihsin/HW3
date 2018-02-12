function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == '1') {
    fill(140,120, 150);
		diameter = 30;
  } else if (key == '2') {
    fill(200);
		diameter = 60;
  } else if (key == '3') {
		fill(244, 289, 129);
		diameter = 90;
	}
}

setup();
draw();
keyPressed();
