class Square{
    constructor(width){
        this.width = width;
        this.height = width;
    }

    get area(){
        return this.width * this.height;
    }

    set area(area){
        this.width = Math.sqrt(area);
        this.height = this.width;
    }

}

let square1 = new Square(5);
//In ra dien tich khi n = 5
console.log(square1.area)
//Set lai gia tri n = 6 khi dien tich = 36
square1.area = 36
//In ra chieu cao sau khi duoc set
console.log(square1.height)