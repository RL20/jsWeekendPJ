// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter = arr.filter((element) => element % 2 === 0);
console.log(filter);
const foreach = arr.forEach((element, i, arr) =>
  i === 5
    ? console.log(`element in index ${i} is:${arr[i]}`)
    : console.log(element)
);
const mapp = arr.map((element, i) => element * i);
console.log(mapp);
