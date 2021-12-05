class Person {
  constructor(name) {
    this.name = name;
  }
  call = () => {
    return `hello ${this.name}`;
  };
}

const p1 = new Person("quochuy");

class Attribute extends Person {
    constructor(name,age,gender) {
        super(name);
        this.age = age;
        this.gender = gender;
    }

    info=() => {
        return `My name is ${this.name}, i'm ${this.age}, gender ${this.gender}`;
    }
}

const a1 = new Attribute("quochuy",21,"Male");

console.log(a1.info());
