const compareTriplets = (array1,array2)=>{
    var count1 = 0;
    var count2 = 0;
    for(var i = 0; i < array1.length; i ++){
        if(array1[i] == array2[i]) continue;
        else if( array1[i] < array2[i]) count2++;
        else count1++;
    }
    
    return [count1, count2]
}


console.log(compareTriplets([5,6,7],[3,6,10]))