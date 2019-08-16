class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString
        this.innerLength = innerLength
        this.string = ''
        this.length = ''
    }

    decrease(length) {
        if (length < 0) {
            let lengthA = 0
            this.string = this.innerString.slice(0, `${this.innerLength - (lengthA)}`)
        } else if (length >= this.innerLength) {
            this.string = '...'
            this.innerLength = 0
        } else {
            this.string = this.innerString.slice(0, `${this.innerLength - (length)}`)
            this.string += '...'
            this.innerLength = this.innerLength - length
        }
    }

    increase(length) {
        this.innerLength += length
        this.string = this.innerString
    }

    toString() {
        if (this.string === '') {
            return this.innerString
        } else {
            return this.string
        }
    }
}

let test = new Stringer('Test', 5)
console.log(test.toString()) // Test
test.decrease(3)
console.log(test.toString()) // Te...
test.decrease(4)
console.log(test.toString()) // ...
test.increase(2)
console.log(test.toString()) // Test
