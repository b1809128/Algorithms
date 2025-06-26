class UB {
  constructor(id, name, pos) {
    this.id = id;
    this.name = name;
    this.pos = pos;
  }

  logObject(array) {
    const personObject = {};
    for (let i = 0; i < array.length; i++) {
      personObject.id = new UB(array[i].id);
      personObject.name = new UB(array[i].name);
      personObject.pos = new UB(array[i].pos);
    }
    console.table(personObject);
  }
}



let writeObject = new UB();
writeObject.logObject(ObjectsArray);
