class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  listAllBooks() {
    this.books.forEach((book, index) => {
      console.log(`${index + 1}) ${book.name} by ${book.author}`);
    });
  }
}

class Book {
  constructor(name, isbn, price, author) {
    this.name = name;
    this.isbn = isbn;
    this.price = price;
    this.author = author;
    this.readStatus = false;
  }
  info() {
    console.log(
      `${this.readStatus ? "✅" : "❌"} ${this.name} is written by ${
        this.author
      } and you have ${
        this.readStatus ? "read it and" : "have not read it yet and it "
      } is available at Amazon at a price of ${this.price}`
    );
  }
  changeReadStatus() {
    this.readStatus = !this.readStatus;
  }
}

let ctrLibrary = new Library();
let b1 = new Book("The Alchemist", 1023456789, 499, "Paul Coelho");
let b2 = new Book("Elven Minutes", 1098765432, 599, "Paulo Coelho");
let b3 = new Book("the millionaire fastlane", 1234567890, 899, "Afrid Shaik");
let b4 = new Book("Start with WHy?", 5678904321, 699, "Afrid");
ctrLibrary.addBook(b1);
ctrLibrary.addBook(b2);
ctrLibrary.addBook(b3);
ctrLibrary.addBook(b4);
