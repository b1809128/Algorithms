const sortArray = (n) => {
  var temp = 0;
  for (var i = 0; i < n.length; i++) {
    for (var j = i + 1; j < n.length; j++) {
      if (n[i] > n[j]) {
        temp = n[i];
        n[i] = n[j];
        n[j] = temp;
      }
    }
  }
  console.log(n);
};


sortArray([3,5,6,8,7])