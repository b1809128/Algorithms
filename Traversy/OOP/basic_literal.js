//Khởi tạo object có đối tượng info là một hàm
const person= {
    name:"QuocHuy",
    age: 21,
    info: function (){
        return `My name is ${this.name} I'm ${this.age}`
    }
}


//Constructor
function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//Gọi hàm vói prototype
Person.prototype.getText = function(){
    return `My name is ${this.name} I'm ${this.age} and my gender ${this.gender}`
}


//Khởi tạo đối tượng
const p1 = new Person("QuocHuy","21","Male")
const p2 = new Person("ThaoAnh","22","Female")

// Khởi tạo đối tượng hàm trong prototype
const personProto= {
    getInfo: function (){
        return `My name is ${this.name} I was born in ${this.year}, gender ${this.gender}`
    },
    getAge: function(){
        const date = new Date();
        const getNowYear = date.getFullYear();
        return getNowYear - this.year; 
    }
}

// Khởi tạo đối tượng trong Object
const test = Object.create(personProto,{year:{value:2000}})
const test2 = Object.create(personProto,{
    name:{value:"Nguyen Ho Quoc Huy"},
    year:{value: 1998},
    gender:{value:"Male"}
})

console.log(test2.getInfo());