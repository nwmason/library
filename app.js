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
const Lovecraft = new Book("La Musica de Erich Zann", "H.P. Lovecraft", "175", false)

function addBooktoLibrary() {
    // learn about dialogs and modals then come back
}

myLibrary.push(theLordofTheRings)
myLibrary.push(Lovecraft)
console.log(myLibrary)
// to do:
// functioning book deletion
const libraryGrid = document.querySelector(".container")
let n = 0
myLibrary.forEach(function (bookObject) {

    n++
    const bookContainer = document.createElement("div");

    bookContainer.setAttribute("class", "book-container");
    bookContainer.setAttribute("id", bookObject.title + n)
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
    const bookReadStatusGrid = document.createElement("div");

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

    const readCheckBox = document.createElement("input");
    const bookReadStatus = document.createElement("div");

    readCheckBox.type = "checkbox";
    readCheckBox.setAttribute("class", "read-checkbox")
    bookReadStatus.setAttribute("id", "read-text");


    if (bookObject.readStatus === true) {
        readCheckBox.checked = true;
        bookReadStatus.setAttribute("class", "yes");
        bookReadStatus.textContent = "Yes!";
    } else {
        readCheckBox.checked = false;
        bookReadStatus.setAttribute("class", "no");
        bookReadStatus.textContent = "Not Yet!";
    }

    bookReadStatusGrid.appendChild(readCheckBox)
    bookReadStatusGrid.appendChild(bookReadStatus)

    readCheckBox.addEventListener("change", () => {
        if (readCheckBox.checked === true) {
            bookReadStatus.setAttribute("class", "yes");
            bookReadStatus.textContent = "Yes!";
        } else {
            bookReadStatus.setAttribute("class", "no");
            bookReadStatus.textContent = "Not Yet!";
        }
    })

    const svgCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>'
    const svgContainer = document.createElement("div");
    svgContainer.innerHTML = svgCode;

    svgContainer.setAttribute("class", "trash-icon")
    bookContainer.appendChild(svgContainer)


    svgContainer.addEventListener("click", () => {
        const dialog = document.querySelector("#delete-warning");
        dialog.showModal();

        const deleteBook = document.querySelector(".delete-book")
        const keepBook = document.querySelector(".keep-book")

        deleteBook.addEventListener("click", () => {
            dialog.close();
        })
        keepBook.addEventListener("click", () => {
            dialog.close()
            console.log("closed")
        })
    })

});

