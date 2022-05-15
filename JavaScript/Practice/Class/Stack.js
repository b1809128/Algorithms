class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push = (element) => {
    this.storage[this.count] = element;
    this.count++;
  };

  pop = ()=>{
      if(this.count === 0) return;
      this.count--;
      let result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
  }

  size = () => {
    return this.count;
  };

  last = () => {
      return this.storage[this.count - 1];
  }

  get = () => {
    return this.storage;
  };
}

var myStack = new Stack();

myStack.push(1)
myStack.push("VietNam")
myStack.push(2)
console.log(myStack.last());
console.log(myStack.get());
myStack.pop();
console.log(myStack.get());
