const plusMinus = (arr)=>{
    var c1  =0;
    var c2 =0;
    var c3 =0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == 0) c1++;
        else if(arr[i] < 0)c2++;
        else c3++;
    }
    console.log((c3/arr.length).toFixed(6));
    console.log((c2/arr.length).toFixed(6));
    console.log((c1/arr.length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1])