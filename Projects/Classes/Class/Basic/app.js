class Rectangle {
    constructor(height, width, color) {
        this.height = height
        this.width = width
        this.color = color
        this.funInConstr = () => {
            console.log('Hello')
        }
    }

    calcArea() {
        Rectangle.prototype.timesWasUsedByAll++
        this.timesWasUsedByAllArrey.push('+1')
        return this.width * this.height
    }
}

Rectangle.prototype.timesWasUsedByAll = 0
Rectangle.prototype.timesWasUsedByAllArrey = []

const rectangleA = new Rectangle(10, 12, 'white')

rectangleA.func = () => {
    return `The color is ${rectangleA.color}`
}

const rect2 = new Rectangle(11, 11, 'blue')

//console.log(rect2.func()) ne moga da dostypvam

Rectangle.prototype.units = 'Meters'

console.log(rect2)

rectangleA.funInConstr()

console.log(rectangleA.color)
console.log(rectangleA.calcArea())

console.log(rectangleA.func())

class Square {
    constructor() {
        this.rect = new Rectangle(12, 12, 'green')

        this.rect.calcArea()
    }
}

rectangleA.calcArea()
rectangleA.calcArea()
rectangleA.calcArea()
rect2.calcArea()

console.log(Rectangle.prototype.timesWasUsedByAll)
console.log(Rectangle.prototype.timesWasUsedByAllArrey)


