function reverseString(str) {
  var str1 = [];
  for (var i = str.length - 1; i >= 0; i--) {
    str1.push(str[i]);
  }
  const result = str1.reduce((left, right) => left + right);
  return result;
}

//   reverseString("hello");

console.log(reverseString("hello"));
