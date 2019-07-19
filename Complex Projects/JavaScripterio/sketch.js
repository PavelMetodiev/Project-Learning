/*eslint-disable semi, no-unused-vars, no-undef*/
let segment
let color
let snake
let snakeController
let food = []
let zoom = 0
let enemies = []

function setup() {
    createCanvas(600, 600);
    snakeController = new Controller(width / 2, height / 2)
    snake = new Snake(snakeController, width / 2, height / 2)
    for (let i = 0; i < 50; i++){
        let x = random(0, width)
        let y = random(0, height)
        food.push(new Food(x, y))
    }
    for (let i = 0; i < 10; i++) {
        enemyController = new Controller(random(width), random(height))
        enemy = new Snake(enemyController, enemyController.pos.x, enemyController.pos.y)
        enemies.push(enemy)
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
            let x = random(width)
            let y = random(height)
            food.push(new Food(x, y))
        }
    }
    for (let enemy of enemies)
    if (mouseIsPressed) {
        if (snake.head.thickness > 10){
            snake.controller.update(5)
            snake.head.thickness -= 0.1
            for (let part of snake.body) {
                part.thickness -= 0.1
            }
            if (random(1) < 0.1) {
                snake.body.splice(snake.body.length - 1, 1)
            }
        }
    } 
}

function translation() {
    translate(width / 2, height / 2)
    let newZoom = 16 / snake.head.thickness
    zoom = lerp(zoom, newZoom, 0.008)
    scale(zoom)
    translate(-snake.head.end.x, -snake.head.end.y)
}