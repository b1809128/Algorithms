//None Complete
const divisibleSumPairs = (n, k, ar) => {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      sum = ar[i] + ar[j];
    }
    if (sum % k == 0) count++;
  }
  return count;
};

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
