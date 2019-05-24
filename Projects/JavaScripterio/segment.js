class Segment {
    constructor(x, y, thickness) {
        this.start = createVector(x, y);
        this.end = this.start.copy();
        this.thickness = thickness;
        this.angle = 0;
        this.len = 30;
    }

    display(color) {
        stroke(color.x, color.y, color.z)
        strokeWeight(this.thickness)
        line(this.start.x, this.start.y, this.end.x, this.end.y)
        stroke(255)
        strokeWeight(8)
        point(this.start.x, this.start.y)
    }

    calculateEnd() {
        let dx = cos(this.angle) * this.len
        let dy = sin(this.angle) * this.len
        this.end.set(this.start.x + dx, this.start.y + dy)
    }
}