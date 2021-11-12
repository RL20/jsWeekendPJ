
function toWeirdCase(str){
  let arr=str.split(' ');
  let nStr='';
  for(element of arr){
    for(let i=0;i<element.length;i++){
      i%2===0?nStr+=element[i].toUpperCase():nStr+=element[i];
    }
    nStr+=' ';
  }
  return  nStr;
}
console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ));//=> returns "WeIrD StRiNg CaSe"