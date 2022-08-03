const selectAlgorithm = document.getElementById("algo-options");
const selectOrder = document.getElementById("order-options");
const sortingContainer = document.getElementById("sorting-view");
const arraySize = 30;
const arrayMaxValue = 100;
const sortingView = document.querySelector("#sorting-view");
const sound = document.getElementById("sorting-sound");

var algorithms = [
  { name: "Bubble Sort", value: "bubble" },
  { name: "Insert Sort", value: "insert" },
  { name: "Selection Sort", value: "selection" },
];

var orders = [
  { name: "Random", value: "random" },
  { name: "Reversed", value: "reversed" },
  { name: "Sorted", value: "sorted" },
];

const setAlgorithms = (algorithms) => {
  for (var i = 0; i < algorithms.length; i++) {
    selectAlgorithm.options[selectAlgorithm.options.length] = new Option(
      algorithms[i].name,
      algorithms[i].value
    );
  }
};

const setOrder = (orders) => {
  for (var i = 0; i < orders.length; i++) {
    selectOrder.options[selectOrder.options.length] = new Option(
      orders[i].name,
      orders[i].value
    );
  }
};

const createBar = (arraySize) => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  sortingContainer.innerHTML = "";
  let numArray = Array.from({ length: arraySize }, () =>
    Math.floor(Math.random() * (arrayMaxValue + 1))
  );
  var currentOrder = selectOrder.options[selectOrder.selectedIndex].value;
  if (currentOrder === "reversed") {
    numArray = numArray.sort((a, b) => b - a);
  } else if (currentOrder === "sorted") {
    numArray = numArray.sort((a, b) => a - b);
  }
  for (let i = 0; i < numArray.length; i++) {
    var bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = windowHeight * numArray[i] * 0.006 + "px";
    bar.style.width = (windowWidth * 0.8) / arraySize - 1 + "px";
    var barTitle = document.createElement("label");
    barTitle.classList.add("bar-title");
    barTitle.innerHTML = numArray[i];
    bar.appendChild(barTitle);
    sortingContainer.appendChild(bar);
  }
  // console.log(currentOrder);
};

//CALL FUNCTION
setAlgorithms(algorithms);
setOrder(orders);
createBar(arraySize);
