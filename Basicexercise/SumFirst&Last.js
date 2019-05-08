function sumFirst(arr) {
    
    let firstNum = arr.shift()
    let secondNum = arr.pop()
    
    let result = firstNum + secondNum
    
    console.log(result)
}   
    
sumFirst([15, 3, 8, 16, 5]) 
