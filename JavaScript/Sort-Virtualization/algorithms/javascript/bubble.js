const swap = (a, b) => {
  sortingView.insertBefore(b, a);
};

const bubbleSort = async () => {
  let bar = document.querySelectorAll(".bar");
//   let count = 1;
  for (let i = 0; i < bar.length - 1; i++) {
    for (let j = 0; j < bar.length - i - 1; j++) {
      playSound();
      const a = Number(bar[j].innerText);
      const b = Number(bar[j + 1].innerText);
      bar[j].style.transform = "translate(0, -5px)";
      bar[j + 1].style.transform = "translate(0, -5px)";
      await new Promise((resolve) => setTimeout(() => resolve(), 30));
      if (a > b) {
        swap(bar[j], bar[j + 1]);
        bar = document.querySelectorAll(".bar");
      }
      bar[j].style.transform = "translate(0,0)";
      bar[j + 1].style.transform = "translate(0,0)";
    }
    // if (count === bar.length) {
    //   stopSound();
    // }
    // count++;
  }
};
