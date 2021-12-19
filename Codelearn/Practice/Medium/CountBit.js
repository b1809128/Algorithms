//None Complete 5/19 test case
const BinaryConvert = (n) => {
  return n.toString(2);
};

const checkBit = (n) => {
  var count = 0;
  for (var i = 0; i < n.length; i++) {
    if (n[i] == "1") count++;
  }
  return count;
};

const countBit = (x) => {
  var array = [];
  var arrayCount = [];
  var str = "";
  for (var i = 0; i < x.length; i++) {
    for (var j = 1; j <= x[i]; j++) {
      str += BinaryConvert(j);
    }
    array.push(str);
  }

  for (var i = 0; i < array.length; i++) {
    arrayCount.push(checkBit(array[i]));
  }

  var sum = arrayCount[0];
  var result = [];
  for (var i = 0; i < arrayCount.length; i++) {
    result.push(sum);
    sum = arrayCount[i + 1] - arrayCount[i];
  }
  return result;
};

console.log(countBit([3, 1, 5]));
