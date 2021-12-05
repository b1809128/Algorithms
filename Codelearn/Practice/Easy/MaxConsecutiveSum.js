const arrayMaxConsecutiveSum = (data,k)=>{
    var j = 0;
    var array = [];
    for(let i = 0; i < data.length; i++) {
            j = i + 1;
            x = j + 1;                  
            // console.log(data[i]+data[j]+data[x]);
            array.push(data[i]+data[j]+data[x]);
    }

    // console.log(array);
    var max = array[0];
    for (i=0; i<array.length; i++) {
        if(max < array[i]){
            max = array[i];
        }
    }
    console.log(max);
}

// arrayMaxConsecutiveSum([2, 3, 5, 1, 6],2)
// arrayMaxConsecutiveSum([2, 4,10,1],2)
arrayMaxConsecutiveSum([1,3,2,4],2)