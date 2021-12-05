const sumNumbersLargerAverage = (n)=>{
    var sum = 0;
    var average = 0;
    var lastValue = 0;
    for (let i = 0; i < n.length; i++){
        sum += n[i];
    }
    average = sum / n.length;
    // console.log(average);
    var array = [];
    for (let i = 0; i < n.length; i++){
        if(n[i] > average){
            array.push(n[i]);
        }
    }
    for (let i = 0; i < array.length; i++){
        lastValue+=array[i];
    }
    // console.log(lastValue);
    if(lastValue) return lastValue;
    return -1;
}

sumNumbersLargerAverage([1,2,3,4,5])