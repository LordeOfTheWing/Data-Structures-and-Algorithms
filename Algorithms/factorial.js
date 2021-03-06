// Given an integer 'n', find the factorial of that integer
//Example:
//factorial(4) returns 24
//factorial(5) returns 120

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(5));

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));
