function solve(text, word) {
    
    let censored = text.replace(word, repeat(word))
    
    while (censored.includes(word)) {
		censored = censored.replace(word, repeat(word)) 
    }
    function repeat(input) {
	  	let replacer = ''   
    	for (let i = 0; i < input.length; i++) {
			replacer = replacer.concat('*')    
      }
    	return replacer
    }
    console.log(censored) 
}    
    
solve('A small sentence with some words, small', 'small')  
