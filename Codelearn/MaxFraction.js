const maxFraction = (numerators, denominators) =>{
    var s = [];
    var x ;
    for (let i = 0; i < numerators.length; i++) {
        x = numerators[i] / denominators[i];
        s.push(x);
    }
    console.log(s);
    var max =  s[0];
    var value = 0;
    for (let i = 0; i < numerators.length; i++) {
        if(max < s[i]) {
            max = s[i];
            value = i;
        }
    }

    console.log(value);
    // return value;
}

maxFraction([5,2,5],[6,3,4])
// maxFraction([1,2,3,10],[1,3,4,11])