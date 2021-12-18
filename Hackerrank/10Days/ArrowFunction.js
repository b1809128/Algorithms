const modifyArray = (array) => {
  var newArray = [];
  var s = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      s = array[i] * 3;
    } else if (array[i] % 2 == 0) {
      s = array[i] * 2;
    }
    newArray.push(s);
  }
  console.log(newArray);
};

modifyArray([1, 2, 3, 4, 5]);
