function solve(firstNum, seconfNum, thirdNum) {
    
    let sum = firstNum + seconfNum + thirdNum;
    
    sum % 1 === 0 ? sum += '-Integer' : sum += '-Float';
    
    console.log(sum)
    
}   
    
solve(10, 10, 10.01) 
