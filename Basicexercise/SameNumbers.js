function solve(numb) {
 	let splitNum = numb.toString()  
    let sum = 0 
    let check = 0
     
    for (let i = 0; i < splitNum.length; i ++) {
    	
    	let arrayNum = splitNum.split('')
    	sum += +arrayNum[i] 
         	      	    
    	if (+arrayNum[0] !== +arrayNum[i]) {
    		check++
   		}   
    }
    if (check > 0) {
    	console.log('false')
    } else {
    	console.log('true')
    }
    console.log(sum)
}   
    
solve(2222222)
