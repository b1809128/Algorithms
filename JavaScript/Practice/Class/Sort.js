class Sort {
  constructor(data) {
    this.data = data;
  }

  length = () => {
    return this.data.length;
  };

  swap = (i, j) => {
    //Swap truyen thong
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  };

  swapNew = (i, j) => {
    //Swap new
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  };

  //Sap xep 2 thang ke nhau thang nao lon thi noi len
  bubbleSort = () => {
    for (let i = 0; i < this.length() - 1; i++) {
      for (let j = 0; j < this.length() - 1 - i; j++) {
        if (this.data[j] > this.data[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
    return this.data;
  };
  //Tot nhat: O(n)
  bubbleSortOrderLast = () => {
    for (let i = 0; i < this.length() - 1; i++) {
      for (let j = this.length() - 1; j > i; j--) {
        if (this.data[j] < this.data[j - 1]) {
          this.swap(j, j - 1);
        }
      }
    }
    return this.data;
  };
  //Tot nhat: O(n)
  insertSort = () => {
    for (let i = 1; i < this.length(); i++) {
      for (let j = i; j >= 0; j--) {
        if (this.data[j] < this.data[j - 1]) {
          this.swap(j, j - 1);
        }
      }
    }
    return this.data;
  };

  //Tot nhat: O(n^2)
  selectionSort = () => {
    var min = 0;
    for (let i = 0; i < this.length() - 1; i++) {
      min = i;
      for (let j = i + 1; j < this.length(); j++) {
        if (this.data[min] > this.data[j]) {
          min = j;
        }
      }
      //swap function
      this.swapNew(min, i);
    }
    return this.data;
  };

  //Tot nhat: O(nlog(n))
  quickSort = (data) => {
    if (data.length < 2) return data;
    const pivotIndex = data.length - 1;
    const pivot = data[pivotIndex];

    var left = [];
    var right = [];

    var currItems;

    for (let i = 0; i < pivotIndex; i++) {
      currItems = data[i];
      if (currItems < pivot) {
        left.push(currItems);
      } else right.push(currItems);
    }
    return [...this.quickSort(left), pivot, ...this.quickSort(right)];
  };

  merge = (left, right) => {
    let array = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        array.push(left.shift());
      } else {
        array.push(right.shift());
      }
    }
    return [...array, ...left, ...right];
  };

  mergeSort = (data) => {
    const p = data.length / 2;
    if (data.length < 2) return data;
    const left = data.splice(0, p);
    // console.log([left,data]);
    return this.merge(this.mergeSort(left), this.mergeSort(data));
  };
}

// const test = [1, 2, 4, 5, 1, 3, 8, 5];
// const arr1 = new Sort(test);
// console.log(arr1.mergeSort(arr1.data));
// arr1.mergeSort(arr1.data);

//TODO: Export Class Methods
module.exports = Sort;
