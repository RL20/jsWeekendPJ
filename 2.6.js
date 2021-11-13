
function centuryFromYear(year){
  return (year%100)===0?year/100:parseInt(year/100+1);
}

console.log(centuryFromYear(100));
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
