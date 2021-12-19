const countCharacter = (target, array) => {
  var c = 0;
  for (var i = 0; i < array.length; i++) {
    if (target == array[i]) c++;
  }
  return c;
};

const commonCharacterCount = (str1, str2) => {
  var result1 = [];
  var result2 = [];
  var result = [];
  var sum = 0;
  for (var i = 0; i < str1.length; i++) {
    result1.push(countCharacter(str1[i], str1));
  }

  for (var i = 0; i < str2.length; i++) {
    result2.push(countCharacter(str2[i], str2));
  }

  for (var i = 0; i < str1.length; i++) {
    sum = 0;
    for (var j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        sum = Math.min(result1[j], result2[j]);
      }
    }
    result.push(sum);
  }
  //Kiem tra trung lap
  var test = [];
  for (var i = 0; i < result.length; i++) {
    if (!test.includes(result[i])) {
      test.push(result[i]);
    }
  }

  var lastResult = 0;
  for (var i = 0; i < test.length; i++) {
    lastResult += test[i];
  }

    return [result1, result2, result, test];
//   return lastResult;
};

console.log(commonCharacterCount("zzz", "zzzzz"));

//[1,2,3,3,1,1]
