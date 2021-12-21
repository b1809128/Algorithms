const checkAppear = (x, array) => {
  var c = 0;
  for (var i = 0; i < array.length; i++) {
    if (x == array[i]) c++;
  }
  return c;
};

const checkEqualFrequency = (array) => {
  var count = [];
  var c = 0;
  for (var i = 0; i < array.length; i++) {
    count.push(checkAppear(array[i], array));
  }
  var checked = count[0];
  for (var i = 0; i < count.length; i++) {
    if (count[i] != checked) {
      c++;
    }
  }
  if(c == 0) {
      return true;
  }
  return false;
};

console.log(checkEqualFrequency([1, 2, 2, 3, 1, 3, 1, 3]));
