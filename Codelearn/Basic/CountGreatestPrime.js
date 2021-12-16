//Factor Sum
const factorSum = (n) => {
  const array = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      array.push(i);
    }
  }
  // console.log(array);
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (checkPrimeNumber(array[i])) {
      newArray.push(array[i]);
    }
  }
//   console.log(newArray);
return newArray;
};

// Check Prime Number
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


// console.log(factorSum(140));

const checkGreatestNumber = () => {
  var array = [];
  var result = 0;
  var max = 0;
  for (let i = 1; i <= 1000; i++) {
    if(max  <= factorSum(i).length){
        console.log("Loop: " + i);
        max = factorSum(i).length;
        result = i;
        array.push(i)
        console.log(factorSum(i))
        console.log(max,result);
    }
  }
  console.log(array)
  console.log(result + " is the largest number has " + max +" common divisor prime number");
};


checkGreatestNumber();