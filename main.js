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
const form = document.querySelector('form')

form.addEventListener('submit', addBookToLibrary)
// form.onsubmit()
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
            this.readStatus === 'Read' ? this.readStatus = 'Not Read' : this.readStatus = 'Read'
    }
}

function addBookToLibrary(e) {
    //[x]: Write a function that adds a book (from user input) to myLibrary
    e.preventDefault()

    let book = new Book(title.value, author.value, pageCount.value, readStatus.value)
    clearForm()
    addBookToDisplay(book)
    myLibrary[getIndex()] = book
    closeForm()

}
function clearForm() {
    title.value = author.value = pageCount.value = readStatus.value = ''
}
    //[x] : Add Button to bring up form to add in a new book

function addBookToDisplay(book) {
    //[x] : Write a function that displays new books on the DOM 
    //[x] : Need to add a button that allows user to remove a book
    let index = getIndex();    
    const bookDiv = document.createElement("div")
        bookDiv.classList.add('book')
        bookDiv.setAttribute('data-id', index)

        const titleH2 = document.createElement("h2")
        const authorDiv = document.createElement("div")
        const pagesDiv = document.createElement("div")
        const remove = document.createElement("button")
        const readStatusDiv = document.createElement("div")
        const toggleReadStatusbtn = document.createElement("button")

        readStatusDiv.setAttribute('id', `read-status-${index}`)

        remove.classList.add("remove-book")
        toggleReadStatusbtn.classList.add("update-read-status")

        titleH2.textContent = book.title
        authorDiv.textContent = `Author: ${book.author}`
        pagesDiv.textContent = `Page Count: ${book.numPages}`
        remove.textContent = '[X]'
        readStatusDiv.textContent = book.readStatus
        toggleReadStatusbtn.textContent = 'Change Status'

        bookDiv.appendChild(remove)
        bookDiv.appendChild(titleH2)
        bookDiv.appendChild(authorDiv)
        bookDiv.appendChild(pagesDiv)
        bookDiv.appendChild(readStatusDiv)
        bookDiv.appendChild(toggleReadStatusbtn)

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

    let bookID = e.target.closest('.book').dataset.id;
    let bookToUpdate = myLibrary[bookID];

    console.log(bookToUpdate)
    bookToUpdate.toggleReadStatus()
    console.log(e.target)



    // let bookStatus = 
    document.querySelector(`#read-status-${bookID}`).textContent = `Status: ${bookToUpdate.readStatus}`
    // bookStatus.textContent = bookToUpdate.readStatus
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


    let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 310, 'Read' )
    let harryPotterSorcerorStone = new Book("Harry Potter and the Sorceror's Stone", "J.K. Rowling", 223, 'read')

    myLibrary.push(theHobbit, null, harryPotterSorcerorStone)
    
//addBookToDisplay()

//[x] : Fix the readStatus to be Read or Not Read in the Object 
//[x] : Update Form to allow selection of Read or Not Read with default of blank
//[x] : Add Method to the object.prototype to toggle readStatus
//[x] : Add Button to the UI to toggle status
//[x] : Add eventListener to call prototype method when Read Status is called
//[x] : Fix Number input to only accept positive numbers
//[x] : Update CSS to correctly format book with new fields
//[x] : Add general html and CSS updates so that the app looks better {Title, background color, etc.}
//[x] : Add a modal that creates a blurred effect on the background when form is displayed
//[x] : Add Event Listener to hide form and modal when modal is clicked
//[x] : Functionality for Cancel button
//[x] : Update Read Status text in DOM when status changes 
//[x] : Form is being submitted without all forms being submitted
//[ ] : Need to figure out the Submit event so that it works properly in the library