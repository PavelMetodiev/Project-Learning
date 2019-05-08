function smTwoNum(arr) {
    
    arr.sort((a, b) => a - b)
    let result = arr.slice(0, 2)
    console.log(result.join(' * '))
}    
smTwoNum([30, 10, 2, 80]) 
