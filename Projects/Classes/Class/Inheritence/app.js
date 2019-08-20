class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
    }

    sayHello() {
        return 'Hello'
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age} Email: ${this.email})`;
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, email, subject) {
        super(firstName, lastName, age, email)
        
        this.subject = subject
    }
}

const bill = new Person('Bill', 'Gates', 60, 'b.g@microsoft.com')

const johny = new Teacher('Johny', 'Cash', 32, 'j.cash@gmail.com', 'Music')

console.log(johny)

console.log(johny.sayHello()) 
console.log(bill.toString()) 
console.log(johny.toString()) 