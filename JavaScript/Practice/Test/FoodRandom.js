const foodArray = [
  "Bún Nước Lèo",
  "Mì Tươi",
  "Bò Kho",
  "Bánh Mì",
  "Cơm Tấm",
  "Xôi Mặn",
];

console.log("Danh sách món ăn:");
console.log(foodArray);

const ranFood = (array) => {
  let resultRan = Math.floor(Math.random() * array.length);
  let food;
  for (let i = 0; i < array.length; i++) {
    if (i === resultRan) {
      food = array[i];
    }
  }
  return [food];
};

console.log("Món ăn hôm nay:");
console.log(ranFood(foodArray));
