function solve(num) {
    let numString = num.toString();							
    let sum = 0;
    
    for (let i = 0; i < numString.length; i++) {
       	sum += +numString[i];
    }
    
    sum % 9 === 0 ? numString += ' Amazing? True' : numString += ' Amazing? False';
    
    console.log(numString)
}   
    
solve(10351);  
