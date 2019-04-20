function solve(info) {
    
 let splitInfo = info.toString().split(',')   
    
 let type1 =  splitInfo[0] 
    
 let cal1 =  splitInfo[1]  
    
  let type2 =  splitInfo[2] 
    
 let cal2 =  splitInfo[3]  
    
  let type3 =  splitInfo[4] 
    
 let cal3 =  splitInfo[5]    
    
  let calourisScale = {  
    product1: `${type1}: ${cal1}`,
    product2: `${type2}: ${cal2}`,
    product3: `${type3}: ${cal3}`,
    
  } 
    
    console.log(Object.values(calourisScale))
    
     console.log(Object.getOwnPropertyNames(calourisScale))
 }   
  
 solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])
