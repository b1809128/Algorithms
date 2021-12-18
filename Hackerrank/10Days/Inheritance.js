class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

// khong ho tro arrow function
Rectangle.prototype.area = function() {
  return this.w * this.h;
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
    constructor(s){
        super(s);
        this.w  =s;
        this.h = s;
    }
}