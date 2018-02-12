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
  if (key == 'R') {
    fill(255, 0, 0);
  } else if (key == 'G') {
    fill(100);
  } else if (key == 'B') {
    fill(0, 255, 100); 
  }else if (key == 'A') {
    fill(255, 20,0); 
  }else if (key == 'D') {
    fill(150); 
	}else if (key == 'E') {
    fill(0, 255, 255); 
  }else if (key == 'F') {
    fill(100, 0, 255); 
  }
}

setup();
draw();
keyPressed();
