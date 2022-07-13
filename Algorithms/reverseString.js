//Return a string with the order of characters reversed
// -- Example
// reverse('abcd') === 'dcba'
// reverse('Hello!') === '!olleH'

//Solution 1
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("abcd"));

//Solution 2

function reverse2(str) {
  let res = "";

  for (let i = 0; i <= str.length; i++) {
    const char = str[i];
    res = char + res;
    console.log(res);
  }

  return res;
}

console.log(reverse2("abcd"));
