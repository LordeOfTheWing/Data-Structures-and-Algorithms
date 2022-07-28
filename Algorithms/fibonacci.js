//Given a number 'n', find the first 'n' elements of the fibonacci sequence
//Examples:
// fibonacci(2) returns [0,1]
// fibonacci(3) returns [0,1,1]
// fibonacci(7) returns [0,1,1,2,3,5,8]

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(7));
