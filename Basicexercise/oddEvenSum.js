function oddEvenSum (input) {
   var oddSum = 0 
   var evenSum = 0		
   let stringInput = input.toString() 
    
   for (let i = 0; i < stringInput.length; i++) { 
   		
   		if (+stringInput[i] % 2 == 0) {
   			evenSum += +stringInput[i]
        } else {
   			oddSum += +stringInput[i]
        }
   		
   }
   console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}   
    
oddEvenSum (123456) 
