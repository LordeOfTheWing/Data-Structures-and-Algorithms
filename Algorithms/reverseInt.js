// Given an integer, return an integer with the digits
// reversed
// -- Examples
// reverseInt(13) === 31
// reverseInt(404) === 404
// reverseInt(100) === 1
// reverseInt(-13) === -31
// reverseInt(-100) === -1

function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("");
  reversed = parseInt(reversed);

  if (n < 0) {
    return reversed * -1;
  }

  return reversed;
}

console.log(reverseInt(13));
console.log(reverseInt(404));
console.log(reverseInt(100));
console.log(reverseInt(-13));
console.log(reverseInt(-100));
