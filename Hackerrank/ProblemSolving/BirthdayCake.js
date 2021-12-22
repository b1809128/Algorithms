const birthdayCake = (n)=>{
    var max = n[0];
    for (var i = 0; i < n.length; i++){
        if(max < n[i]){
            max = n[i];
        }
    }
    var count = 0;
    for (var i = 0; i < n.length; i++){
        if(n[i] === max){count++;}
    }
    return count;
}

console.log(birthdayCake([4,4,1,3]))