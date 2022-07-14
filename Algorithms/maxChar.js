// Return the character most commonly used in the string
// -- Examples
// maxChar("1337") === '3'
// maxChar("I loveeeeeee coding") === 'e'

function maxChar(str) {
  let charCountObj = {};
  let maxChar = "";
  let maxCount = 0;

  //Fill the character count object
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    charCountObj[char] = charCountObj[char] + 1 || 1;

    if (charCountObj[char] > maxCount) {
      maxChar = char;
      maxCount = charCountObj[char];
    }
  }
  return maxChar;
}

console.log(maxChar("1337"));
// console.log(maxChar("I loveeeeeee coding"));
