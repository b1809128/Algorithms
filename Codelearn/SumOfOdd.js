const sumOfOddNumbers = (a,b)=>{
    var s = 0;
    var i  = a+1;
    while(i <  b){
        if(i > b){
            break;
        }else if(i%2!=0){
            s+=i;
        }
        i++;
    }
    return s%10000007;
}

console.log(sumOfOddNumbers(3,9))