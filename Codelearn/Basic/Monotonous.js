//None Complete
const isMonotonous = (array) => {
    const newArray = [...array]
const hightolow = newArray.sort((a, b) => {return b-a})
const lowtohigh = newArray.sort((a, b) => {return a-b})
  if (array.length == 1) return true;
  if (array.length == 2) return !(array[0] == array[1]);
  else {
      for(var i = 0; i < hightolow.length; i++){
          for(var j = 0; j < array.length; j++){
              if (array[i] == array[j]) return true;
              return false;
          }
      }
      for(var i = 0; i < lowtohigh.length; i++){
        for(var j = 0; j < array.length; j++){
            if (array[i] == array[j]) return true;
            return false;
        }
    }
  }
  return false;
};

console.log(isMonotonous([2,1,5]));
