// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// Examples:
// anagram('heart', 'earth') returns true
// anagram('heart', '  earth') returns true
// anagram('Heart!', 'EARTH') returns true
// anagram('lol', 'lolc') returns false

function anagram(stringA, stringB) {
  //Sanitize the input strings
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  if (stringA.length !== stringB.length) {
    return false;
  }

  const stringACharCount = {};

  for (let i = 0; i < stringA.length; i++) {
    const aChar = stringA[i];
    stringACharCount[aChar] = stringACharCount[aChar] + 1 || 1;
  }

  for (let i = 0; i < stringB.length; i++) {
    const bChar = stringB[i];

    if (!stringACharCount[bChar]) {
      return false;
    } else {
      stringACharCount[bChar]--;
    }
  }
  return true;
}

console.log(anagram("heart", "earth"));
console.log(anagram("heart", "  earth"));
console.log(anagram("Heart!", "EARTH"));
console.log(anagram("lol", "lolc"));
