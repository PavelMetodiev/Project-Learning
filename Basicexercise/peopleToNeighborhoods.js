function peopleToNeighborhoods(arr) {
	
	let map = new Map()
    let arrHood = arr[0].split(`, `)

    for (let neighborhood of arrHood) {
    	map.set(neighborhood, [])
    }
   	for (let i = 1; i < arr.length; i++) {
    	let current = arr[i].split(' - ')
    	var neighborhood = current[0]
    	let person = current[1]
   		if (arrHood.includes(neighborhood)) {
   			map.get(neighborhood).push(`--${person}`) 
        }
	}
	let sorted = [...map].sort((a, b) => b[1].length - a[1].length)
	
   	for (let [key, value] of sorted) {
		var count = map.get(key).length
		if (count == 0){
			console.log(`${key}: ${count}`)
        } else {
    		console.log(`${key}: ${count}`)
			console.log(`${value.join('\n')}`)
        }
    }
}

peopleToNeighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'])
