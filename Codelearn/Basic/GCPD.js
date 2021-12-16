const checkPrimeNumber = (x)=>{
    var flag = true;
    if(x < 2){
        flag = false;
    }
    else if(x == 2){
        flag = true;
    }
    else if(x % 2 == 0){
        flag = false;
    }
    else{
        for (var i = 3; i < x-1; i+=2)
        {
            if (x % i == 0){
                flag = false;
                break;
            }
        }
    }
    return flag;
  }
  

function greatestCommonPrimeDivisor(a,b){
    var array = []
    for(var i=1; i <= a; i++){
        if(a%i==0){
            array.push(i);
        }
    }
    // console.log(array);
    
    for(var i=1; i <= b; i++){
        if(a%i==0){
            array.push(i);
        }
    }
    // console.log(array);
    var newArray = [];
    for(let i= 0; i < array.length;i++){
        if(checkPrimeNumber(array[i])){
            newArray.push(array[i]);
        }
        
    }
    // console.log(newArray);

    var max = newArray[0];
    for(let i=0;i<newArray.length; i++){
        if((a%newArray[i] == 0) && (b%newArray[i] == 0)){
            if(max < newArray[i]){
                max = newArray[i];
            }
        }
        else{
            max=-1;
        }
    }
    console.log("GreatestCommonPrimeDivisor is : " + max);
    // console.log(max);

}


greatestCommonPrimeDivisor(12,18);
