class Sort {
    data: Array<number>;
    constructor(data: Array<number>) {
        this.data = data;
    }

    lengthData: Function = () => this.data.length;

    swapOld: Function = (i: number, j: number) => {
        let temp: number;
        temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    }

    bubbleSort: Function = () => {
        for (let i: number = 0; i < this.data.length; i++) {
            for (let j: number = 0; j < this.data.length; j++) {
                if (this.data[j] > this.data[j + 1]) {
                    this.swapOld(j, j + 1);
                }
            }
        }

        return this.data;
    }
}

const bbSort = new Sort([1, 9, 0, 3, 6, 4]);
console.log(bbSort.bubbleSort());
