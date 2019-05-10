function wordOccurrences(arr) {
    
    let map = new Map()
    for (let string of arr) {	
    	
    	let words = string
    	let times = 1
    	
    	if (!map.has(words)) {
    		map.set(words, times)
        } else {
    		let currTimes = map.get(words)
    		let newTimes = currTimes += times
    		map.set(words, newTimes)
        }
    }
    let sorted = [...map].sort((a, b) => b[1] - a[1]) 
    for (let [key, value] of sorted) {
    	console.log(`${key} -> ${value} times`)
    }
}      
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
