function maskify(str){
  if(str.length<=4){
    return str;
  }
  return '#'.repeat(str.length-4)+str.slice(str.length-4);
  
}
console.log(maskify("4556364607935616"));
console.log(maskify("935616"));