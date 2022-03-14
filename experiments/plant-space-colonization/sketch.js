let tree;
let max_dist = 200;
let min_dist = 10;

function setup() {
  createCanvas(400,400);
  tree = new Tree();
}

function draw() {
  background(0);
  tree.show();
}
