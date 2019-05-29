let segment
let color
let snake
let snakeController
let food = []

function setup() {
    createCanvas(600, 600);
    snakeController = new Controller()
    snake = new Snake(snakeController, width / 2, height / 2)
    for (let i = 0; i < 10; i++){
        let x = random(0, width)
        let y = random(0, height)
        food.push(new Food(x, y))
    }
}
function draw() {
    background(0);
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