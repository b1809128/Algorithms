const check = (n,x) =>{
    var index = n.indexOf(x);
    if (index > -1) return n.splice(0,index);
    console.log(n);
    // return n;
}
const getSecondLargest = (n)=>{
    var max = n[0];
    for (let i = 0; i < n.length; i++){
        if(max  < n[i]){
            max = n[i];
        }
    }
    // console.log("max: " + max);
    var array = [];
    for (let i = 0; i < n.length; i++){
        if(n[i] != max) {
            array.push(n[i]);
        }
    }
    // console.log(array);
    var result = array[0];
    for (let i = 0; i < array.length; i++){
        if(result  < array[i]){
            result = array[i];
        }
    }
    // console.log(result);
    return result;
}

getSecondLargest([2,3,6,6,5])