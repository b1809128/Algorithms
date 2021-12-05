console.time("testTime");

const pairSumSequence = (n)=>{
    var s = 0;
    for(let i = 0; i < n; i++) {
        s += pairSum(i, i+1);
    }
    return s;
}

const pairSum = (a,b)=>{
    return a + b;
}

/**
 * array = [0,1,2]
 * 0-1 => s=1
 * 1-2 => s=4
 * 2-3 => s=9
 */

console.log("Pair Sum: "+ pairSumSequence(3));

console.timeEnd("testTime");