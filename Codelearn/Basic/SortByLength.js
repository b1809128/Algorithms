//None Complete
const sortByLength = (n)=>{
    var temp = 0;
    for (var i = 0; i < n.length; i++) {
      for (var j = i + 1; j < n.length; j++) {
        if (n[i].length > n[j].length) {
          temp = n[i];
          n[i] = n[j];
          n[j] = temp;
        }
      }
    }
    console.log(n);
}

sortByLength(["abc",   "",   "aaa",   "a",   "zz"])