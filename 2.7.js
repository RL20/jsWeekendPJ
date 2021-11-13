// operation(string/char), value1(number),value2(number).
function basicOp(operation, value1,value2){
  let opMap = {
    '+': (arg1, arg2) => arg1 + arg2,
    '-': (arg1, arg2) => arg1 - arg2,
    '*': (arg1, arg2) => arg1 * arg2,
    '/': (arg1, arg2) => arg1 / arg2,
  };

  return opMap[operation](value1, value2);
}
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));

function basicOp2(operation, value1,value2){
  return `output : ${eval(value1 + operation + value2) }`
  
}

console.log(basicOp2('-', 15, 18));
console.log(basicOp2('*', 5, 5));
console.log(basicOp2('/', 49, 7));
