function smalestOfThree(numOne, numTwo, numThree) {
    if (numOne < numTwo && numOne < numThree) {    
    	console.log(numOne)	
    } else if (numOne > numTwo && numTwo < numThree) {        	
	console.log(numTwo)	
    } else {
    	console.log(numThree)	
    }
}	
