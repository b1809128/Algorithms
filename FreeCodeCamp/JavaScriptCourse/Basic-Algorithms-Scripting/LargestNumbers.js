const checkMax = (array) => {
  var max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
};
function largestOfFour(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(checkMax(arr[i]));
  }

  return newArray;
}

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
