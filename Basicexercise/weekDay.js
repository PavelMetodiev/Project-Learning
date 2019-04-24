function solve(input) {
    
    let weekArr = ['Moday', 'Tusedy', 'Wendsday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    let output = input < 8 && input > 0 ? weekArr[input - 1] : 'Ivalid day!';
    
    console.log(output)
    
    
}    
    
solve(-1) 
