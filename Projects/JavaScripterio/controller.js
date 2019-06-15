class Controller {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.dir = createVector(random(width), random(height))
    }

    update(isPlayer, mag) {
        let dir
        if (isPlayer) {
            let dir = createVector(mouseX - width / 2, mouseY - height / 2) 
        } else {
            if (random(1) < 0.1) {
                this.dir = createVector(random(width), random(height))
            }
            dir = this.dir
        }
        if (isPlayer && mag) {
            dir.setMag(mag)
        } else {
            dir.setMag(0.8)
        }
        
        this.vel.lerp(dir, 0.2)
        this.pos.add(this.vel)
    }
}