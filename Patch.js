function ANCHIPatch(x, y) {
  noFill();
  stroke(0, 150, 255);
  rect(x, y, 200, 200);
  
// overlay of lines
  stroke(0);
  var lines = 3;
  while (lines < 200) {
    line(x+lines, y+50, x+50, y+lines);
    lines = lines + 5;
  }
 
  stroke(120, 50, 255);
  lines = 0;
  while (lines < 200) {
    line(x+100, y+lines, x+lines, y+100);
    lines = lines + 4;
  }
  
}

background(255);
ANCHIPatch(80, 80); 
