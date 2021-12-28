class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getInfo() {
    return "Infomation: " + [this.title, this.author, this.year];
  }
}

const b1 = new Book("javascript", "none", "1995");
console.log(b1);
console.log(b1.getInfo());

class Note extends Book {
  constructor(title, author, year, note) {
    super(title, author, year);
    this.note = note;
  }
}

const n1 = new Note("ES5", "none", "2005", "Allowed JavaScript OOP");
console.log(n1.getInfo());
