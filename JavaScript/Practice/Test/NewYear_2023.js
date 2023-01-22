import logSymbols from "log-symbols";

const createCodeLunarNewYear = (arrayA, arrayB) => {
  let sum = 0;
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      sum += arrayA[i] + arrayB[j];
    }
  }
  return (sum % arrayA[arrayA.length - 1]) + (sum % arrayB[arrayB.length - 1]);
};

const recursionSum = (n) => {
  let testCase = n;
  return testCase == 0 ? 0 : n + recursionSum(n - 1);
};

let sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const testResult = async (numLength) => {
  let err = 0;
  for (let i = 0; i < numLength; i++) {
    if (i < numLength) {
      await sleep(1000);
      console.log("Testcase " + i + " passed", logSymbols.success);
    } else {
      // sleep(2000);
      err += 1;
      console.log("Testcase " + i + " error", logSymbols.error);
      break;
    }
  }
  err === 0
    ? process.stdout.write(
        numLength +
          " Testcase passed " +
          logSymbols.success +
          ", " +
          err +
          " Error " +
          logSymbols.error
      )
    : process.stdout.write(
        "Testcase " + (numLength - err) + " Passed " + logSymbols.success
      );
};

testResult(recursionSum(createCodeLunarNewYear([1, 2, 3], [4, 5, 6])) - 1);
// testResult(3);
// console.log(recursionSum(3));
// console.log(
//   logSymbols.success,
//   "Result: " + createCodeLunarNewYear([1, 2, 3], [4, 5, 6])
// );

// process.stdout can be use + with num and sting
