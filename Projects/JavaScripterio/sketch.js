let segment
let color

function setup() {
    createCanvas(600, 600);
    segment = new Segment(width / 2, height / 2, 20)
    color = createVector(random(255), random(255), random(255))
}
function draw() {
    background(0);
    segment.calculateEnd()
    segment.display(color)
}