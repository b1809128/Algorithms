const factorial = (n) => {
  if (n == 1) return 1;
  return n * factorial(n - 1);
};

const factorial2 = (n) => {
  var s = 1;
  for (let i = n; i >= 1; i--) {
    s *= i;
  }
  return s;
};

const lastDigit = (result) => {
  while (result % 10 == 0) {
    result /= 10;
  }
  console.log(result);
  console.log(result % 10);
};

const lastDigitDiffZero = (result) => {
  var res = 1;
  //   var s = res %1000;
  for (let i = 1; i <= result; i++) {
    res *= i;
    //   console.log(res);
    while (res % 10 == 0) {
      res /= 10;
    }
    res %= 1000;
  }
  console.log(res % 10);
  // console.log(s)
};

// console.time("time");
// lastDigit(factorial2(25));
lastDigitDiffZero(25);
// console.timeEnd("time");
