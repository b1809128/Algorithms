const digitsProduct = (n)=>{
    var array = [];
    var newArray = [];
    for (let i = 0; i < n; i++) {
        if(n % i == 0) {
            array.push(i);
        }
    }
    console.log(array);
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(array[i]*array[j] == n){
                console.log(array[i]);
                // newArray.push(array[i].toString()+array[j].toString());
            }
        }
    }
    // console.log(newArray);
    // var min = parseInt(newArray[0])
    // console.log(min);
    // return min;
}



digitsProduct(450)