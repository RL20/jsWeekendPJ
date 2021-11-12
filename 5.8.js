const shortestWordsLength = str => Math.max(...str.split(' ').map(x => x.length))
console.log(shortestWordsLength("check the Longer word in this string"));
