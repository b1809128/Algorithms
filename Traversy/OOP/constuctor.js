//Constructor
function Book(title, author, year){
    // console.log('Book Initialized..')
    this.title = title;
    this.author = author;
    this.year = year;
}

//Object constructor
const initObject = {
    title: "OOP in JavaScript",
    author:"Quoc Huy",
    year:"2021",
    info(){
        return [this.title,this.author,this.year];
    }
}

const book1 = new Book("OOP in JavaScript","QuocHuy","2021");
const book2 = new Book("Rabbit Technology","Thao Anh","2020");

console.log(book1)
console.log(book2)

console.log(initObject.info())

