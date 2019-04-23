function solve(str, char, result) {
let res = str.replace('_', char);
var  output = res === result ? 'Matched' : 'Not matched';
console.log(output);
}                                

solve('Str_ng', 'i', 'String') 
