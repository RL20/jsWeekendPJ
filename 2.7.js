// operation(string/char), value1(number),value2(number).
function basicOp(operation, value1,value2){
  return `output : ${eval(value1 + operation + value2) }`
}
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));
