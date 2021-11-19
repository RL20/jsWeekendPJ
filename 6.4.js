// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  let isogram = false;
  if (str === "") isogram = true;
  const strUnique = Array.from(new Set(str.toLowerCase())).join("");
  if (strUnique.length === str.length) isogram = true;
  return isogram;
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("aba")); //false
console.log(isIsogram("moOse")); //flase
