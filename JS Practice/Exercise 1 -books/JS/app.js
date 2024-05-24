const myLibrary = [];

//Constructor
function Book(title, author, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

//SHOWS THE BOOKS ON THE PAGE
function render(){
    let libraryEl = document.getElementById("library");
    libraryEl.innerHTML = "";
    for (let index = 0; index < myLibrary.length; index++) {
        let book = myLibrary[index];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
            <div class="card-header">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">${book.author}</h5>
            </div>
            <div class="card-body">
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not read yet"}</p>
                <button class="remove-btn" onclick="removeBook(${index})">Remove</button>
            </div>
        `
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}


// --EVENT HANDLERS --

//THIS BRINGS THE FORM
let newBookBtn = document.getElementById('new-book-btn');
newBookBtn.addEventListener("click", function (){
    let newBookForm = document.getElementById('new-book-form');
    newBookForm.style.display = "block";
});


//CALLING THE ADD BOOK METHOD
document.getElementById("new-book-form").addEventListener("submit", function (){
    addBookToLibrary();
})

