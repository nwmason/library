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

// to do:
// iterate over myLibrary, publishing book info
// on each individual Book div in class book-container
myLibrary.forEach(function (arrayItem) {
    console.log(arrayItem.title)
});