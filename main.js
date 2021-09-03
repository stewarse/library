const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pageCount = document.querySelector('#page-count')
const readStatus = document.querySelector("#read-status")
const submit = document.querySelector('#submit')
const display = document.querySelector('#book-display')
const add = document.querySelector('#add-book')
const bookForm = document.querySelector('#book-input-form')
//const removeBook = document.querySelector('.remove-book')

submit.addEventListener('click', addBookToLibrary)
add.addEventListener('click', showAddBookForm)
display.addEventListener('click', deleteBook)

let myLibrary = []

function Book(title, author, numPages, readStatus) {
    this.title = title
    this.author = author
    this.numPages = numPages 
    this.readStatus = readStatus
    //[ ] : Look at this function to see if it contains all the info needed on the book
}

Book.prototype = {
    updateReadStatus: function() {
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.readStatus === 'yes' ? 'already read': 'not read yet'}`
    }
}

function addBookToLibrary() {
    //[x]: Write a function that adds a book (from user input) to myLibrary

    let book = new Book(title.value, author.value, pageCount.value, readStatus.value)
    clearForm()
    addBookToDisplay(book)
    myLibrary[getIndex()] = book

}
function clearForm() {
    title.value = author.value = pageCount.value = readStatus.value = ''
}
    //[X] : Add Button to bring up form to add in a new book

function addBookToDisplay(book) {
    //[x] : Write a function that displays new books on the DOM 
    //[x] : Need to add a button that allows user to remove a book
        const bookDiv = document.createElement("div")
        bookDiv.classList.add('book')
        bookDiv.setAttribute('data-id', getIndex())

        const titleDiv = document.createElement("div")
        const authorDiv = document.createElement("div")
        const pagesDiv = document.createElement("div")
        const remove = document.createElement("span")

        remove.classList.add("remove-book")

        titleDiv.textContent = book.title
        authorDiv.textContent = book.author
        pagesDiv.textContent = book.numPages + ' pages'
        remove.textContent = 'X'

        bookDiv.appendChild(remove)
        bookDiv.appendChild(titleDiv)
        bookDiv.appendChild(authorDiv)
        bookDiv.appendChild(pagesDiv)

        display.appendChild(bookDiv)
}

function showAddBookForm() {
    bookForm.style.display = 'grid'
}

function deleteBook(e) {
// [x] : Update to only run when target is = to the X <span> 
// [x] : Need to associate each X to a specific book...Data Attribute? 
// [x] : Remove the book and all children from the display when clicked 
// [x] : Remove book from array

    if(e.target.className !== 'remove-book') return;

    let bookToRemove = e.target.closest('.book')
    bookToRemove.remove();

    myLibrary[bookToRemove.dataset.id] = null
    }

}

function getIndex() {
    let index = myLibrary.indexOf(null)

    if(index > -1) {
        return index
    }

    return myLibrary.length
}


    let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 310, 'yes' )
    let harryPotterSorcerorStone = new Book("Harry Potter and the Sorceror's Stone", "J.K. Rowling", 223, 'yes')

    myLibrary.push(theHobbit, null, harryPotterSorcerorStone)
    
//addBookToDisplay()

    //BUG:
    //FIXME: 