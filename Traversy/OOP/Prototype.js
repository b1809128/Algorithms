function Book(title, author, year) {
  // console.log('Book Initialized..')
  this.title = title;
  this.author = author;
  this.year = year;
}

const b1 = new Book("javascript", "none", "1995");

Book.prototype.getInfo = function () {
  return [this.title, this.author, this.year];
};

console.log(b1.getInfo());
