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

const analyzeFactor = (n) => {
  var sum = 0;
  for (let i = 2; i <= n; i++) {
    if (n % i == 0 && checkPrimeNumber(i)) {
      while (n % i == 0) {
        n /= i;
        sum += i;
      }
    }
  }
  return sum;
};

const factorSum = (n) => {
  while (!checkPrimeNumber(analyzeFactor(n))) {
    n = analyzeFactor(n);
  }
  console.log(analyzeFactor(n));
};

const testSum = (n) => {
  var sum = 0;
  var m = n;
  for (let i = 2; i <= m; i++) {
    while (m % i == 0) {
      sum += i;
      m /= i;
    }
  }
  if (sum == n) return n;
  return testSum(sum);
};

console.time("taskTime");
// factorSum(24);
console.log(testSum(24));
console.timeEnd("taskTime");

/**
 * Dua vao n = 24
 * phan tich n co uoc la snt 2,3
 * check(array,index)
 * check thuc hien for 0->array.length
 * s = index*array[i]
 */
