const diagonalDifference = (matrix) => {
  var sum1 = 0;
  var sum2 = 0;
  var j, x;
  var count = 0;
  for (var i = 0; i < matrix.length; i++) {
    j = i;
    sum1 += matrix[i][j];
  }
  for (var i = matrix.length-1; i >= 0; i--) {
    x = i;
    sum2 += matrix[count][x];
    count ++;
  }
  console.log(Math.abs(sum1 - sum2));
};

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
