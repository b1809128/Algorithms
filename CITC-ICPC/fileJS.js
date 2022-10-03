var fs = require("fs").promises;
async function readFile(filePath) {
  try {
    const tick = await fs.readFile(filePath);
    const tickLength = tick.toString().length;
    let strTick = tick.toString();
    let strArray = [];
    // console.log(tick.toString().length);
    for (let i = 0; i < tickLength; i += 6) {
      let newStr = strTick.slice(i, i + 6);
      strArray.push(newStr);
    }
    // console.log(strArray);
    let lastTickArray = [];
    for (let i = 0; i < strArray.length; i++) {
      let str = "";
      for (let j = 0; j < 4; j++) {
        str += strArray[i][j];
      }
      lastTickArray.push(str);
    }
    console.log(lastTickArray);
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

async function readFileSecond(file1, file2, stringLength) {
  try {
    //+2 for \r\n
    let num = stringLength + 2;
    
    //TICKED
    const tick = await fs.readFile(file1);
    const tickLength = tick.toString().length;
    let strTick = tick.toString();
    let strArray = [];
    for (let i = 0; i < tickLength; i += num) {
      let newStr = strTick.slice(i, i + num);
      strArray.push(newStr);
    }
    let lastTickArray = [];
    for (let i = 0; i < strArray.length; i++) {
      let str = "";
      for (let j = 0; j < stringLength; j++) {
        str += strArray[i][j];
      }
      lastTickArray.push(str);
    }
    // console.log(lastTickArray);

    //SOLD
    const sold = await fs.readFile(file2);
    const soldLength = sold.toString().length;
    let strSold = sold.toString();
    let strSoldArray = [];
    for (let i = 0; i < soldLength; i += num) {
      let newStr = strSold.slice(i, i + num);
      strSoldArray.push(newStr);
    }
    let lastSoldArray = [];
    for (let i = 0; i < strSoldArray.length; i++) {
      let str = "";
      for (let j = 0; j < stringLength; j++) {
        str += strSoldArray[i][j];
      }
      lastSoldArray.push(str);
    }
    // console.log(lastSoldArray);
    calculatorOutput(lastTickArray, lastSoldArray);
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

const calculatorOutput = (ipTicked, ipSold) => {
  let tickedAndSold = [];
  let tickedNotSold = [];
  let soldNotTicked = [];
  for (let i = 0; i < ipSold.length; i++) {
    for (let j = 0; j < ipTicked.length; j++) {
      if (ipTicked[j] === ipSold[i]) {
        tickedAndSold.push(ipSold[i]);
      }
    }
  }

  for (let i = 0; i < ipTicked.length; i++) {
    let count = 0;
    for (let j = 0; j < ipSold.length; j++) {
      if (ipTicked[i] === ipSold[j]) {
        count++;
      }
    }
    if (count === 0) {
      tickedNotSold.push(ipTicked[i]);
    }
  }

  for (let i = 0; i < ipSold.length; i++) {
    let count = 0;
    for (let j = 0; j < tickedAndSold.length; j++) {
      if (ipSold[i] === tickedAndSold[j]) {
        count++;
      }
    }
    if (count === 0) {
      soldNotTicked.push(ipSold[i]);
    }
  }
  console.log("Data Ticked:");
  console.log(ipTicked);
  console.log("Data Sold:");
  console.log(ipSold);
  console.log("========================================");
  console.log("Ticked and Sold: sp02, sp03, sp04, sp10");
  console.log(tickedAndSold);
  console.log("Ticked not Sold: sp07, sp08, sp24, sp30");
  console.log(tickedNotSold);
  console.log("Sold not ticked: sp25");
  console.log(soldNotTicked);
};

// readFile("ticked.txt");

//FIXME: function (SanPhamDaTick.txt , SanPhamDaXuatHoaDon.txt , SoKyTuMaHangHoa)
readFileSecond("ticked.txt", "sold.txt", 6);
