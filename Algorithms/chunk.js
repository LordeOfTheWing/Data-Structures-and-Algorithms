// Write a function that splits an Array(first argument)
// into groups the length of the size (second argument) and
// returns them as a two-dimensional array
// Examples:
// chunk(["a","b","c","d"], 2) returns [["a","b"],["c","d"]]
// chunk([0,1,2,3,4,5],4) returns [[0,1,2,3],[4,5]]

function chunk(arr, size) {
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const last = resultArray[resultArray.length - 1];

    if (!last || last.length === size) {
      resultArray.push([item]);
    } else {
      last.push(item);
    }
  }

  return resultArray;
}

console.log(chunk(["a", "b", "c", "d"], 2));
console.log(chunk([0, 1, 2, 3, 4, 5], 4));
