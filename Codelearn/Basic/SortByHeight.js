const sortByHeight = (a) => {
  var temp = 0;
  for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] < 0 || a[j] < 0) {
        continue;
      } else if (a[i] > a[j]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  console.log(a)
};

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
