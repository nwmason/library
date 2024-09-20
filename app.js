// books to be stored in array
const myLibrary = [];

// function for deleting book to be stored on prototype,
// not within the constructor!
function Book(title, author, pageNumber, readStatus) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.readStatus = readStatus
}

Book.prototype.changeReadStatus = function () {
    if (this.readStatus === true) {
        // changing the books read status from "true" to "false"
        return false
    } else {
        return true
    }
}

const theLordofTheRings = new Book("The Lord of the Rings", "J.R.R. Tolkien", "1077", true)
const Lovecraft = new Book("La Musica de Erich Zann", "H.P. Lovecraft", "175", true)


function addBooktoLibrary() {
    // learn about dialogs and modals then come back
}

myLibrary.push(theLordofTheRings)
myLibrary.push(Lovecraft)
console.log(myLibrary)
// to do:
// iterate over myLibrary, publishing book info
// on each individual Book div in class book-container
const libraryGrid = document.querySelector(".container")

myLibrary.forEach(function(bookObject) {
    const bookContainer = document.createElement("div");

    bookContainer.setAttribute("class", "book-container");
    libraryGrid.appendChild(bookContainer);

    const TitleLabel = document.createElement("div");
    const AuthorLabel = document.createElement("div");
    const PagesLabel = document.createElement("div");
    const ReadStatusLabel = document.createElement("div");

    TitleLabel.setAttribute("class", "label");
    TitleLabel.textContent = "Title:";
    AuthorLabel.setAttribute("class", "label");
    AuthorLabel.textContent = "Author:";
    PagesLabel.setAttribute("class", "label");
    PagesLabel.textContent = "Pages:";
    ReadStatusLabel.setAttribute("class", "label");
    ReadStatusLabel.textContent = "Have read?";

    const bookTitle = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookReadStatusGrid = document.createElement("form");

    bookTitle.setAttribute("class", "book-title");
    bookTitle.textContent = bookObject.title;
    bookAuthor.setAttribute("class", "book-author");
    bookAuthor.textContent = bookObject.author;
    bookPages.setAttribute("class", "book-pages");
    bookPages.textContent = bookObject.pageNumber;
    bookReadStatusGrid.setAttribute("id", "read-status");

    bookContainer.appendChild(TitleLabel);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(AuthorLabel);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(PagesLabel);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(ReadStatusLabel);
    bookContainer.appendChild(bookReadStatusGrid);
});

