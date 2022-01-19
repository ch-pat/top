function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages long, ${this.read ? "read" : "not read"}`
    }
}

function addBook(title, author, pages, bookshelf) {
    const book = new Book(title, author, pages, false);
    appendBookToBookshelf(bookshelf, book);
}

function addBookFromForm(event) {
    const titleP = document.querySelector("#title");
    const authorP = document.querySelector("#author");
    const pagesP = document.querySelector("#pages");
    let title = titleP.value;
    let author = authorP.value;
    let pages = pagesP.value;
    titleP.value = null;
    authorP.value = null;
    pagesP.value = null;
    if (!title) { title = "Unknown title"; }
    if (!author) { author = "Unknown author"; }
    if (!pages) {pages = "Unknown pages"}
    addBook(title, author, pages, bookshelf);
}

function showForm(event) {
    const form = document.querySelector("#new-book-form");
    form.style.visibility = "visible";
    event.target.remove();
}

function removeBook(event) {
    let bookDiv = event.target.parentElement;
    bookDiv.remove();
}

function toggleRead(event) {
    let toggle = event.target;
    let read = toggle.getAttribute("class") == "read";
    if (read) {
        toggle.textContent = "Status: Unread"
        toggle.setAttribute("class", "unread");
    } else {
        toggle.textContent = "Status: Read"
        toggle.setAttribute("class", "read");
    }
    
}

function appendBookToBookshelf (bookshelf, book) {
    let bookDiv = document.createElement("div");
    bookDiv.setAttribute("class", "book");
    bookDiv.setAttribute("data-index", counter);

    let authorP = document.createElement("p");
    authorP.setAttribute("class", "author");
    authorP.textContent = "Author: " + book.author;
    let pagesP = document.createElement("p");
    pagesP.setAttribute("class", "pages");
    pagesP.textContent = "#Pages: " + book.pages;
    let titleP = document.createElement("p");
    titleP.setAttribute("class", "title");
    titleP.textContent = book.title;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove from library";
    removeBtn.setAttribute("data-index", counter);
    removeBtn.setAttribute("class", "remove");
    removeBtn.addEventListener("click", removeBook);

    let toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Status: Unread";
    toggleBtn.setAttribute("data-index", counter);
    toggleBtn.setAttribute("class", "unread");
    toggleBtn.addEventListener("click", toggleRead);

    bookDiv.appendChild(titleP);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(pagesP);
    bookDiv.appendChild(removeBtn);
    bookDiv.appendChild(toggleBtn);

    bookshelf.appendChild(bookDiv);
    counter++;

}

let bookshelf = document.querySelector("#bookshelf");
let counter = 0;

appendBookToBookshelf(bookshelf, new Book("Example book", "Example author", 123, false));

let addBtn = document.querySelector("#submit");
addBtn.addEventListener("click", addBookFromForm);

let showFormBtn = document.querySelector("#add-book");
showFormBtn.addEventListener("click", showForm);