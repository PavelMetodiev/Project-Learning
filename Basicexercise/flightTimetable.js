function solve(airInfo) {
    
    let splitInfo = airInfo.toString().split(',')
    
    let depArr = splitInfo[0]
    
    let town = splitInfo[1]
    
    let time = splitInfo[2]
    
    let flightNum = splitInfo[3]
    
    let gateNum = splitInfo[4]
    
console.log(`${depArr}: Destination - ${town},
Flight - ${flightNum}, Time - ${time}, Gate - ${gateNum}`)    
    
}     
    
solve(['Arrivals', 'Paris', '02:22', 'VD17', '3'])
