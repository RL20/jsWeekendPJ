function findUniq(arr){
  let diff;
  let repeat;
  
  if (arr[0]===arr[arr.lenght-1]){
    repeat=arr[0];
  }
  else if (arr[0]===arr[1]){
    repeat=arr[0];
  }
  else{
    diff=arr[0]
    return diff
  }

  for(element of arr){
    if (element!==repeat){
      diff=element;
    }
  }
  return diff;

}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));