//const Rectangle = class {
//    constructor(width, hight, color) {
//    	this.width = width
//        this.hight = hight
//        this.color = color  
//        this.type = undefined
//        this.metric = false 
//    }
//
//    calcArea() {
//        return this.width * this.hight
//    }
//
//}    
//
//let rect = new Rectangle(4, 5,'red')
//
//rect.metric = 'MM'
//rect.type = '90'
//
//console.log(rect.color)
//console.log(rect.hight)
//console.log(rect.width)
//console.log(rect.calcArea())
//console.log(rect.type)
//console.log(rect.metric)



//const Person = class {
//    constructor(firstName, lastName, age, email) {
//        this.firstName = firstName
//        this.lastName = lastName
//        this.age = age
//        this.email = email
//    }
//
//    toString() {
//        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
//    }
//}
//
//let person = new Person('Ana', 'Koleda', 23, 'happy@google.com')
//
//console.log(person.toString())
//console.log(person.email)


//const Circle = class {
//    constructor(radius) {
//        this.radius = radius
//    }
//
//    get diameter() { return 2 * this.radius }
//
//    set diameter(diameter) { this.radius = diameter / 2 }
//
//    get area() {
//        return Math.PI * this.radius * this.radius
//    }
//}
//
//let c = new Circle(2)
//
//console.log(c.area, c.diameter, c.radius)
//c.diameter = 1.6
//console.log(c.area, c.diameter, c.radius)
//c.radius = 3
//console.log(c.area, c.diameter, c.radius)
//c.area = 16
//console.log(c.area, c.diameter, c.radius)
//c.diameter = 8
//console.log(c.area, c.diameter, c.radius)


function tikets(ticketArray, sortingCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    let unsortedTickets = []

    for (let ticket of ticketArray) {
        let [destination, price, status] = ticket.split('|')
    
        unsortedTickets.push(new Ticket(destination, price, status))
    }

    let sortedTickets = {}

    switch (sortingCriteria) {
        case 'destination':
            sortedTickets = unsortedTickets.sort((a,b) => {
                return a.destination.localeCompare(b.destination)
            }); break;
        case 'price':
            sortedTickets = unsortedTickets.sort((a,b) => {
                return a.price - b.price
            }); break;
        case 'status':
            sortedTickets = unsortedTickets.sort((a,b) => {
                return a.status.localeCompare(b.status)
            }); break;
    }

    return sortedTickets
}

console.log(tikets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))
    