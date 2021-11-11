function lovestNum(arr){
  let sortedArr=arr.sort(function (a, b) {  return a - b;  })

  
  return sortedArr[0]+sortedArr[1];
}
console.log(lovestNum([19, 5, 42, 2, 77]));
console.log(lovestNum([10, 343445353, 3453445, 3453545353453]));