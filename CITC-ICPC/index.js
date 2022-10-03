function daySo(a) {
  let array = [];
  for (let i = 1; i <= a; i++) {
    array[i - 1] = i;
  }
  //   console.log(array);
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      total += array[i] * array[j];
    }
  }

  console.log(total);
}

daySo(3);
