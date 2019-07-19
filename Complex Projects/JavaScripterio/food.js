class Food {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.color = createVector(random(255), random(255), random(255))
        this.radius = random(5, 10)
    }

    display() {
        stroke(this.color.x, this.color.y, this.color.z)
        strokeWeight(this.radius)
        point(this.pos.x, this.pos.y)
    }
}