function storage(arr) {
  
  let map = new Map()      
  
  for (let string of arr) {  
    let tokens = string.split(' ')
    let product = tokens[0]
    let quantity = +(tokens[1])
    if (!map.has(product)) {
  		map.set(product, quantity)
  	} else {
  		let currQauntity = map.get(product)
  		let newQuantity = currQauntity += quantity
  		map.set(product, newQuantity)
    }  
  }    
  for (let [key, value] of map) {
   	console.log(`${key} -> ${value}`)
  } 
}  
