function lastKnumsSequence(arrLength, numsToSum) {
    
    let sum = 0
    let start = 0
    let end = 0
    let arr = [1]
    
    
    for (let current = 1; current < arrLength; current++) {
    
    	start = Math.max(0, current - numsToSum)
    	end = current - 1
    	sum = arr[start + end]
    	arr[current] = sum
    
    console.log(start)
    console.log(end)
    console.log(sum)	
    console.log(arr)
    }
    
    
    
}    
    
lastKnumsSequence(6, 3)
