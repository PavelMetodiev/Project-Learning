function solve(n) {
    for (let i = 0; i < n; i++ ) {
        let firstLetter = String.fromCharCode(97 + i)

        for (let k = 0; k < n; k++ ) {
        let seceondLetter = String.fromCharCode(97 + k)

            for (let j = 0; j < n; j++) {
                let thirdLetter = String.fromCharCode(97 + j)
                console.log(`${firstLetter}${seceondLetter}${thirdLetter}`)        
            }
        }
    }
}

solve(2)
