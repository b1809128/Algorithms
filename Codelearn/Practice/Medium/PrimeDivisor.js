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

const checkDivisor = (x) => {
  var array = [];
  for (let i = 1; i <= x; i++) {
    if (x % i == 0) {
      if (checkPrimeNumber(i)) {
        array.push(i);
      }
    }
  }

  return array;
};

// const primeDivisor

const primeDivisor = (a, b, k) => {
  var count = 0;
  for (let i = a; i <= b; i++) {
    // console.log(checkDivisor(i).length)
    if (checkDivisor(i).length == k) {
      count++;
    }
  }
  console.log(count)
};

// primeDivisor(5,15,2)
console.time("taskTime ");
primeDivisor(10, 13, 2);
console.timeEnd("taskTime ");
