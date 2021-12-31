class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  printInfo() {
    return [this.name, this.age, this.gender];
  }
}
module.exports = Person;

const p1 = new Person("QuocHuy",21,"Male");

console.log(p1.printInfo());