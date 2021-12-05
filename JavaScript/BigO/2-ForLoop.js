const array = [1,2,3,4,5];

const test = (data)=>{
    for(let i=0;i < data.length; i++){
        for(j = i+1; j < data.length; j++){
            console.log(data[i] + ", "+ data[j]);
        }
    }
}

test(array)
