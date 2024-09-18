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

const testBook = new Book("The Alpha", "Me", "0", false)
const otherBook = new Book("The Omega", "Not Me", "999", true)


function addBooktoLibrary() {
    // learn about dialogs and modals then come back
}

myLibrary.push(testBook)
myLibrary.push(otherBook)

// to do:
// iterate over myLibrary, publishing book info
// on each individual Book div in class book-container