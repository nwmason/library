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


function addBooktoLibrary() {

}