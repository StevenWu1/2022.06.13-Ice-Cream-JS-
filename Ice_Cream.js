function setup() {
  createCanvas(400, 600);
}

function draw() {
  let x = Editor.slider(1, 400, 200);
  let y = Editor.slider(1, 400, 120);
  let size = Editor.slider(1, 200, 100);
  let distance = size / 2;
  let Conewidth = size / 2 - 10;
  background("yellow");
  strokeWeight(4);
  fill("tan");
  triangle(
    x, y + 2 * distance + 2 * Conewidth + 70,
    x - Conewidth, y + 2 * distance + 20,
    x + Conewidth, y + 2 * distance + 20
  );
  fill("lightpink");
  circle(x, y + 2 * distance, size);
  fill("mintcream");
  circle(x, y + distance, size);
  fill("chocolate");
  circle(x, y, size);
}
