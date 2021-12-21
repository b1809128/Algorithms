const differentSymbolsNaive = (str) => {
  var c = 0;
  var count = str[c];
  var result = 1;
  for (var i = 0; i < str.length; i++) {
    if (count == str[i]) continue;
    c++;
    result++;
  }
  if (result > 3) return result - 1;
  return result;
};

console.log(differentSymbolsNaive("cabca"));
