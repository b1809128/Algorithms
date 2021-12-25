class Rectangle {
  //Setup
  constructor(width, height, color) {
    console.log("Hello Object Oriented Programming");
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea() {
      return this.width * this.height;
  }
  printInfo() {
      return[this.width, this.height, this.color];
  }
}

let myRectangle1 = new Rectangle(3,5,"blue");
let myRectangle2 = new Rectangle(5,4,"red");


console.log(myRectangle1.printInfo(), myRectangle2.printInfo());
console.log(myRectangle1.getArea(), myRectangle2.getArea());
