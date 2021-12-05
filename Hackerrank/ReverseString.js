const reverseString = (s) => {
  var str = s.toString();
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);
};

const test = (s) => {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (error) {
    console.log(error.message);
  }
};

const getCounts = (objects) => {
    var count = 0;
    for (var i = 0; i < objects.length; i++) {
        if(objects[i].a == objects[i].b){
            count++;
        }
        // console.log(objects[i].a, objects[i].b)
    }
    console.log(count);
};

// reverseString(12345)
// test(Number(12345))
getCounts([
  { a: 1, b: 1 },
  { a: 2, b: 3 },
  { a: 3, b: 3 },
  { a: 3, b: 4 },
  { a: 4, b: 5 },
]);
