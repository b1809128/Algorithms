var twoSum = function(nums, target) {
    const array ={};
    for (var i = 0; i < nums.length; i++){
        const currentNums = nums[i];
        const sub = target - currentNums;
        const index2 = array[sub];
        if(index2  != null){
            return [index2,i];
        }
        else{
            array[currentNums] = i;
        }
    }
   
};
// console.log(twoSum([2,1,5,3],4))
console.log(twoSum([3,2,4],6))