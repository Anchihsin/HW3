function zamfiPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 100, 100);
  
  // blocky J
  fill(238);
  noStroke();
  rect(x+20, y+20, 60, 20);
  rect(x+40, y+40, 20, 40);
  rect(x+20, y+60, 40, 20);
  
  // overlay of lines
  stroke(0);
  var lines = 3;
  while (lines < 50) {
    line(x+lines, y, x, y+lines);
    lines = lines + 5;
  }
  stroke(200);
  while (lines < 100) {
    line(x+lines, y, x, y+lines);
    lines = lines + 3;
  }
  stroke(255, 127, 0);
  lines = 0;
  while (lines < 50) {
    line(x+100, y+lines, x+lines, y+100);
    lines = lines + 4;
  }
  stroke(0, 64, 127);
  while (lines < 100) {
    line(x+100, y+lines, x+lines, y+100);
    lines = lines + 4;
  }
}

zamfiPatch(20, 30) 
  
