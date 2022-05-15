function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    let pos = createVector(300, 200);
    let mouse = createVector(mouseX, mouseY);

    let v = p5.Vector.sub(mouse, pos);

    v.normalize();
    v.mult(50);

    translate(width / 2, height / 2);
    strokeWeight(4);
    stroke(255);
    line(0, 0, v.x, v.y);
}