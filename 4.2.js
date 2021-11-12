function tribonacci(n){
    if (n <= 3){return 1;}
    return tribonacci(n-1) + tribonacci(n-2)+ tribonacci(n-3);
}

console.log(tribonacci(8));

//!------------------------------------------------------
function tribonacci2(n){
  // [1, 1 ,1, 3, 5, 9, 17, 31, ...]
  let sum=0;
  const arr=new Array(n).fill(1);
  for(let i=3;i<n;i++){

    sum=arr[i-2]+arr[i-1]+arr[i];
    arr[i+1]=sum;
  }
  return sum;
}

console.log(tribonacci2(8));