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

const checkDivisor = (x)=>{
    var array = [];
    for (let i = 1; i <= x;i++){
        if(x % i == 0){
            array.push(i);
        }
    }
    var newArray = [];
    for (let i = 0; i < array.length; i++){
        if(checkPrimeNumber(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// const primeDivisor

const primeDivisor = (a,b,k)=>{
    var count = 0;
    for(let i = a;i <= b;i++){
        // console.log(checkDivisor(i).length);
        if(checkDivisor(i).length == k){
            count++;
        }
    }
    console.log(count)
}

// primeDivisor(5,15,2)
console.time("taskTime ");
primeDivisor(2,100000,3)
console.timeEnd("taskTime ")