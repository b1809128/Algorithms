const Stack = function () {
  this.count = 0;
  this.storage = {};

  //Adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //Removes and returns the value at the end of Stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //Get size of the stack
  this.size = function () {
    return this.count;
  };

  //Get the value at the end of Stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };

  //Get all value of the stack
  this.get = function () {
    return this.storage;
  };
};

var myStack = new Stack();

// myStack.push(1)
// myStack.push(2)
myStack.push("freeCodeCamp");
myStack.push("VietNam");
myStack.push("JavaScript");
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.get());
