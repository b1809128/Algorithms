const checkPrimeNumber = (x) => {
    var flag = true;
    if (x < 2) {
      flag = false;
    } else if (x == 2) {
      flag = true;
    } else if (x % 2 == 0) {
      flag = false;
    } else {
      for (var i = 3; i < x - 1; i += 2) {
        if (x % i == 0) {
          flag = false;
          break;
        }
      }
    }
    return flag;
  };


const maxComNumbers = (n) =>{
    var array = [];
    for(let i = 2; i < n; i++) {
        if(!checkPrimeNumber(i)){
            array.push(i);
        }
    }
    console.log(array);
    var numTest = array[0];
    var sum = 0;
    var result = 0;
    for(var i = 0; i < array.length; i++) {
       while(sum < n){
           sum += array[i];
           console.log(sum);
           result++;
       }
    }
    console.log(result);
}

maxComNumbers(77)