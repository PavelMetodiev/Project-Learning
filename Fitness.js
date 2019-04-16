function solve(day, activity, hour) {
    var price = 0;
    var mPrice =0;
    
  if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
   
  	switch (activity) { 
     
    	case 'Fitness':
    		if (hour >= 8 && hour <= 15) {
    			mPrice = 5;
   				price = mPrice.toFixed(2)
    			console.log(price)
    			
            } else {
    			mPrice = 7.5;
   				price = mPrice.toFixed(2)
    			console.log(price)
    			
            }
    return;
  		case 'Sauna':
    		if (hour >= 8 && hour <= 15) {
    			mPrice = 4;
   				price = mPrice.toFixed(2)
    			console.log(price)
    			
            } else {
    			mPrice = 6.5;
   				price = mPrice.toFixed(2)
    			console.log(price)
    			
            }
    return;
  		case 'Instructor':
    		if (hour >= 8 && hour <= 15) {
    			mPrice = 10;
   				price = mPrice.toFixed(2)
    			console.log(price)
    			
             } else {
    			mPrice = 12.5;
   				price = mPrice.toFixed(2)
    			console.log(price)
    			
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
