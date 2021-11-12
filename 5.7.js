const shortestWordsLength = str => Math.min(...str.split(' ').map(x => x.length))
console.log(shortestWordsLength("check the Shorter word in this string"));
