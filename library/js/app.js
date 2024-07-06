let bookLists = [];

const form = document.querySelector(".book-form");
const deleteBook = document.querySelector("#delete-book");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const bookName = document.getElementById("bookName").value;
    const author = document.getElementById("author").value;
    const publicationYear = document.getElementById("publicationYear").value;
    const publisher = document.getElementById("publisher").value;
    const pageCount = document.getElementById("pageCount").value;
    const genre = document.getElementById("genre").value;

    const book = {
        bookName: bookName,
        author: author,
        publicationYear: publicationYear,
        publisher: publisher,
        pageCount: pageCount,
        genre: genre
    };
    bookLists.push(book);
    displayBooks(bookLists);
    form.reset();
});

deleteBook.addEventListener("click", () => {
    bookLists.pop();
    displayBooks(bookLists);
});

function displayBooks(books) {
    const bookDisplay = document.getElementById("bookDisplay");
    bookDisplay.innerHTML = '';
    bookLists.forEach(function(e){
        const display = document.createElement("li");
        display.textContent = `${e.bookName} - ${e.author} - ${e.publicationYear} - ${e.publisher} - ${e.pageCount} - ${e.genre}`;
        bookDisplay.appendChild(display)
    })
}
