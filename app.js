const myLibrary = [];

function Book(title, author, pageNumber, readStatus) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.readStatus = readStatus
}

//to do:
//create function to add book to library, then project complete
function addBooktoLibrary() {
    const form = document.getElementById("new-book-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
    })
}

const libraryGrid = document.querySelector(".container");
const btnNewBook = document.getElementById("btn-new-book");

let formState = 0

btnNewBook.addEventListener("click", () => {
    if (formState === 0) {

        formState++;

        const bookFormContainer = document.createElement("div");
        bookFormContainer.setAttribute("class", "form-container");
        libraryGrid.appendChild(bookFormContainer)

        const form = document.createElement("form");
        form.setAttribute("method", "post")
        form.setAttribute("action", "submit.php")
        form.setAttribute("id", "new-book-form");

        const titleLabel = document.createElement("label");
        titleLabel.setAttribute("for", "title");
        titleLabel.textContent = "Title:";
        const titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("id", "title");
        titleInput.required = true;
        titleInput.setAttribute("placeholder", "Green Eggs and Ham")

        const authorLabel = document.createElement("label");
        authorLabel.setAttribute("for", "author");
        authorLabel.textContent = "Author:";
        const authorInput = document.createElement("input");
        authorInput.setAttribute("type", "text");
        authorInput.setAttribute("name", "author");
        authorInput.setAttribute("id", "author");
        authorInput.required = true;
        authorInput.setAttribute("placeholder", "Dr. Seuss");

        const pagesLabel = document.createElement("label");
        pagesLabel.setAttribute("for", "pages");
        pagesLabel.textContent = "Page Number:"
        const pagesInput = document.createElement("input");
        pagesInput.setAttribute("type", "number");
        pagesInput.setAttribute("name", "pages");
        pagesInput.setAttribute("id", "pages");
        pagesInput.required = true;
        pagesInput.setAttribute("placeholder", "64");

        const readLabel = document.createElement("label");
        readLabel.setAttribute("for", "form-read-status");
        readLabel.textContent = "Have Read?";
        const readInput = document.createElement("input");
        readInput.setAttribute("type", "checkbox");
        readInput.setAttribute("id", "form-read-status")

        const formSubmit = document.createElement("button");
        formSubmit.setAttribute("class", "form-btn")
        formSubmit.textContent = "Submit"

        bookFormContainer.appendChild(form);
        form.appendChild(titleLabel);
        form.appendChild(titleInput);
        form.appendChild(authorLabel);
        form.appendChild(authorInput);
        form.appendChild(pagesLabel);
        form.appendChild(pagesInput);
        form.appendChild(readLabel);
        form.appendChild(readInput);
        form.appendChild(formSubmit);

    }
})

const theLordofTheRings = new Book("The Lord of the Rings", "J.R.R. Tolkien", "1077", true)
const Lovecraft = new Book("La Musica de Erich Zann", "H.P. Lovecraft", "175", false)

myLibrary.push(theLordofTheRings)
myLibrary.push(Lovecraft)

myLibrary.forEach(function (bookObject) {

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
            svgContainer.parentElement.remove()
        })
        keepBook.addEventListener("click", () => {
            dialog.close()
            console.log("closed")
        })
    })

});