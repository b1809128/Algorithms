const reverseWord = (word) => {
  var letter = [];
  var rword = "";

  for (var i = 0; i < word.length; i++) {
    letter.push(word[i]);
  }

  for (var i = 0; i < word.length; i++) {
    rword += letter.pop();
  }
  return rword;
};

console.log(reverseWord("abc"))