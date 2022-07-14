//Given a string , return true or false depending if the string is
// a palindrome. Palindromes are words that read the same backwards
// and forwards.Make sure it is case insensitive.
//--Examples
// palindrome("Madam") === true
// palindrome('love') === false

function palindrome(str) {
  str = str.toLowerCase();
  const reversedString = str.split("").reverse().join("");
  if (str !== reversedString) {
    return false;
  }
  return true;
}

console.log(palindrome("madam"));
console.log(palindrome("racecar"));
