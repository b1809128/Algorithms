function unique(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));
