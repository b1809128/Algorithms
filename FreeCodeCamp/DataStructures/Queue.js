const Queue = function () {
  collection = [];
  this.print = () => {
    console.log(collection);
  };

  //Push Element
  this.enqueue = (elment) => {
    collection.push(elment);
  };

  this.dequeue = () => {
    return collection.shift();
  };

  this.front = () => {
    return collection[0];
  };

  this.size = () => {
    return collection.length;
  };

  this.isEmpty = () => {
    return collection.length === 0;
  };
};

const PriorityQueue = function () {
  var collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          //checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
};

// var q = new Queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.print();
// console.log(q.size());
// q.dequeue();
// q.print();
// console.log(q.front());

var p = new PriorityQueue();

p.enqueue(["ReactJS", 3]);
p.enqueue(["NextJS", 2]);
p.enqueue(["ThreeJS", 1]);
p.enqueue(["AngularJS", 2]);

// console.log(p.front());
p.printCollection();
p.dequeue();
p.printCollection();
