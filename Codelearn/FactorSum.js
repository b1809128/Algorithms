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
  var array = [];
  var sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0 && checkPrimeNumber(i)) {
      // array.push(i);
      while (n % i == 0) {
        n /= i;
        array.push(i);
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
  // console.log(sum);
};

const factorSum = (n) => {
  while (!checkPrimeNumber(analyzeFactor(n))) {
    n = analyzeFactor(n);
  }
  console.log(analyzeFactor(n));
};

// console.log(checkPrimeNumber(4));
console.time("taskTime");
factorSum(35);
console.timeEnd("taskTime");

/**
 * Dua vao n = 24
 * phan tich n co uoc la snt 2,3
 * check(array,index)
 * check thuc hien for 0->array.length
 * s = index*array[i]
 */
