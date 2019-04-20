function solve(steps, fPmeters, kmH) {
    var hour1 = '00'
    var hour = 00
    
    let distance = (steps * fPmeters) / 1000
    
    let minBreak = (distance - distance % 0.5) / 0.5;
    
    let time1 = (distance / kmH) * 60 + minBreak
    let time = time1.toFixed(2)
    
    var timeSplit = time.toString().split('.')
    let secTh = +timeSplit[1] * 0.6
    
    let sec = secTh.toFixed()
    let min = timeSplit[0]
        
    if (+timeSplit[0] > 59) {
    	let min1 = time1 % 60
    	let minSplit = min1.toString().split('.')
    	min = +minSplit[0] 
     
     	hour = (+timeSplit[0] - +minSplit[0]) / 60
    	
     	if (hour < 10) {
     		console.log(`0${hour}:${min}:${sec}`)
        } else {
    		console.log(`${hour}:${min}:${sec}`)
        }
    	
    } else {
    console.log(`${hour1}:${min}:${sec}`)
    } 
}   
     
solve(70031, 0.6, 5) 
