let segment
let color
let snake
let snakeController
let food = []
let zoom = 0

function setup() {
    createCanvas(600, 600);
    snakeController = new Controller()
    snake = new Snake(snakeController, width / 2, height / 2)
    for (let i = 0; i < 50; i++){
        let x = random(0, width)
        let y = random(0, height)
        food.push(new Food(x, y))
    }
}
function draw() {
    background(0);
    translation()
    snake.update()
    snake.display()
    for (let i = food.length - 1; i >= 0; i--){
        let piece = food[i]
        piece.display()
        if (snake.eats(piece)) {
            snake.grow(piece)
            food.splice(i, 1)
        }
    }
}
function translation() {
    translate(width / 2, height /2)
    let newZoom = 16 / snake.head.thickness
    zoom = lerp(zoom, newZoom, 0.02)
    scale(zoom)
    translate(-snake.head.end.x, -snake.head.end.y)
}