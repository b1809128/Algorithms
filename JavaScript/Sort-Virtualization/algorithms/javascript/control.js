const reset = () => {
  createBar(arraySize);
  stopSound();
};

const start = () => {
  let currentAlgo =
    selectAlgorithm.options[selectAlgorithm.selectedIndex].value;
  if (currentAlgo === "bubble") {
    bubbleSort();
  }
};

const changeOrder = () => reset();

const changeSort = () => reset();

const playSound = () => sound.play();

const stopSound = () => {
  sound.pause();
//   sound.currentTime = 0;
};
