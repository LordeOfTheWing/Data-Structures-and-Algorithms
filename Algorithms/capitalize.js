// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the words are in lower case.
// Example:
// capitalize("I'm a little tea pot") returns "I'm A Little Tea Pot"
// capitalize("sHoRt anD StOut") returns "Short And Stout"

function capitalize(str) {
  const arrOfWords = str.split(" ");
  const arrOfWordsCased = [];

  for (let i = 0; i < arrOfWords.length; i++) {
    const word = arrOfWords[i];
    arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  return arrOfWordsCased.join(" ");
}
console.log(capitalize("I'm a little tea pot"));

function capitalize2(str) {
  const lower = str.toLowerCase().split(" ");
  const lowered = lower.map((word) => {
    word[0].toUpperCase() + word.substring(1);
  });

  return lowered.join(" ");
}

console.log(capitalize2("hello wOrld"));
