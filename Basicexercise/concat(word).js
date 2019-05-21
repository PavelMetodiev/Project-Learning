function solve(input) {
    let allWords = ''
    
    for (let word of input) {
   
    	allWords = allWords.concat(word)
    }
    console.log(allWords)
}   
solve(["First", "Second", "Third"])
