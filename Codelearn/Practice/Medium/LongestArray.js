const checkCount = (x, array) => {
  var c = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == 1) continue;
    else if (x % array[i] == 0) c++;
  }
  return c;
};

const checkAppear = (x, result) => {
  var count = 0;
  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < result.length; j++) {
      if (x == result[i][j]) count++;
    }
  }
  return count;
};

const longestArray = (a) => {
  var result = [];
  var newArray = [];
  for (var i = 0; i < a.length; i++) {
    result.push(checkCount(a[i], a));
  }

  


  return result;
};

// console.log(longestArray([1,2,3,4,5,6]));
console.log(longestArray([2,3,9,3,12,4]));
// console.log(longestArray([14,6,6,6,3,18,14,18,17,7,10,13,3,8,6,8,11,10,7,10]));
// //[1,2,3,4,5,6]
//[14,6,6,6,3,18,14,18,17,7,10,13,3,8,6,8,11,10,7,10]
//[2,3,9,3,12,4]