const diagonalDifference = (matrix) => {
  var sum1 = 0;
  var sum2 = 0;
  var j;
  var count = matrix.length-1;
  for (var i = 0; i < matrix.length; i++) {
    j = i;
    sum1 += matrix[i][j];
    sum2 += matrix[i][count];
    count--;
  }
  console.log(Math.abs(sum1 - sum2));
};

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
