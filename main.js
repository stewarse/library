const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pageCount = document.querySelector('#page-count')
const readStatus = document.querySelector("#read-status")
const submit = document.querySelector('#submit')

submit.addEventListener('click', addBookToLibrary)

let myLibrary = []

function Book(title, author, numPages, readStatus) {
    this.title = title
    this.author = author
    this.numPages = numPages 
    this.readStatus = readStatus
    //TODO: Look at this function to see if it contains all the info needed on the book
}

Book.prototype = {
    updateReadStatus: function() {
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.readStatus === 'yes' ? 'already read': 'not read yet'}`
    }
}

function addBookToLibrary() {
    //TODO: Write a function that adds a book (from user input) to myLibrary

    let book = new Book(title.value, author.value, pageCount.value, readStatus.value)
    myLibrary.push(book)
    console.log(myLibrary)
    clearDisplay()

}
function clearDisplay() {
    title.value = author.value = pageCount.value = readStatus.value = ''
}

    //BUG:
    //FIXME: 



    let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 310, 'yes' )
    let harryPotterSorcerorStone = new Book("Harry Potter and the Sorceror's Stone", "J.K. Rowling", 223, 'yes')
    myLibrary.push(theHobbit)
    myLibrary.push(harryPotterSorcerorStone)