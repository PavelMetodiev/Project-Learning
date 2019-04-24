function solve(num, arr) {
    
    let arrRevers = [];
    
    for (let i = 1; i <= num; i++) {
    
    	arrRevers.push(arr[num - i])
    
    }
    
    let output = arrRevers.join(' ');
    
    
    console.log(output)
}

solve(4, [-1, 20, 99, 5]);
