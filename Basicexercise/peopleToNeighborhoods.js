function peopleToNeighborhoods(arr) {
    
    let arrHood = arr[0].split(`,`)
   	
    let map = new Map()
    for (let string of arrHood) {
    	
    		map.set(string, [])
   	
   		for (let i = 1; i < arr.length; i++)
    	let current = arr[i].split('-')
    	let string = current[0]
    	let person = current[1]
   		if (arrHood.icludes(string)) {
   			map.get(string).push(person)
        }
	}
   	for (let [key, value] of map) {
    	console.log(`${key}: ${value}`)
    }
}
    

   
peopleToNeighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'])
