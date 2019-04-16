function solve(numOne, numTwo) {
    
    let num = [];
    for (let i = 0; i <= numOne; i++){
   
    	let answerOne =	numOne % i;	
     	let answerTwo =	numTwo % i; 
       
    	if (answerOne === 0 && answerTwo === 0) {
    		num.push(i);
        }
	}
    numN = num.pop()		
    console.log(numN)	
}    
    
    
  solve(2154, 458) 
