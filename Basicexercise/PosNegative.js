function solve(numOne, numTwo, numThree) {
    
    let sighn = 0;
    
    if (numOne < 0) {
    	sighn++
    } 
    
    if (numTwo < 0) {
    	sighn++
    } 
     
    if (numThree < 0) {	
    	sighn++
    }
    
    if (sighn == 1 || sighn == 3) {
    	console.log("Negative")
    } else {
    	console.log("Positive")
    }
}  
    
solve(-6, -3, -2) 
