function oddNums(arr) {
    
    let result = []
    		
    for (let i = 1; i < arr.length; i += 2) {
    	  result.push((arr[i]) * 2) 
    }
    
    result = result.reverse()
	  console.log(result.join(' '))    
}    
    
oddNums([3, 0, 10, 4, 7, 3])
