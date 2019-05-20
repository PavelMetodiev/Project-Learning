class Segment {
    constructor(x, y, thickness){
        this.start = createVector(x, y);
        this.end = this.start.copy();
        this.thickness = thickness;
        this.angle = 0;
        this.len = 5;
    }
}