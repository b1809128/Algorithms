const checkArray = (length, index,k) => {
    var sum = 0;
    var count = 0;
    var array = [];
  for (let i = 1; i <= length; i++) {
    sum = Math.pow(i, 2) + Math.pow(index, 2);
    // console.log(sum);  
    array.push(sum);  
  }
//   console.log(array);
  for (let i = 0; i < array.length; i++) {
      if(array[i] == k){
          count++
      }
  }
  return count;
};

const sumSquares = (k) => {
  n = Math.sqrt(k);
  var count =0;
  for(let i = 1; i <= n; i++) {
      if(checkArray(n,i,k)==1 || Math.pow(i,2) == k){
          count ++;
      }
  }
  console.log(count);
};

sumSquares(5);
