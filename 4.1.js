function fibonacci(n){
    if (n <= 1){return n;}
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(12));

//!------------------------------------------------------
function fibonacci2(n){
  // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
  let previousValue=0;
  let currentValue=0;
  let sum=1
  for(let i=1;i<n;i++){
     previousValue=i;
     currentValue=i+1;
    sum+=previousValue+currentValue;
  }
  return sum;
}

console.log(fibonacci2(12));
 
     
