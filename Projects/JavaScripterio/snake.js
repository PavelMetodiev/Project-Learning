class Snake {
    constructor(controller, x, y) {
        this.controller = controller
        this.thickness = random(10, 20)
        this.head = new Segment(x, y, this.thickness)
        this.len = 10
        this.body = []
        this.color = new Food(x, y)
        this.buildSnake()
    }
   
    buildSnake() {
        let prev = this.head
        for (let i = 0; i < this.len; i++){
            let current = new Segment(prev.end.x, prev.end.y, this.thickness)
            this.body.push(current)
            prev = current
        }
        
    }

    display() {
        
        this.head.display(this.color)
        for (let part of this.body) {
            part.display(this.color)
        }
        this.head.drawEye()
    }

    update(isPlayer) {
        this.controller.update(isPlayer)
        this.head.follow(this.controller.pos.x + 10, this.controller.pos.y + 10)
        let prev = this.head
        for (let part of this.body) {
            part.follow(prev.start.x, prev.start.y)
            prev = part
        }
    }

    eats(food) {
        let dist = p5.Vector.dist(this.head.end, food.pos)
        if (dist < this.head.thickness / 2) {
            return true
        } else {
            return false
        }
        
    }

    grow(food) {
        this.head.thickness += food.radius / 8
        for (let part of this.body) {
            part.thickness += food.radius / 8
        } 
        this.color = food.color
        let tail = this.body[this.body.length - 1]
        let newSegment = new Segment(tail.end.x, tail.end.y, tail.thickness )
        this.body.push(newSegment)
    }
    kills(snake) {
        
            for (let segment of this.body) {
                let dist = p5.Vector.dist(snake.head.start, segment.start)
                if (dist < this.head.thickness) {
                    return true
                }
            }
            return false
        
    }
}   