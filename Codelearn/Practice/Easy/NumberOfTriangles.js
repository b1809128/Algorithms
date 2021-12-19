const numberOfTriangles = (n)=>{
    var sum = 0;
    for(var i=1; i<n+2; i++){
        sum += i;
        console.log(sum);
    }
    return sum;
}

console.log(numberOfTriangles(37))