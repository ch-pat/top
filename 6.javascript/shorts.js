// Objects and Object Constructors

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages long, ${this.read ? "read" : "not read"}`
    }
}

console.log( new Book("Bobbins", "Bilbo Bobbins", 126, true).info())