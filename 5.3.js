

function toCamelCase(str){
  let arr=str.split(/[_-]/ );
  // console.log(arr.length);
  for(let i=1;i<arr.length;i++){
    arr[i]=arr[i].replace(arr[i][0],arr[i][0].toUpperCase())
  }
  return arr.join('');
}
  
let str="the-stealth-warrior";
let str2="The_Stealth_Warrior";
console.log(toCamelCase(str));
console.log(toCamelCase(str2));

// arr[1]=arr[1].replace(arr[1][0],arr[1][0].toUpperCase())
// arr[2]=arr[2].replace(arr[2][0],arr[2][0].toUpperCase())
// let word1=arr[1][0].toUpperCase();
// let word2=arr[2][0].toUpperCase();
// return arr;
// return arr.join('')