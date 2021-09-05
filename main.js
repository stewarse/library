const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pageCount = document.querySelector('#page-count')
const readStatus = document.querySelector("#read-status")
const submit = document.querySelector('#submit')
const display = document.querySelector('#book-display')
const add = document.querySelector('#add-book')
const bookForm = document.querySelector('#book-input-form')
const modal = document.querySelector('#modal-backdrop')
const cancel = document.querySelector('#cancel')
//const removeBook = document.querySelector('.remove-book')

submit.addEventListener('click', addBookToLibrary)
add.addEventListener('click', showAddBookForm)
display.addEventListener('click', deleteBook)
display.addEventListener('click', updateReadStatus)
modal.addEventListener('click', closeForm)
cancel.addEventListener('click', closeForm)

let myLibrary = []

function Book(title, author, numPages, readStatus) {
    this.title = title
    this.author = author
    this.numPages = numPages 
    this.readStatus = readStatus
}

Book.prototype = {
    toggleReadStatus: function() {
            this.readStatus === 'Read' ? this.readStatus = 'Not read' : this.readStatus = 'Read'
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
    //[x] : Add Button to bring up form to add in a new book

function addBookToDisplay(book) {
    //[x] : Write a function that displays new books on the DOM 
    //[x] : Need to add a button that allows user to remove a book
        const bookDiv = document.createElement("div")
        bookDiv.classList.add('book')
        bookDiv.setAttribute('data-id', getIndex())

        const titleDiv = document.createElement("div")
        const authorDiv = document.createElement("div")
        const pagesDiv = document.createElement("div")
        const remove = document.createElement("button")
        const readStatusDiv = document.createElement("div")
        const updateReadStatus = document.createElement("button")

        remove.classList.add("remove-book")
        updateReadStatus.classList.add("update-read-status")

        titleDiv.textContent = book.title
        authorDiv.textContent = book.author
        pagesDiv.textContent = book.numPages + ' pages'
        remove.textContent = '[X]'
        readStatusDiv.textContent = book.readStatus
        updateReadStatus.textContent = book.readStatus === 'not read' ? 'Mark as Read' : 'Mark as Not Read'

        bookDiv.appendChild(remove)
        bookDiv.appendChild(titleDiv)
        bookDiv.appendChild(authorDiv)
        bookDiv.appendChild(pagesDiv)
        bookDiv.appendChild(readStatusDiv)
        bookDiv.appendChild(updateReadStatus)

        display.appendChild(bookDiv)
}

function showAddBookForm() {
    bookForm.style.display = 'grid'
    modal.style.display = 'block'
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

function updateReadStatus(e) {

    if(e.target.className !== 'update-read-status') return;

    let bookID = e.target.closest('.book').dataset.id
    console.log(myLibrary[bookID])
    myLibrary[bookID].toggleReadStatus()
    console.log(e.target)

    e.target.textContent = myLibrary[bookID].readStatus === 'Read' ? 'Mark as not read' : 'Mark as read'
}


function getIndex() {
    let index = myLibrary.indexOf(null)

    if(index > -1) {
        return index
    }

    return myLibrary.length
}

function closeForm() {
    bookForm.style.display = 'none';
    modal.style.display = 'none';
    clearForm();
}


    let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 310, 'read' )
    let harryPotterSorcerorStone = new Book("Harry Potter and the Sorceror's Stone", "J.K. Rowling", 223, 'read')

    myLibrary.push(theHobbit, null, harryPotterSorcerorStone)
    
//addBookToDisplay()

//[x] : Fix the readStatus to be Read or Not Read in the Object 
//[x] : Update Form to allow selection of Read or Not Read with default of blank
//[x] : Add Method to the object.prototype to toggle readStatus
//[x] : Add Button to the UI to toggle status
//[x] : Add eventListener to call prototype method when Read Status is called
//[x] : Fix Number input to only accept positive numbers
//[ ] : Update CSS to correctly format book with new fields
//[ ] : Add general html and CSS updates so that the app looks better {Title, background color, etc.}
//[x] : Add a modal that creates a blurred effect on the background when form is displayed
//[x] : Add Event Listener to hide form and modal when modal is clicked
//[x] : Functionality for Cancel button
//[ ] : Update Read Status text in DOM when status changes 