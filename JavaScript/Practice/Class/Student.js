var Person = require("./Personality"); 

class Student extends Person {
  constructor(name, age, gender, study) {
    super(name, age, gender);
    this.study = study;
  }

  print() {
    return [this.name, this.age, this.gender,this.study];
  }
}

const s1 = new Student("ThaoAnh",22,"Female","Can Tho University");

console.log(s1.print());