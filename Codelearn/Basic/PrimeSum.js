const checkPrimeNumber = (x) => {
  var flag = true;
  if (x < 2) {
    flag = false;
  } else if (x == 2) {
    flag = true;
  } else if (x % 2 == 0) {
    flag = false;
  } else {
    for (var i = 3; i < x - 1; i += 2) {
      if (x % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
};

const primeSum = (n) => {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    if (checkPrimeNumber(i)) sum += i;
  }

  return sum % 22082018;
};

primeSum(3);
