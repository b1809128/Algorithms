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
  console.log("Sold not ticked: sp025");
  console.log(soldNotTicked);
};

calculatorOutput(
  ["sp02", "sp08", "sp04", "sp24", "sp07", "sp03", "sp10", "sp30"],
  ["sp02", "sp04", "sp10", "sp03", "sp25"]
);
