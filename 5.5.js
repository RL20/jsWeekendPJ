function abbreviate(str){
  let arr=str.toUpperCase().split(' ');
  return `${arr[0][0]}.${arr[1][0]}`
}
console.log(abbreviate('Sam Harris'));
console.log(abbreviate('Patrick Feeney'));
console.log(abbreviate('patrick feeney'));