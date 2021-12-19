const sumOfThree = (s) => {
  var num = parseInt(s);
  var sum = 0;
    var flag = false;
  for (var i = 0; i < num; i++) {
    sum = i + (i + 1) + (i + 2);
    if (sum == num) flag =  true;
  }
  return flag;
};

console.log(sumOfThree("180"));
