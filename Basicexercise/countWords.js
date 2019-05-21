function solve(string, searchedWord) {
    
    let words = string.split(' ')
    let counter = 0
    for (let i of words) {
      if (i == searchedWord) {
    	  counter++
      }
    }
    console.log(counter)
}    
    
solve("This is a word and it also is a sentence", "is")   
