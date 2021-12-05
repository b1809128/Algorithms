const check = (array, x) => {
  //x is 1,2,3,4,5
  var count = 0;
  for (let i = 0; i < array.length; i++) {
    if (x == array[i]) {
      count = 1;
      break;
    }
  }
  return count;
};

const disappearedNumbers = (n) => {
  var result = [];
  for (let i = 1; i <= n.length; i++) {
    if (!check(n, i)) {
      // console.log(i)
      result.push(i);
    }
  }
  console.log(result);
};

const test = (n) => {
  var array = [];
  for (let i = 0; i < n.length; i++) {
    array.push(i + 1);
  }
  console.log(array);
  var newArray = [];
  var sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // console.log(array[i] + " " + n[j]);
      if (array[i] != n[j]) {
        sum = array[i];
        newArray.push(sum);
      }
    }
  }
  console.log(newArray);
};
// disappearedNumbers([2, 5, 1, 5, 1]);
// disappearedNumbers([3, 4, 2, 1, 7, 7, 4]);
test([2, 5, 1, 5, 1]);
