function lastKnumsSequence(arrLength, numsToSum) {
    
    let start = 0
    let end = 0
    let arr = [1]
   
    for (let current = 1; current < arrLength; current++) {
    	let sum = 0
    
    	start = Math.max(0, current - numsToSum)
    	end = current - 1
    
   		for (let i = start; i <= end; i++) {
    		sum += arr[i]
        }
    
    	arr[current] = sum
    }
    
    console.log(arr.join(' '))
}    
    
lastKnumsSequence(9, 5)
