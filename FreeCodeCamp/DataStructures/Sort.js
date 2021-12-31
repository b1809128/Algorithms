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
    for (let i = 0; i < this.data.length - 1; i++) {
      for (let j = 0; j < this.data.length - 1 - i; j++) {
        if (this.data[j] > this.data[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
    return this.data;
  };

  bubbleSortOrderLast = () => {
    for (let i = 0; i < this.data.length - 1; i++) {
      for (let j = this.data.length - 1; j > i; j--) {
        if (this.data[j] < this.data[j - 1]) {
          this.swap(j, j - 1);
        }
      }
    }
    return this.data;
  };

  selectionSort = () => {
    var min = 0;
    for (let i = 0; i < this.data.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < this.data.length; j++) {
        if (this.data[min] > this.data[j]) {
          min = j;
        }
      }
      //swap function
      this.swapNew(min, i);
    }
    return this.data;
  };

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
}

const test = [1, 2, 4, 5, 1, 3, 8, 5];
const arr1 = new Sort(test);
console.log(arr1.quickSort(arr1.data));
