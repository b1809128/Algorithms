let arr2D = [[2, 0], [4, 3], [1, 7]];
let arr = [4, 6, 3, 5]

const sort2DArray = (arr: any) => {

    let sorted = arr.sort((a: any, b: any) => a[0] - b[0]);

    return sorted
}

console.log(sort2DArray(arr2D))
// console.log(arr2D)
// sort2DArray(arr2D)

// console.log(swapArray(1, 5));
