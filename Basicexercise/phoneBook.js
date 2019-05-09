function phoneBook(input) {
  let arr = []  
  for (let string of input) {  
    let tokens = string.split(' ')
    let name = tokens[0]
    let number = tokens[1]
    arr[name] = number
  }  
  for (let key in arr) {  
    console.log(`${key} -> ${arr[key]}`)
  }  
}    
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])
