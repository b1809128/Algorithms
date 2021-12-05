const NumberZeroDigits = (n)=>{
    var s = 1;
    for(let i = n; i >= 1; i--){
        s *= i;
    }
    // console.log(s);
    var count = 0;
    while(s % 10 ==0){
        s/=10;
        count++;
    }
    console.log(count);
}

NumberZeroDigits(100);