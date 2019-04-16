function solve(day, activity, hour) {
    var price = 0;
       
  if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
  	switch (activity) { 
      	case 'Fitness':
    		if (hour >= 8 && hour <= 15) {
    	        price = 5;
    			console.log(price.toFixed(2));
            } else {
   				price = 7.5;
    			console.log(price.toFixed(2));
            }
        return;
  		case 'Sauna':
    		if (hour >= 8 && hour <= 15) {
   				price = 4;
    			console.log(price.toFixed(2))
            } else {
   				price = 6.5;
    			console.log(price.toFixed(2))
            }
        return;
  		case 'Instructor':
    		if (hour >= 8 && hour <= 15) {
   				price = 10;
    			console.log(price.toFixed(2))
            } else {
   				price = 12.5;
    			console.log(price.toFixed(2))
            }	
        return;
     }
  } else {
 	switch (activity) { 
    	case 'Fitness':
   				price = 8
    			console.log(price.toFixed(2))
    	return;
  		case 'Sauna':
   				price = 7
    			console.log(price.toFixed(2))
    	return;
  		case 'Instructor':
    			price = 15
    			console.log(price.toFixed(2))
    	return;
  	}    
  }  
}    
  
     solve('kkk', 'Sauna', 16)
