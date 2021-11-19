// accum :
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z .

function accum1(str) {
  return str
    .split("")
    .map(
      (element, i) => element.toUpperCase() + element.repeat(i).toLowerCase()
    )
    .join("-");
}

console.log(accum1("abcd"));
console.log(accum1("RqaEzty"));
console.log(accum1("cwAt"));
//!---------------------------------------------------------------------
