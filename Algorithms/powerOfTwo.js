//Given a positive integer 'n', determine if the number is a power of 2 or not
//Example:
//isPowerOfTwo(1) returns true
//isPowerOfTwo(2) returns true
//isPowerOfTwo(5) returns false

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;
}

function isPowerOfTwoBitwise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0; // Big-O  = O(1) - Constant time
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(2));
console.log(isPowerOfTwoBitwise(5));
