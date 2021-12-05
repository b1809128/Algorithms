console.time("testTime");
const array = [1,2,3,4,5]
const sum = (data)=>{
    var s = 0;
    for(let i = 0; i < data.length;i++){
        s += data[i];
    }
    return s;
}

console.log(sum(array));

console.timeEnd("testTime");