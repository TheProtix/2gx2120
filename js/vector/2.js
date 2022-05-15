function setup() {
    createCanvas(600, 400);
}
  
function draw() {
    background(0);
    let pos = createVector(300, 200);
    let mouse = createVector(mouseX, mouseY);

    let v = p5.Vector.sub(mouse, pos);
}