let myLibrary = []



function Book(title, author, numPages, readStatus) {
    this.title = title
    this.author = author
    this.numPages = numPages 
    this.readStatus = readStatus
    // this.info = function() {
    //     return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.readStatus ? 'already read': 'not read yet'}`
    // }
    //TODO: Look at this function to see if it contains all the info needed on the book
}

Book.prototype = {
    info: function() {
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.readStatus ? 'already read': 'not read yet'}`
    }
}

function addBookToLibrary() {
    //TODO: Write a function that adds a book (from user input) to myLibrary
    //BUG:
    //FIXME: 
}