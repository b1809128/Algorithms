var hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    // console.log(string.charCodeAt(i));
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

class HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 14;
  }

  printHashTable = () => console.log(this.storage);

  add = (key, value) => {
    let index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
      //Ex: this.storage[0] = [[1,"nodejs"],["fe","reactjs"]]
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  };
}

const ht = new HashTable();
ht.add(1, "nodejs");
ht.add("fe", "reactjs");
ht.add("fs", "typescript");
ht.add(2,"angularjs")

ht.printHashTable();
