const checkTrue = (x, n, array) => {
  var flag = false;
  for (var i = 0; i < array; i++) {
    if (x * array[i] == n) flag = true;
  }
  return flag;
};

const digitsProduct = (n) => {
  var newArray = [];
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i * j == n) {
        newArray.push(j);
      }
    }
  }
  var c = 0;
  var test = newArray.sort();
  var minArray = test[c];
  var result = [];
  for (var i = 0; i < test.length; i++) {
    s = minArray * test[i];
    if (s == n) {
      result.push(minArray);
      result.push(test[i]);
    }
    c++;
  }
  console.log(test);
};

digitsProduct(450);
