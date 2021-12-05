function reverseWord(data) {
  var letters = [];
  for (let i = 0; i < data.length; i++) {
    letters.push(data[i]);
  }
  console.log("letters: " + letters);

  var rword = "";
  for (let i = 0; i < data.length; i++) {
    rword += letters.pop();
  }
  console.log("reverse letters: " + rword);
}

// Run
const data = "huy";
reverseWord(data);
