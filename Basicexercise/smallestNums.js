function smallestNums(arr) {
    
    let sortArr = arr.sort((a, b) => a - b)
    
    let twoArr = sortArr.slice(0, 2)
    console.log(twoArr.join(' '))
}   
    
smallestNums([30, 15, 50, 5]) 
