

function findNextSquare(sqr){

  let s=Math.sqrt(sqr);
  return s-(parseInt(s))===0?Math.pow((s+1),2):-1;

}
console.log(findNextSquare(121));