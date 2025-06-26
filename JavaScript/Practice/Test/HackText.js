let sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function sleepMany() {
  console.log("1");
  await sleep(1000);
  console.log("2");
  await sleep(2000);
  console.log("3");
}

const hackNumber = () => {
  for (let i = 1; i <= 100; i++) {
    sleep(i * 10).then(() => {
      process.stdout.write(Math.floor(Math.random(i * 10) * 1000));
    });
  }
};

const hackText = () => {
  //   let hackStr = "";
  for (let i = 1; i <= 120; i++) {
    sleep(i * 10).then(() => {
      // console.log(Math.floor(Math.random(i * 10) * 1000));
      for (let j = 0; j < 10; j++) {
        // process.stdout.write(
        //   String.fromCharCode(Math.floor(Math.random(j * 10) * i))
        // );
        console.log({
          id: i,
          loop: j,
          string: String.fromCharCode(Math.floor(Math.random(j * 10) * i)),
        });
      }
    });
  }
};

sleepMany();
// hackNumber();
// hackText();
