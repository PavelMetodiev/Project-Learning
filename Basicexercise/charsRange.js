function charRange(charOne, charTwo) {
    let asciiOne = charOne.charCodeAt(0)
    let asciiTwo = charTwo.charCodeAt(0)
    let result = ""
    
    if (asciiOne < asciiTwo) {
    	for (let i = asciiOne + 1; i < asciiTwo; i++) {
    		result += ` ${String.fromCharCode(i)}`
    	}
    } else {
    	for (let i = asciiTwo + 1; i < asciiOne; i++) {
    		result += ` ${String.fromCharCode(i)}`
    	}
    }
    
    console.log(result)
   
}   
   
charRange('c', 'n') 
