const compareSumOfDigits = (n) => {
  var oddNum = 0;
  var evenNum = 0;
  for (var i = 0; i < n.length; i++) {
    if (parseInt(n[i] == 0)) continue;
    if (parseInt(n[i]) % 2 == 0) {
      evenNum += parseInt(n[i]);
      //console.log("E", evenNum);
    } else if (parseInt(n[i]) % 2 != 0) {
      oddNum += parseInt(n[i]);
      //console.log("O", oddNum);
    }
  }

  return (oddNum - evenNum);
};

compareSumOfDigits("012345");
