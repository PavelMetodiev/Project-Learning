function oddEvenSum (input) {
   let oddSum = 0 
   let evenSum = 0		
   let stringInput = input.toString() 
    
   for (let num of stringInput) { 
   		+num % 2 == 0 ? evenSum += +num : oddSum += +num;
   }
    
   console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}   
    
oddEvenSum (123456) 
