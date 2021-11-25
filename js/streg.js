function setup() {
    createCanvas(400, 400);
  }
  
  var pts = [];
  function mousePressed()
  {
      if (pts.length == 2) {
          pts = [];
      }
      pts.push([mouseX, mouseY])
  }
  
  function draw() {  
        background(220);
  
        // draw the lines between the points
        for (var i=1; i < pts.length-1; ++i) {
            line(pts[i][0], pts[i][1], pts[i+1][0], pts[i+1][1]);
        }
  
        var close = pts.length == 1;
        if (pts.length > 0) {
            // draw a rubber line from last point to the mouse
            line(pts[pts.length-1][0], pts[pts.length-1][1], mouseX,mouseY); 
        }
  }