var fs = require("fs");
function readFile() {
  fs.readFile("ticked.txt", function (err, tick) {
    if (err) {
      return console.error(err);
    }
    let tickArray = [];
    const tickLength = tick.toString().length;
    let strTick = tick.toString();
    let strArray = [];

    for (let i = 0; i < tickLength; i += 6) {
      let newStr = strTick.slice(i, i + 6);
      strArray.push(newStr);
    }

    for (let i = 0; i < strArray.length; i++) {
      let str = "";
      for (let j = 0; j < 4; j++) {
        str += strArray[i][j];
      }
      tickArray.push(str);
    }
    // console.log(tickArray);
    return tickArray;
  });
}

readFile();
