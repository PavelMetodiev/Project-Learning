function firstLastKnums(arr) {
    
    let kNum = arr.shift()
    let firstK = arr.slice(0, kNum)
    let secondK = arr.slice((arr.length - kNum), arr.length)
    
    console.log(firstK)
    console.log(secondK)
}    
    
firstLastKnums([3, 6, 7, 8, 9]) 

