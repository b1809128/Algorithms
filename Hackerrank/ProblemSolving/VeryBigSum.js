const veryBigSum = (arr) => {
  let result = arr.reduce((prev, cur) => prev + cur);
  return result;
};

console.log(
  veryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
