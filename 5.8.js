const longestWordsLength = str => Math.max(...str.split(' ').map(x => x.length))
console.log(longestWordsLength("check the Longer word in this string"));
