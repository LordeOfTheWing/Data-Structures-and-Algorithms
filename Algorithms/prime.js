//Given a natural number 'n', determine if the number is prime or not
//Example:
//isPrime(5) returns true
//isPrime(4) returns false

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(1));
