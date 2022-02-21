function findLongestWordLength(str) {
  let max = 0;
  let result = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      max = 0;
      continue;
    }
    max++;
    result.push(max);
  }

  var maxResult =  result[0];
  for (var i = 0; i < result.length; i++) {
    if(result[i] > maxResult) {
        maxResult = result[i];
    }
  }
  return maxResult;
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");
// "What if we try a super-long word such as otorhinolaryngology"
console.log(
  findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")
);
